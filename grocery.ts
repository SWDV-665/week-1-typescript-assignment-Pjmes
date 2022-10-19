class Grocery {
    name: string;
    quantity: number;

    constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity = quantity;
    }
}

interface Item {
    name: string;
    quantity: number;
}

function groceryList(item: Item) {
    return item.quantity + " " + item.name;
}

let item1 = new Grocery("Milk", 1);
let item2 = new Grocery("Bread", 5);
let item3 = new Grocery("Eggs", 12);

document.body.textContent = "You need: " + groceryList(item1) + ", " + groceryList(item2) + ", " + groceryList(item3);
