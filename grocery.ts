class Grocery {
    name: string;
    quantity: number;

    constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity = quantity;
    }
}

let list_of_groceries = [
    new Grocery("Milk", 1), 
    new Grocery("Bread", 5),
    new Grocery("Eggs", 12)
]


document.body.textContent = JSON.stringify(list_of_groceries);
