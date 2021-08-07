// *** 프로토타입

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
//** 프로토타입 객체란 객체 지향 프로글매이의 근간을 이루는 객체 간 상속을 구현하기 위해 사용된다

// 모든 객체는 [[Prototype]] 내부 슬롯을 가짐
// 이 내부 슬롯의 값은 프로토타입의 참조(null 인 경우도 있다)다
// 생성 방식에 의해 결정되고 [[Prototyep]] 에 저장된다
// __proto__ 접근자 프로퍼티로 접근
// 프로토타입은 자산의 construcotr 프로퍼티 통해서 생성자 함수 접근
// 생성자 함수는 자신의 prototype 프로퍼티를 통해 프로토타입에 접근 할수 있다


// __proto__ 접근자 프로퍼티
// - 모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입, 즉 [[prototype]] 내부 슬롯에 간접적으로 접근 할수 있음

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


