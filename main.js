import Aardvark from "./models/Aardvark.js"
import Bandicoot from "./models/Bandicoot.js"
import Camel from "./models/Camel.js"

let adam = new Aardvark('adam', 'blue', 25, false, 95, 15)
adam.eat("corndog")
adam.speak("HEEEELP")

let fred = new Bandicoot('fred', 'yellow', 24, false, 5, 1)
fred.eat('poptart')
fred.speak('yolo')

let cathy = new Camel('cathy', 'blue', 45, false, 400, 3)
cathy.eat('pizza')
cathy.speak('bark bark')
