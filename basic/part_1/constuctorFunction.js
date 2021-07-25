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



