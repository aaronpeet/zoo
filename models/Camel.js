export default class Camel{
    constructor(
        name = 'carl',
        color = 'yellow',
        age = 59,
        feathers = false,
        weight = 200,
        tailLengthInch = 15,
    ) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.feathers = feathers;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
    }
    eat(food) {
        console.log(`I want a yummy ${food}.`)
    }
    speak(noise) {
        console.log(`The camel named ${this.name} says ${noise}.`)
    }
}
