export default class Bandicoot{
    constructor(
        name = 'bobby',
        color = 'brown',
        age = 5,
        feathers = false,
        weight = 1,
        tailLengthInch = 4,
    ) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.feathers = feathers;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
    }
    eat(food) {
        console.log(`I love the smell of ${food}s in the morning`)
    }
    speak(noise) {
        console.log(`${this.name} screams ${noise}!`)
    }
}