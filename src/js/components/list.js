import Item from "./item";

class List {
    constructor(label, items = []) {
        this.label = label;
        this.items = items;
    }

    addItem(title, priority, description = "") {
        const item = new Item(title, priority, description);
        this.items.push(item);
    }

    removeItem(index) {
        this.items.splice(index, 1);
    }

    length() {
        return this.items.length;
    }

    moveItem(from, to) {
        this.items.splice(to, 0, this.items.splice(from, 1)[0]);
    }

    topItem() {
        return this.items[0];
    }

    sortByPriority() {
        this.items.sort((a, b) => b.getPriority() - a.getPriority());
    }
}

export default List;
