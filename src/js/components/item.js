// import moment from "moment";

class Item {
    constructor(title, dueDate, priority, description = "") {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;
    }

    // static validDate(date) {}
}

export default Item;
