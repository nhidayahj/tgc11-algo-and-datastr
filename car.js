class Car {
    constructor(model, horsePower) {
        this.model = model;
        this.horsePower=horsePower
    }

    getModel() {
        return this.model
    }

    getHorsePower () {
        return this.horsePower
    }

    setModel(newModel){
        this.model = newModel;
    }

    setHorsePower(newHorsePower) {
        this.horsePower = newHorsePower;
    }


}


let c = new Car('ford', 120)
console.log(c.getModel())
console.log(c.getHorsePower())