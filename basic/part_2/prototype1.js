// *** 프로토타입
// * 상속으로통해 불필요한 중복을 제거, 자바스크립트는 프로토타입을 기반으로 상속으로 구현한다.
// 생성자 함수
function Circle2(radius) {
    this.radius = radius
}

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
// 공유해서 사용할 수 있도록 프로토타입에 추가한다
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩 되어 있다
Circle2.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
}

const circle_1 = new Circle2(1);
const circle_2 = new Circle2(2);

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// 프로토 타입 Circle.prototype으로 부터 getArea 메서드를 상속받는다
// 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유한다
console.log(circle_1.getArea === circle_2.getArea)
console.log(circle_1.getArea());
console.log(circle_2.getArea());



// 자신의 상태를 나타내는 radius 프로퍼티만 개별적으로 소유하고 내용이 동일한 메서드는 상속을 통해 공유하여 사용하는 것이다
// 재사용의 관점 매우 유용
//** 프로토타입 객체란 객체 지향 프로그래밍의 근간을 이루는 객체 간 상속을 구현하기 위해 사용된다

// 모든 객체는 [[Prototype]] 내부 슬롯을 가짐
// 이 내부 슬롯의 값은 프로토타입의 참조(null 인 경우도 있다)다
// 생성 방식에 의해 결정되고 [[Prototyep]] 에 저장된다
// __proto__ 접근자 프로퍼티로 접근
// 프로토타입은 자산의 constructor 프로퍼티 통해서 생성자 함수 접근
// 생성자 함수는 자신의 prototype 프로퍼티를 통해 프로토타입에 접근 할수 있다


// * __proto__ 접근자 프로퍼티
// * 모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 [[prototype]] 내부 슬롯에 간접적으로 접근 할수 있음

const product = {
    name: "card"
}
console.log(product);
// 내부 슬롯, 내부 메서드
// Object.prototype 의 접근자 프로터피인 __proto__ 는 getter/setter 함수 라고 부르는 접근자 함수
// ([[GET]], [[SET]] 프로퍼티 어트리뷰트에 할당된 함수를 통해
// 내부슬롯의, 값 프토토타입을 취득하거나 할당함

const obj = {};
const parent = { x: 1 };

// getter 함수인 get __proto__ 가 호출되어 obj 객체의 프로토타입을 취득
console.log("__proto__   getter 호출")
obj.__proto__;
// setter 함수인 set__proto__ 가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;
console.log(obj.x);


// * __proto__ 접근자 프로퍼티는 상속을 통해 사용된다
// * __proto__ 접근자 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아니라 Object.prototype의 프로퍼티다
const person = { name: "lucy" }

// person객체는 __proto__프로퍼티를 소유하지않음
console.log(person.hasOwnProperty('__proto__'))

// __proto__프로퍼티는 모든객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티다
console.log(Object.getOwnPropertyDescriptors(Object.prototype, '__proto__'))

// 모든 객체는 Object.prototype 의 접근자 프로퍼티 __protot__ 를 상속 받아 사용할수있따
console.log({}.__proto__ === Object.prototype);


// * __proto__ 로 접근하는 이유

//const parent = {};
const child = {};
// child의 프로토타입을 parent 설정

// child.__proto__ = parent;
// parent.__proto__ = child; TypeError
// 서로가 프로토타입이 되는비정상적인 프로토타입 체인이 만들어짐
// 프로토타입 체인은 단방향 링크드 리스트로 구현 되어야함
// 순환참조하는 프로토타입 체인이 만들어지면 프트로타입 체인이 종점이 없기 존재하지 않기 떄ㅜ문에
// 프로트타입 체인에서 프로퍼티를 검색할때 무한루프에 빠미

// * __proto__ 덪ㅂ근자 프로터피를 코드 내에서 직접 사용하는 것은 권장하지 않는다
// * es6 권장
// * 사용할수 없는 경우 Object.prototyep 을 상속받지 않는 객체를 생성할 수도 있기 때문에
// * const obj 는 프로토타입 체인의 종점이다  따라서 Object.__proto__ 를 상속받을 수 없다
const obj2 = Object.create(null)
console.log(obj2.__proto__)
console.log(Object.getPrototypeOf(obj2))

const obj3 = {};
const parent2 = { x: 1 };
// 프로토타입 취득
Object.getPrototypeOf(obj3);
// 프로토타입 교체
Object.setPrototypeOf(obj3, parent2)
console.log(obj3.x)



// * 함수 객체의 prototype 프로퍼티
// * 함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다
// 함수 객체의 prototype 프로퍼티를 소유한다
console.log((function () {}).hasOwnProperty('prototype'))
// 일반 객체 prototype 프로퍼티 소유하지않음
console.log(({}).hasOwnProperty('__proto__'));


// 화살표 함수는 non-constuctor
const Animal = name => {
    this.name = name;
}

