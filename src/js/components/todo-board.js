import List from "./list";
import ObjectRebuilder from "./objectRebuilder";

class ToDoBoard {
    constructor() {
        this.lists =
            ObjectRebuilder.restoreObject(
                JSON.parse(localStorage.getItem("lists"))
            ) || [];
        if (this.lists.length === 0) {
            this.initializeLists();
        }

        this.currentListIndex = 0;
        this.currentPriority = "low";
        this.listsDOM = document.querySelector(".lists");
        this.currentItems = document.querySelector(".items");
        this.newListBtn = document.querySelector(".btn-new-list");
        this.addItemBtn = document.querySelector(".btn-add-item");
        this.clearListBtn = document.querySelector(".btn-clear-list");
        this.sortBtn = document.querySelector(".btn-sort");
        this.sortBtnMobile = document.querySelector(".btn-sort-mobile");
        this.priorityBtn = document.querySelector(".three-way-btn");
        this.overlay = document.querySelector(".overlay");
        this.overlayItemBtn = document.querySelector(".btn-create-item");
        this.overlayListBtn = document.querySelector(".btn-create-list");
        this.overlayCloseBtns = this.overlay.querySelectorAll(
            ".btn-overlay-close"
        );
        this.setCurrentItems();
        this.setLists();
        this.events();
    }

    events() {
        this.currentItems.addEventListener("dragover", this.onDragOver);
        this.currentItems.addEventListener("drop", this.onDrop.bind(this));

        // this.currentItems.addEventListener("click", this.onClick.bind(this));
        this.addItemBtn.addEventListener(
            "click",
            this.handleOverlay.bind(this)
        );
        this.newListBtn.addEventListener(
            "click",
            this.handleOverlay.bind(this)
        );
        document
            .querySelector(".create-list-in-menu")
            .addEventListener("click", this.handleOverlay.bind(this));
        this.clearListBtn.addEventListener(
            "click",
            this.clearCompletedList.bind(this)
        );
        this.sortBtn.addEventListener("click", this.sortByPriority.bind(this));
        this.sortBtnMobile.addEventListener(
            "click",
            this.sortByPriority.bind(this)
        );
        this.overlay.addEventListener(
            "click",
            this.closeAndClearOverlay.bind(this)
        );
        this.overlayCloseBtns.forEach((btn) => {
            btn.addEventListener("click", this.closeAndClearOverlay.bind(this));
        });

        this.overlayItemBtn.addEventListener(
            "click",
            this.handleCreateOrEdit.bind(this)
        );
        this.overlayListBtn.addEventListener(
            "click",
            this.handleCreateOrEdit.bind(this)
        );
        this.priorityBtn.addEventListener(
            "click",
            this.setPriorityFromClick.bind(this)
        );
    }

    initializeLists() {
        let firstList = new List("My First List");
        let completedList = new List("Completed Items");
        firstList.addItem(
            "Complete an Item",
            "low",
            "Complete an item by clicking on the circle to the left."
        );
        firstList.addItem(
            "Understand Priority",
            "medium",
            "The color of the cirle to the left is representative of the item's priority. Low, medium, and high priority corresponds to green, yellow, and red respectively."
        );
        firstList.addItem(
            "Add an Item",
            "high",
            "Press the 'Add Item' buttom below to add a new item to this list."
        );
        firstList.addItem(
            "Reorganize Items",
            "medium",
            "Press the 'Sort by priority' in the top right to organize from low to high priority, or simply just drag and drop items where you want."
        );
        firstList.addItem(
            "Create a New List",
            "low",
            "Press the 'New List' buttom on the far left to create a new list. You can then view your lists by clicking on the list titles to the left."
        );
        firstList.addItem(
            "Have Fun",
            "low",
            "Create as many lists and items as you would like and have fun!"
        );

        completedList.addItem(
            "View Your Completed Items",
            "low",
            "This is where all your completed items will go, so you can keep track of what you've already done."
        );
        completedList.addItem(
            "Clear Completed Items",
            "low",
            "You can clear this list whenever you want by clicking the 'Clear List' button below."
        );
        this.lists.unshift(firstList);
        this.lists.push(completedList);
    }

