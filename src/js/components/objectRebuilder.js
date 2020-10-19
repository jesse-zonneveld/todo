import List from "./list";
import Item from "./item";

class ObjectRebuilder {
    // Allows ability to instantiate objects from class name strings
    static classList() {
        return {
            List: List,
            Item: Item,
        };
    }

    // Checks if passed variable is object.
    // Returns true for arrays as well, as intended
    static isObject(varOrObj) {
        return varOrObj !== null && typeof varOrObj === "object";
    }

    static restoreObject(obj) {
        let newObj = obj;

        // At this point we have a regular javascript object
        // which we got from JSON.parse. First, check if it
        // has "__className" property which we defined in the
        // constructor of each class
        if (obj.hasOwnProperty("__className")) {
            let list = ObjectRebuilder.classList();

            // Instantiate object of the correct class
            newObj = new list[obj["__className"]]();

            // Copy all of current object's properties
            // to the newly instantiated object
            newObj = Object.assign(newObj, obj);

            // Run the makeshift constructor, if the
            // new object has one
            // if (newObj.__initialize === "function") {
            //     newObj.__initialize();
            // }
        }

        // Iterate over all of the properties of the new
        // object, and if some of them are objects (or arrays!)
        // constructed by JSON.parse, run them through ObjectRebuilder
        for (let prop of Object.keys(newObj)) {
            if (ObjectRebuilder.isObject(newObj[prop])) {
                newObj[prop] = ObjectRebuilder.restoreObject(newObj[prop]);
            }
        }

        return newObj;
    }
}

export default ObjectRebuilder;
