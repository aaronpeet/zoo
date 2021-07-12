export default class Flamingo{
    constructor(
        name = 'frost',
        color = 'pink',
        age = 3,
        feathers = true,
        weight = 15,
        tailLengthInch = 6,
    ) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.feathers = feathers;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
    }
    eat(food) {
        console.log(`I love me some ${food}.`)
    }
    speak(noise) {
        console.log(`${noise} says ${this.name} I am ${this.color}, duh.`)
    }
}