    setCurrentItems() {
        const list = this.lists[this.currentListIndex];
        const active =
            this.lists[this.lists.length - 1] == list ? "active" : "";

        this.currentItems.innerHTML = "";
        list.items.forEach((item, i) => {
            this.currentItems.insertAdjacentHTML(
                "beforeend",
                `<div class="item-container" data-item-index="${i}" draggable="true">
                    <div class="item">
                        <div class="options">
                            <div class="option__edit">
                                <i class="fas fa-edit btn-edit-item"></i>
                            </div>
                            <div class="option__delete">
                                <i class="far fa-trash-alt btn-delete-item"></i>
                            </div>
                        </div>
                        <div class="item__checkBox priority-${item.priority} ${active}"></div>
                        <div class="contents">
                            <div class="contents__title">${item.title}</div>
                            <div class="contents__description">${item.description}</div>
                        </div>
                    </div>
                </div>`
            );
        });
        document.querySelectorAll(".item-container").forEach((item) => {
            item.addEventListener("dragstart", this.onDragStart.bind(this));
            item.addEventListener("click", this.handleItemClick.bind(this));
        });

        localStorage.setItem("lists", JSON.stringify(this.lists));
        this.setTitle();
    }

    setLists() {
        this.listsDOM.innerHTML = "";
        this.lists.forEach((list, i) => {
            this.listsDOM.insertAdjacentHTML(
                "beforeend",
                `<li class="list" data-index="${i}">
                    <div class="list-label">${list.label}</div>
                    <div class="options">
                        <div class="list-edit">
                            <i class="fas fa-edit btn-edit-list"></i>
                        </div>
                        <div class="list-delete">
                            <i class="far fa-trash-alt btn-delete-list"></i>
                        </div>
                    </div>
                </li>`
            );
        });
        this.listsDOM.insertAdjacentHTML(
            "beforeend",
            '<li class="create-list-in-menu">Create New List</li>'
        );
        document.querySelectorAll(".list").forEach((list, i) => {
            list.addEventListener("click", this.handleListClick.bind(this));
            if (i == this.lists.length - 1) {
                list.classList.add("completed-items-list");
            }
        });

        localStorage.setItem("lists", JSON.stringify(this.lists));
    }

    setPriorityFromClick(e) {
        e.currentTarget.classList.remove("switch-low");
        e.currentTarget.classList.remove("switch-medium");
        e.currentTarget.classList.remove("switch-high");

        if (e.target.classList.contains("btn-low")) {
            e.currentTarget.classList.add("switch-low");
            this.currentPriority = "low";
        } else if (e.target.classList.contains("btn-medium")) {
            e.currentTarget.classList.add("switch-medium");
            this.currentPriority = "medium";
        } else if (e.target.classList.contains("btn-high")) {
            e.currentTarget.classList.add("switch-high");
            this.currentPriority = "high";
        }
    }

    setPriorityFromEdit(priority) {
        this.priorityBtn.classList.remove("switch-low");
        this.priorityBtn.classList.remove("switch-medium");
        this.priorityBtn.classList.remove("switch-high");

        if (priority == "low") {
            this.priorityBtn.classList.add("switch-low");
            this.currentPriority = "low";
        } else if (priority == "medium") {
            this.priorityBtn.classList.add("switch-medium");
            this.currentPriority = "medium";
        } else if (priority == "high") {
            this.priorityBtn.classList.add("switch-high");
            this.currentPriority = "high";
        }
    }

    sortByPriority() {
        this.lists[this.currentListIndex].sortByPriority();
        this.setCurrentItems();
    }

    handleItemClick(e) {
        const itemContainer = e.currentTarget;
        const itemIndex = e.currentTarget.dataset.itemIndex;
        if (e.target.classList.contains("btn-delete-item")) {
            this.deleteItem(itemContainer, itemIndex);
            setTimeout(() => {
                this.setCurrentItems();
            }, 500);
        } else if (e.target.classList.contains("btn-edit-item")) {
            this.startEditItem(itemIndex);
            this.setCurrentItems();
        } else if (e.target.classList.contains("item__checkBox")) {
            this.handleCheck(itemContainer, itemIndex);
        }
    }

    handleListClick(e) {
        if (e.target.classList.contains("btn-delete-list")) {
            const listIndex = e.currentTarget.dataset.index;
            this.deleteList(listIndex);
            if (this.currentListIndex == listIndex) {
                this.currentListIndex = this.lists.length - 1;
                this.setCurrentItems();
                this.setTitle();
                this.checkIfInCompletedItemsList();
            }
            this.setLists();
        } else if (e.target.classList.contains("btn-edit-list")) {
            this.startEditList(e);
            this.setLists();
        } else {
            this.changeList(e);
        }
    }

    changeList(e) {
        this.currentListIndex = e.currentTarget.dataset.index;
        this.setTitle();
        this.setCurrentItems();
        this.checkIfInCompletedItemsList();
    }

    checkIfInCompletedItemsList() {
        if (
            this.lists[this.currentListIndex] ==
            this.lists[this.lists.length - 1]
        ) {
            this.addBtn("clear");
        } else {
            this.addBtn("add");
        }
    }

    setTitle() {
        document.querySelector(".main-title").innerHTML = this.lists[
            this.currentListIndex
        ].label;
    }

    addBtn(type) {
        if (type == "clear") {
            this.addItemBtn.classList.add("hide");
            this.clearListBtn.classList.remove("hide");
        } else if (type == "add") {
            this.addItemBtn.classList.remove("hide");
            this.clearListBtn.classList.add("hide");
        }
    }

    clearCompletedList(e) {
        this.lists[this.lists.length - 1].clearItems();
        this.setCurrentItems();
    }

    handleCreateOrEdit(e) {
        if (e.currentTarget == this.overlayItemBtn) {
            if (e.currentTarget.innerHTML == "Create Item") {
                this.createItem();
            } else {
                this.saveEditItem();
            }
            this.setCurrentItems();
        } else if (e.currentTarget == this.overlayListBtn) {
            if (e.currentTarget.innerHTML == "Create List") {
                this.createList();
                this.currentListIndex = 0;
                this.setTitle();
                this.setCurrentItems();
                this.checkIfInCompletedItemsList();
            } else {
                this.saveEditList();
                this.setTitle();
            }
            this.setLists();
        }
        this.closeAndClearOverlay(e);
    }

    deleteItem(itemContainer, index) {
        this.lists[this.currentListIndex].removeItem(index);
        itemContainer.classList.add("hide");
    }

    deleteList(index) {
        this.lists.splice(index, 1);
    }

    startEditItem(index) {
        this.IndexEditItem = index;
        this.setOverlay(true, true);
        this.openOverlay(true, true);
    }

    startEditList(e) {
        this.IndexEditList = e.currentTarget.dataset.index;
        this.setOverlay(false, true);
        this.openOverlay(false, true);
    }

    handleCheck(itemContainer, index) {
        this.addCheckMark(itemContainer);
        setTimeout(() => {
            this.copyItemToCompletedList(index);

            this.deleteItem(itemContainer, index);
            setTimeout(() => {
                this.setCurrentItems("active");
            }, 500);
        }, 2000);
    }

    addCheckMark(itemContainer) {
        itemContainer.querySelector(".item__checkBox").classList.add(`active`);
    }

    copyItemToCompletedList(index) {
        const title = this.lists[this.currentListIndex].items[index].title;
        const desc = this.lists[this.currentListIndex].items[index].description;
        const priority = this.lists[this.currentListIndex].items[index]
            .priority;
        this.lists[this.lists.length - 1].addItem(title, priority, desc, false);
    }

    setOverlay(isItem = false, isEdit = false) {
        if (isItem) {
            if (isEdit) {
                this.overlay.querySelector(".overlay-item-title").innerHTML =
                    "Edit Item";
                this.overlay.querySelector(
                    ".input-item-title"
                ).value = this.lists[this.currentListIndex].items[
                    this.IndexEditItem
                ].title;

                this.overlay.querySelector(
                    ".input-item-desc"
                ).value = this.lists[this.currentListIndex].items[
                    this.IndexEditItem
                ].description;

                this.setPriorityFromEdit(
                    this.lists[this.currentListIndex].items[this.IndexEditItem]
                        .priority
                );
                this.overlay.querySelector(".btn-create-item").innerHTML =
                    "Save";
            } else {
                this.overlay.querySelector(".overlay-item-title").innerHTML =
                    "New Item";
                this.overlay.querySelector(".btn-create-item").innerHTML =
                    "Create Item";
            }
        } else {
            if (isEdit) {
                this.overlay.querySelector(".overlay-list-title").innerHTML =
                    "Edit List";
                this.overlay.querySelector(
                    ".input-list-label"
                ).value = this.lists[this.IndexEditList].label;

                this.overlay.querySelector(".btn-create-list").innerHTML =
                    "Save";
            } else {
                this.overlay.querySelector(".overlay-list-title").innerHTML =
                    "New List";
                this.overlay.querySelector(".btn-create-list").innerHTML =
                    "Create List";
            }
        }
    }

    handleOverlay(e) {
        if (e.currentTarget == this.addItemBtn) {
            this.setOverlay(true);
            this.openOverlay(true);
        } else if (
            e.currentTarget == this.newListBtn ||
            e.currentTarget == document.querySelector(".create-list-in-menu")
        ) {
            this.setOverlay();
            this.openOverlay();
        }
    }

    openOverlay(isItem = false) {
        if (isItem) {
            document
                .querySelector(".overlay-inner-item")
                .classList.add("reveal");
            document
                .querySelector(".overlay-inner-list")
                .classList.remove("reveal");
        } else {
            document
                .querySelector(".overlay-inner-item")
                .classList.remove("reveal");
            document
                .querySelector(".overlay-inner-list")
                .classList.add("reveal");
        }
        this.overlay.classList.add("reveal");
        document.body.classList.add("no-scroll");
    }

    closeAndClearOverlay(e) {
        if (e.target == e.currentTarget) {
            this.overlay.classList.remove("reveal");
            document.body.classList.remove("no-scroll");
            this.overlay.querySelector(".input-list-label").value = "";
            this.overlay.querySelector(".input-item-title").value = "";
            this.overlay.querySelector(".input-item-desc").value = "";
        }
    }

    createList(e) {
        const label = this.overlay.querySelector(".input-list-label").value;
        this.lists.unshift(new List(label));
    }

    saveEditList() {
        const label = this.overlay.querySelector(".input-list-label").value;
        this.lists[this.IndexEditList].label = label;
    }

    createItem(e) {
        const title = this.overlay.querySelector(".input-item-title").value;
        const priority = this.currentPriority;
        const desc = this.overlay.querySelector(".input-item-desc").value;
        this.lists[this.currentListIndex].addItem(title, priority, desc);
    }

    saveEditItem() {
        const title = this.overlay.querySelector(".input-item-title").value;
        const priority = this.currentPriority;
        const desc = this.overlay.querySelector(".input-item-desc").value;
        this.lists[this.currentListIndex].items[
            this.IndexEditItem
        ].updateFields(title, priority, desc);
    }

    onDragStart(e) {
        e.dataTransfer.setData("text/plain", e.target.dataset.itemIndex);
    }

    onDragOver(e) {
        e.preventDefault();
    }

    onDrop(e) {
        e.preventDefault();

        for (let i = 0; i < e.path.length; i++) {
            if (e.path[i].classList.contains("item")) {
                const index = e.dataTransfer.getData("text");
                const draggableElement = document.querySelector(
                    `[data-item-index="${index}"]`
                );
                const dropzone = e.path[i].parentNode;
                const dragIndex = draggableElement.dataset.itemIndex;
                const dropIndex = dropzone.dataset.itemIndex;

                if (dragIndex < dropIndex) {
                    dropzone.after(draggableElement);
                } else {
                    dropzone.before(draggableElement);
                }
                e.dataTransfer.clearData();
                this.lists[this.currentListIndex].moveItem(
                    dragIndex,
                    dropIndex
                );

                this.setCurrentItems();
                return;
            }
        }
    }
}

export default ToDoBoard;
