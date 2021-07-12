import Aardvark from "./models/Aardvark.js"
import Bandicoot from "./models/Bandicoot.js"
import Camel from "./models/Camel.js"
import Donkey from "./models/Donkey.js"
import Eagle from "./models/Eagle.js"

let adam = new Aardvark('adam', 'blue', 25, false, 95, 15)
 adam.eat("corndog")
 adam.speak("HEEEELP")

let fred = new Bandicoot('fred', 'yellow', 24, false, 5, 1)
fred.eat('poptart')
fred.speak('yolo')

let cathy = new Camel('cathy', 'blue', 45, false, 400, 3)
cathy.eat('pizza')
cathy.speak('bark bark')

let dick = new Donkey('dick', 'black', 78, false, 200, 12)
dick.eat('hay')
dick.speak('nay') 

let earl = new Eagle('earl', 'red', 10, true, 18, 4)
earl.eat('fish')
earl.speak('screeeeech')