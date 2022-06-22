class Vehicle {
    constructor(numWheels, color, cc) {
        this.numWheels = numWheels;
        this.color = color;
        this.cc = cc;
    }
    toString() {
        return `color: ${this.color} cc:${this.cc} numWheels:${this.numWheels}`;
    }
}
const carP = new Vehicle(4, "red", 1200);
console.log(carP.toString());

class Bike extends Vehicle {
    constructor(color, cc) {
        super(2, color, cc)
    }
    toString() {
        return `bike:${super.toString()}`
    }
}
const bike = new Bike("blue", 2500)
console.log(bike.toString());

class Bus extends Vehicle {
    constructor(numWheels, color, cc, numSeats, brand) {
        super(numWheels, color, cc)
        this.numSeats = numSeats;
        this.brand = brand;
    }
    get brandName() {
        return this.getBrandName();
    }
    getBrandName() {
        return this.brand.substr(0, this.brand.length - 1) + this.brand.charAt(this.brand.length - 1).toUpperCase();
        
    }

}
const volvoBus = new Bus(8, "yellow", 3000, 77, "volvo");
console.log(volvoBus.brandName);
