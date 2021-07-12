export default class Eagle{
    constructor(
        name = 'erin',
        color = 'brown and white',
        age = 4,
        feathers = true,
        weight = 5,
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
        console.log(`Im hungry for ${food}s.`)
    }
    speak(noise) {
        console.log(`${this.name} the eagle says ${noise}.`)
    }
}