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

// * instanceOf 연산지
// 우변의 생성자 함수의 prototype 에 바인딩된 객체가 좌변의 객체의 프로토타입 체인 상에 존재하면 true로 평가되고, 그렇지 않은 경우에는 false 로 평가된다

function School(name) {
    this.name = name;
}

const school = new School("lucy School");

// School.prototype 이 school 객체의 프로토타입 체인 상에 존재하므로
console.log(school instanceof School);

// Object.prototype 이 me 객체의 프로토타입 체인 상에 존재하므로 true 로 평가된다
console.log(school instanceof Object);

// * 어떻게 동작?

function Cafe(name) {
    this.name = name;
    this.sayHello2 = function sayHello2() {
        console.log(`${this.name} 입니다`)
    }
}


const cafe = new Cafe("Twosome");


cafe.sayHello2();
// 프로토타입으로 교체할 객체
const cafeParent = {};
// 프로토타입의 교체

Object.setPrototypeOf(cafe, cafeParent);

console.log(cafe);
// Person 생성자 함수와 parent 객체는 연결되어있지 않다
console.log("Cafe", Cafe.prototype === cafeParent);
console.log("cafeParent", cafeParent.constructor === Cafe);
console.log(cafe instanceof Cafe); // false 연결파괴
console.log(cafe instanceof Object); // true


// Cafe.prototype 이 cafe 객체의 프로토타입 체인 상에 존재하지 않기 때문이다 따라서 프로토타입으로 교체한
// cafe 객체를 Cafe 생성자 함수의 prototype 프로퍼티에 바인딩하면
// cafe instanceof Cafe -> true
Cafe.prototype = cafeParent;
console.log(cafe instanceof Cafe); // 프로토타입 체인 상에 존재
console.log(cafe instanceof Object);






