console.log("hi")


const person = new Object();
person.name = "jo";
person.sayHello = function () {
    console.log("hi"+ this.name);
}

console.log(person);

// 객체 리터럴은 단 하나의 객체 만 생성
const circle1 = {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;
    }
}
console.log(circle1.getDiameter());
const circle2 = {
    radius: 10,
    getDiameter() {
        return 2 * this.radius;
    }
}
console.log(circle2.getDiameter());

// -> 구조가 같은데 여러번 만들어야한다

// 생성자 함수 객체 생성 방식 장점
function Circle(radius) {
    console.log(this);
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle_1 = new Circle(5);
const circle_2 = new Circle(10);
console.log(circle_1.getDiameter());
console.log(circle_2.getDiameter());

// this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다
function foo() {
    console.log(this);
}
// * 일반적인 함수로서 호출 -> this는 전역 객체 를 가리킴
// 브라우저 환경 -> window
// node.js -> global
foo();


const obj = { foo };
// * 메서드로서 호출 -> this 는 메서드를 호출한 객체 (마침표 앞에 객체를 가르킴)
obj.foo(); // obj

// * 생성자 함수로서 호출 -> this 는 생성자 함수가 (미래에) 생성할 인스턴스를 가르킴
const inst = new foo(); // inst

// new 로 생성하지 않으면 일반 함수임

// 인스턴스 생성 과정
// * 자바스크립트 엔진은 암묵적인 처리르 통해 인스턴스를 생성하고 반환
// * 암묵적인 빈객체 생성 생성자함수가 생성한 인스턴스 임
// * 즉 인스턴스는 this 에 바인딩 된다
// * 이 처리는 함수 몸체의 코드가 한줄씩 실행되는 런타임 이전에 실행된다


// 바인딩
// * 식별자와 값을 연결하는 과정을 의미
var a; // 변수선언은 변수이름과 확보된 메모리공간의 주소를 바인딩 하는것
// this 바인딩은 this 가 가리킬 객테를 바인딩 한 것


// 생성자 함수 내부에서 return 문을 생략 해야 하는 이유
//..


// 함수는 객체다
// 일반객체는 호출 할수 없지만 함수는 호출 할 수 있다
function foo2() {}
// 일반 함수로서 호출: [[call]]이 호출된다
foo();
// 생성자 함수로서 호출: [[construct]]가 호출된다
new foo();


// contructor
// * function() {} ,
// * const a = function() {},
// * Class

// none-contructor
// * 메서드
// * 화살표 함수

// 주의! ECMAScript 사양에서 메서드로 인정하는 범위가 일반적인 의미의 메서드보다 좁다
function hi() {}
const bar = function () {}
const baz = {
    // 프로퍼티 x 의 값으로 할당 된것은 일반 함수로 정의된 함수, 메서드 아님
    x: function () {}
}

new hi();
new bar();
new baz.x();

const arrow = () => {};
new arrow();

const obj2 = {}

