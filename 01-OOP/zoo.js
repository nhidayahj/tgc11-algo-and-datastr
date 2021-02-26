class Animal {
    constructor(name, animalType, hunger) {
        this.name = name;
        this.animal = animalType;
        this.hunger = hunger
    }

    calculateFoodCost(costPerKG) {
        return this.hunger * costPerKG;
    }
}


let zoo = new Array()

let a1 = new Animal("Fluffy", "Golder Retriever", 25)
let a2 = new Animal("Cookie", "Tiger", 30)

zoo.push(a1,a2)
console.log(zoo)


function calculateTotalCost() {
    let total = 0;
    for (let animal of zoo) {
        total += animal.calculateFoodCost(5)
    }
    return total;
}

console.log(calculateTotalCost());


// let lion = new Animal("Royal", "Lion", 40)
// console.log(lion)

// let lionCost = lion.calculateFoodCost(3)
// console.log(lionCost)
