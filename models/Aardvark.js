export default class Aardvark{
    constructor(
        name = 'alph',
        color = 'candy-green',
        age = 25,
        feathers = false,
        weight = 95,
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
    console.log(`Nom nom all the ${food}s`)
    }
    speak(noise) {
        console.log(`the ${this.name} says ${noise}!`)
    }

}