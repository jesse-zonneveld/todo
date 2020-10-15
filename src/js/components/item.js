// import moment from "moment";

class Item {
    constructor(title, priority, description = "") {
        this.title = title;
        this.priority = priority;
        this.description = description;
    }

    getPriority() {
        let _priority;
        switch (this.priority) {
            case "low":
                _priority = 1;
                break;
            case "medium":
                _priority = 2;
                break;
            case "high":
                _priority = 3;
                break;

            default:
                _priority = 1;
                break;
        }
        return _priority;
    }

    updateFields(title, priority, description) {
        this.title = title;
        this.priority = priority;
        this.description = description;
    }
}

export default Item;
