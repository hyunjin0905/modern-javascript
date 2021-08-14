function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`hi, my name is ${this.name} `)
}

const me = Person("lucy");
// hasOwnProperty 는 Object.prototype 의 메서드ㅏ다

console.log(me.hasOwnProperty("name"))
console.log(Object.getPrototypeOf(me) === Person.prototype)
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype)