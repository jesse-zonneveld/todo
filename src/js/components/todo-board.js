import List from "./list";

class ToDoBoard {
    constructor(lists = []) {
        this.lists = lists;
        if (lists.length === 0) {
            this.initializeLists();
        }
        this.currentListIndex = 0;
        this.currentPriority = "low";
        this.listsContainer = document.querySelector(".lists");
        this.currentItems = document.querySelector(".items");
        this.newListBtn = document.querySelector(".btn-new-list");
        this.addItemBtn = document.querySelector(".btn-add-item");
        this.sortBtn = document.querySelector(".btn-sort");
        this.priorityBtn = document.querySelector(".three-way-btn");
        this.overlay = document.querySelector(".overlay");
        this.overlayItemBtn = document.querySelector(".btn-create-item");
        this.overlayListBtn = document.querySelector(".btn-create-list");
        this.overlayCloseBtns = this.overlay.querySelectorAll(
            ".btn-overlay-close"
        );
        this.setCurrentItems(this.lists[this.currentListIndex]);
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
        this.sortBtn.addEventListener("click", this.sortByPriority.bind(this));
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
            "med",
            "The color of the cirle to the left is representative of the item's priority. Low, medium, and high priority corresponds to green, yellow, and red respectively."
        );
        firstList.addItem(
            "Add an Item",
            "high",
            "Press the 'Add Item' buttom below to add a new item to this list."
        );
        firstList.addItem(
            "Reorganize Items",
            "med",
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

    setCurrentItems(list) {
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
                        <div class="item__checkBox priority-${item.priority}"></div>
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
    }

    setLists() {
        this.listsContainer.innerHTML = "";
        this.lists.forEach((list, i) => {
            this.listsContainer.insertAdjacentHTML(
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
        document.querySelectorAll(".list").forEach((list) => {
            list.addEventListener("click", this.handleListClick.bind(this));
        });
    }

    setPriorityFromClick(e) {
        e.currentTarget.classList.remove("switch-low");
        e.currentTarget.classList.remove("switch-medium");
        e.currentTarget.classList.remove("switch-high");

        if (e.target.classList.contains("btn-low")) {
            console.log("low");
            e.currentTarget.classList.add("switch-low");
            this.currentPriority = "low";
        } else if (e.target.classList.contains("btn-medium")) {
            console.log("medium");
            e.currentTarget.classList.add("switch-medium");
            this.currentPriority = "medium";
        } else if (e.target.classList.contains("btn-high")) {
            console.log("high");
            e.currentTarget.classList.add("switch-high");
            this.currentPriority = "high";
        }
    }

    setPriorityFromEdit(priority) {
        this.priorityBtn.classList.remove("switch-low");
        this.priorityBtn.classList.remove("switch-medium");
        this.priorityBtn.classList.remove("switch-high");

        if (priority == 1) {
            this.priorityBtn.classList.add("switch-low");
        } else if (priority == 2) {
            this.priorityBtn.classList.add("switch-medium");
        } else if (priority == 3) {
            this.priorityBtn.classList.add("switch-high");
        }
    }

    sortByPriority() {
        this.lists[this.currentListIndex].sortByPriority();
        this.setCurrentItems(this.lists[this.currentListIndex]);
    }

    changeList(e) {
        this.currentListIndex = e.currentTarget.dataset.index;
        this.setCurrentItems(this.lists[this.currentListIndex]);
    }

    handleItemClick(e) {
        if (e.target.classList.contains("btn-delete-item")) {
            this.deleteItem(e.currentTarget.dataset.itemIndex);
            this.setCurrentItems(this.lists[this.currentListIndex]);
        } else if (e.target.classList.contains("btn-edit-item")) {
            this.startEditItem(e);
            this.setCurrentItems(this.lists[this.currentListIndex]);
        } else if (e.target.classList.contains("item__checkBox")) {
            console.log("check");
            this.handleCheck(e.currentTarget.dataset.itemIndex);
        }
    }

    handleListClick(e) {
        if (e.target.classList.contains("btn-delete-list")) {
            this.deleteList(e.currentTarget.dataset.index);
            this.setLists();
        } else if (e.target.classList.contains("btn-edit-list")) {
            this.startEditList(e);
            this.setLists();
        } else {
            this.changeList(e);
        }
    }

    handleCreateOrEdit(e) {
        if (e.currentTarget == this.overlayItemBtn) {
            if (e.currentTarget.innerHTML == "Create Item") {
                this.createItem();
            } else {
                this.saveEditItem();
            }
            this.setCurrentItems(this.lists[this.currentListIndex]);
        } else if (e.currentTarget == this.overlayListBtn) {
            if (e.currentTarget.innerHTML == "Create List") {
                this.createList();
            } else {
                this.saveEditList();
            }
            this.setLists();
        }
        this.closeAndClearOverlay(e);
    }

    deleteItem(index) {
        this.lists[this.currentListIndex].removeItem(index);
    }

    deleteList(index) {
        this.lists.splice(index, 1);
    }

    startEditItem(e) {
        this.IndexEditItem = e.currentTarget.dataset.itemIndex;
        this.setOverlay(true, true);
        this.openOverlay(true, true);
    }

    startEditList(e) {
        this.IndexEditList = e.currentTarget.dataset.index;
        this.setOverlay(false, true);
        this.openOverlay(false, true);
    }

    handleCheck(index) {}

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
                    this.lists[this.currentListIndex].items[
                        this.IndexEditItem
                    ].getPriority()
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
        } else if (e.currentTarget == this.newListBtn) {
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
        console.log("Create List");
        const label = this.overlay.querySelector(".input-list-label").value;
        this.lists.push(new List(label));
    }

    saveEditList() {
        console.log("edit list");
        const label = this.overlay.querySelector(".input-list-label").value;
        this.lists[this.IndexEditList].label = label;
    }

    createItem(e) {
        console.log("create item");
        const title = this.overlay.querySelector(".input-item-title").value;
        const priority = this.currentPriority;
        const desc = this.overlay.querySelector(".input-item-desc").value;
        this.lists[this.currentListIndex].addItem(title, priority, desc);
    }

    saveEditItem() {
        console.log("edit item");
        const title = this.overlay.querySelector(".input-item-title").value;
        const priority = "low";
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

                this.setCurrentItems(this.lists[this.currentListIndex]);
                return;
            }
        }
    }
}

export default ToDoBoard;
