import ToDoBoard from "./todo-board";

class Controller {
    constructor() {
        this.todoBoard = new ToDoBoard();
        this.events();
    }

    events() {
        document.querySelectorAll(".item-container").forEach((item) => {
            item.addEventListener("dragstart", this.onDragStart.bind(this));
        });

        document
            .querySelector(".items-section")
            .addEventListener("dragover", this.onDragOver);
        document
            .querySelector(".items-section")
            .addEventListener("drop", this.onDrop);
        document
            .querySelector(".items-section")
            .addEventListener("mouseover", this.onMouseOver.bind(this));
        document
            .querySelector(".items-section")
            .addEventListener("mouseout", this.onMouseOut.bind(this));
        document
            .querySelector(".items-section")
            .addEventListener("click", this.onClick.bind(this));
    }

    onDragStart(e) {
        e.dataTransfer.setData("text/plain", e.target.dataset.index);
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
                    `[data-index="${index}"]`
                );

                const dropzone = e.path[i].parentNode;
                dropzone.before(draggableElement);
                e.dataTransfer.clearData();

                return;
            } else if (e.path[i].classList.contains("item-container")) {
                const index = e.dataTransfer.getData("text");
                const draggableElement = document.querySelector(
                    `[data-index="${index}"]`
                );

                const dropzone = e.path[i];
                dropzone.after(draggableElement);
                e.dataTransfer.clearData();

                return;
            }
        }
    }

    onMouseOver(e) {
        for (let i = 0; i < e.path.length; i++) {
            if (e.path[i].classList.contains("item")) {
                e.path[i].querySelector(".options").classList.add("active");

                return;
            } else if (e.path[i].classList.contains("item-container")) {
                return;
            }
        }
    }

    onMouseOut(e) {
        for (let i = 0; i < e.path.length; i++) {
            if (e.path[i].classList.contains("item")) {
                e.path[i].querySelector(".options").classList.remove("active");

                return;
            } else if (e.path[i].classList.contains("item-container")) {
                return;
            }
        }
    }

    onClick(e) {
        for (let i = 0; i < e.path.length; i++) {
            if (e.path[i].classList.contains("item__checkBox")) {
                console.log(e.path[i]);
                e.path[i].classList.add("active");

                return;
            } else if (e.path[i].classList.contains("option__edit")) {
                console.log(e.path[i]);
                return;
            } else if (e.path[i].classList.contains("option__delete")) {
                console.log(e.path[i]);
                return;
            } else if (e.path[i].classList.contains("item-container")) {
                return;
            }
        }
    }
}

export default Controller;
