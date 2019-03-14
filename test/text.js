function Animal() {
    this.a = 1
}
Animal.prototype.move = function () { }

function Dog() {
    Animal.apply(this, arguments)
    this.d = 2
}

let f = function () { }
f.prototype = Animal.prototye
Dog.prototype = new f()

Dog.prototype.constructor = Dog

Dog.say = function () { }

class Dog extends Animal {
    constructor() {
        super()
    }
}