export default class Donkey{
    constructor(
        name = 'darren',
        color = 'grey',
        age = 10,
        feathers = false,
        weight = 85,
        tailLengthInch = 12,
    ) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.feathers = feathers;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
    }
    eat(food) {
        console.log(`Hey mom, you're burning the ${food}!`)
    }
    speak(noise) {
        console.log(`My name is ${this.name} and I am ${this.age} years old and I will ${noise} if I want to!`)
    }
}