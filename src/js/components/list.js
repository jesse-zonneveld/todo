import Item from "./item";

class List {
    constructor(label, items = []) {
        this.label = label;
        this.items = items;
    }

    addItem(title, dueDate, description) {
        const item = new Item(title, description, dueDate);
        this.items.push(item);
    }

    removeItem(index) {
        this.items.splice(index, 1);
    }

    length() {
        return this.items.length;
    }

    swap(i1, i2) {
        [this.items[i1], this.items[i2]] = [this.items[i2], this.items[i1]];
    }

    topItem() {
        return this.items[0];
    }

    sortByDate() {
        console.log(this.topItem());
        this.items.sort((a, b) => b.dueDate - a.dueDate);
        console.log(this.topItem());
    }
}

export default List;
