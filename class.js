//const car = {brand:'Toyota', color:'Blue', speed:'200', model:'Camry'}


class  Car {
    #radio
    constructor(brand,color,speed,model,radio) {
        this.brand= brand
        this.color= color
        this.speed= speed
        this.model= model
        this.#radio=radio
    }
    carDetails(){
        let details
        //console.log(this.#radio)
        if (this.#radio) {
            details = `This is a ${this.color} ${this.brand} ${this.model} with a  speed of ${this.speed}km/h and a radio `
        }else{
            details =`This is a  ${this.color} ${this.brand} ${this.model} with a speed of ${this.speed}km/h`
        }
        return details
    }
    drive() {
        return `The ${this.color} ${this.brand} ${this.model} is driving`
    }
    stop(){
        return `The ${this.color} ${this.brand} ${this.model} has stopped`
    }
}

class SportCar extends Car {
    constructor(brand,color,speed,model,radio,spoiler) { //inherited traits
        super(brand,color,speed,model,radio) //personal traits
        this.spoiler=spoiler //inheritance of class
    }
    useNitro(){
        return `The ${this.color} ${this.brand} ${this.model} is using nitro`
    }
}
//const car = new Car('Toyota','Blue',200,'Camry',true)
//console.log(car. carDetails())
//console.log(car.drive())
//console.log(car.stop())

const ToyotaSportCar = new SportCar('Toyota','Blue',200,'Camry',true,false)
console.log(ToyotaSportCar.carDetails())
console.log(ToyotaSportCar.useNitro())





//const car2 = new Car('Ford','Gray',250,'Mustang',false)
//console.log(car2. carDetails())
//console.log(car2.drive())
//console.log(car.stop())

