const Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    // 1. 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    // Animal.prototype에 객체 리터럴 할당
    Animal.prototype = {
        //2  constructor 프로퍼티와 생성자 함수 간의 연결을 설정
        constructor: Animal,
        getName() {
            console.log(`hi! ${this.name}`)
        }
    }
    return Animal;
}());

const aniaml = new Animal();
console.log(aniaml.constructor === Animal);
console.log(aniaml.constructor === Object);


// 2 파괴된 constructor 프로퍼티와 생성자함수 간의 연결 되살려보기


function Person(name) {
    this.name = name;
}
const me = new Person("lucy");

// 프토로타입으로 교체할 객체
const parent = {
    constructor: Person,
    sayHello() {
        console.log(`Hi My name is ${this.name}`)
    }
}
//
Person.prototype = parent;
// 1. me 객체의 프로토타입을 parent 객체로 교체한다
Object.setPrototypeOf(me, parent);
// 위 코드는 아래의 코드와 동일하게 동작
// me.__proto__ = paren
console.log(me)
me.sayHello();

console.log(Person.prototype === Object.getPrototypeOf(me));
// 프로토타입으로 교체한 객체에는 constructor 프로퍼티가 없으므로 constructor 프로퍼티와 생성자 함수간의 연결이 파괴된다!










