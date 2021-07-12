export default class Goat{
    constructor(
        name = 'gary',
        color = 'white',
        age = 14,
        feathers = false,
        weight = 80,
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
        console.log(`I'm hungry, give me some ${food}s.`)
    }
    speak(noise) {
        console.log(`I'm ${this.weight} pounds over weight, ${noise}.`)
    }
}