console.log(Animal.hasOwnProperty('prototye'))
console.log(Animal.prototype);

// es6 메서드 축약 표현으로 정의한 메서드는 non-constuctor
const obj4 = {
    foo(){}
}

console.log(obj4.foo.hasOwnProperty('prototye'))
console.log(obj4.foo.prototype);
//** 모든 객체가 가지고 있는 (엄밀히 말하면 Object.prototype으로부터 상속받은)
// __proto__ 접근자 프로티와 함수  객체만이 가지고있는 prototype 프로퍼티는 결국 동일한 프로토타입을 가리킨다

// __proto__ 접근자 프로퍼티
// 소유 : 모든 객체
// 값 : 프로토타입의 참조
// 사용주체 : 모든 객체
// 사용목적 : 객체가 자신의 프로토타입에 접근 또는 교체하기 위해 사용

// prototype 프로퍼티
// 소유 : constuctor
// 값 : 프로토타입의 참조
// 사용주체 : 생성자 함수
// 사용목적 : 생성자 함수가 자신이 생성할객체(인스턴스)의 프르토타입을 할당 하기 위해 사용
function Person(name) {
    this.name = name;
}

const me = new Person("cho");
console.log(Person.prototype === me.__proto__);

console.log(me.constructor === Person)
// me 객체의 생성자 함수는 Person3 이다
// me 객체는 프로토타입의 consturcor 프로퍼티를 통해 생성자 함수와 연결된다
// me 객체에는 construcrtor 프로퍼티가 없지만
// me 객체의 프로토타입인 Person.prototype 에는 constructor 프로퍼티가 있다
// me 객체는 프로토타입인 Person.protytype 의 constructor 프로퍼티를 상속받아 사용할 수 있다




// * 리터럴 표기법에 의해 생성된 객체의 생성자 함수 와 프로토타입
// newObj 객체를 생성한 생성자 함수는 Object 이다
const newObj = new Object();
console.log(newObj.constructor === Object);

// add 함수 객체를 생성한 생성자 함수는 Function 이다
const add = new Function('a', 'b', 'return a + b');
console.log(add.constructor === Function);



// 함수 리터럴
const add2 = function (a, b) {
    return a + b;
}

// 배열 리터럴
const arr = [1, 2, 3];

// 정규 표현식 리터럴
const regexp = /is/ig;

// Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성했따
// 객체 리터럴
const obj_2 = {};
console.log(obj_2.constructor === Object);
// 생성자함수 로 생성한 객체가아니라 객체 리터럴에 의해 생성된객체다  obj 객체는 Object 생성자 함수와 construcort 프로퍼티로 연결 되어있다
// 객체리터럴에 의해 생성된 객체는 사실 Object 생성자 함수로 생성되는 것은 아닐까?

// ECMAScript 사양
// 1. If NewTarget is nethier undefined nor the active function, then a.Return? OrdinaryCreateFromConstrucotr(NewTarget, "%Object.prototype%")
// 2. If value is undefined or null, return OrdinaryObjectCreate(%Obnject.prototype%)
// 3. Return ! ToObject(value.)

// 2. Object 생성자함수에 의해 의한 객체 생성
// 인수가 전달되지 않았을때 추상 연상 ordianryObjectCreate를 호출 하여 빈 객체를 생성한다
let oobj = new Object();
console.log(oobj); // {}

//1. new.target이 undefined 나 Object 가 아닌 경우
// 인스턴스 -> Foo.prototype => Object.prototype 수능로 프로토타입 체인이 생성된다
class Foo extends Object{}
new Foo();

//3. 인수가 전달된 경우에는 인수를 객체로 변환한다
oobj = new Object(1234);
console.log(oobj)
oobj = new Object("1234");
console.log(oobj)

// 따라서 객체 리러터럴에 의해 생성된 객체는 Object 생성자 함수가 생성한 객체가 아니다

// 함수의 객체의 경우는 함수 선언문과 함수 표현식을 평가하여 함수 객체를 생성한 것은 Fucntion 생성자 함수가 아니다
// 하지만 consturtro 프로퍼티를 통해 확인해보면 foo 함수의 생성자 함수는 Function 생성자 함수이다

// 함수 선언문
function foo_1 () {

}
console.log(foo_1)
console.log(foo_1.constructor === Function)

// ** 프로토타입과 생성자 함수는 단독으로 존재 할 수 없고 언제나 쌍으로 존재한다

//프토토타입의 생성시점
// 생성자함수가 생성되는 시점에 더불어 생성된다

// 생성자 로서 호출할수 있는 함수 , 즉 consuctor 함수저의가 평가되어 함수 객체를 생성하는시점 에 프로토타입도 더불어 생성된다
console.log(Intro.prototype)

// constructor
function Intro(message) {
    this.message = message

}


// non-constructor
const Intro2 = message => {
    this.message = message;
}
// non-constructo 프로토타입 생성되지 않는다
console.log(Intro2)






