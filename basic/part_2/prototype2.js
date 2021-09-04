function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`hi, my name is ${this.name} `)
}

const me = new Person("lucy");


console.log(me.hasOwnProperty("name"))
// hasOwnProperty 는 Object.prototype 의 메서드다
console.log(Object.getPrototypeOf(me) === Person.prototype) // true
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype) // true

console.log(Object.getPrototypeOf(Person.prototype));
console.log(Object.prototype);
// 자바스크립트는 객체의 프로퍼티에 접근하려고 할때 해당 객체에 접근하려는 프로퍼티가 없으면
// [[prototype]] 내부 슬롯의 참조를 따라 자신의 부모 역할을 하는 프로토타입의 프로퍼티를 순차적으로 검색한다. 이를 프로토 체인
// 프로토타입 체은 자바스크립트가 객체지향 프로그램이의 상속을 구현하는 매커니즘이다

me.hasOwnProperty("name");
Object.prototype.hasOwnProperty.call(me, 'name');
// call 메서드

//**Object.prototype을 프로토타입 체인의 종점(end of prototype chain) 이라 한다 
// 스코프체인과 프로토타입 체인은 서로 연관없이 별도로 동작하는 것이 아니라 서로 협력하여 식별자와 프로퍼티를 검색하는 사용한다

// * 오버라이딩

const Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.getName = function () {
        console.log(`hi! ${this.name}`)
    };
    return Animal;
}());


const animal = new Animal("rabbit");
animal.getName = function () {
    console.log(`hey! ${this.name}`)
}
// 인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다
animal.getName();

// 상속 관계에 의해 프로퍼티가 가려지는 현상을 프로퍼티 섀도잉
// * 오버라이딩
// * 오버로딩

delete animal.getName;
animal.getName;