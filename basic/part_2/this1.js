// * this 키워드
// 객체는 상태를 나타내는 프로퍼티와 동작을 나타내는 메서드를 하나의 논리적인 단위로 묶은 복합적인 자료구조이다
// 동작을 나타내는 메서드는 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야한다

// 리터럴 방식으로 참조가능
const circle1 = {
    // 프로퍼티: 객체 고유의 상태 데이터
    radius: 5,
    // 메서드 : 상태 데이터를 참조하고 조작하는 동작
    getDiameter() {
        console.log(this)
        // 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면
        // 자신이 속한 객체인 circle 을 참조할 수 있어야 한다
        return 2 * this.radius * Math.PI
    }
} /// 이 객체 리터럴은 circle 변수가 할당되기 직전에 평가된다
// getDiameter 메서드가 호출되는 시점에는 이미 객체 리터럴의 평가가 완료되어 객체가 생성되었고 circle 식별자에 생성된 객체가 할당된 이후다
// 메서드 내부가 참조 가능함



console.log(circle1.getDiameter());
// ** this 존재 이유
/*

function Circle(radius) {
// 이 시점에는 생성자 함수 자신이 생성한 인스턴스가리키는 식별자 알수없음
    ???.radius = radius;
}

Circle.prototype.getDiameter = function () {
// 이 시점에는 생성자 함수 자신이 생성한 인스턴스가리키는 식별자 알수없음
    return 2 * ???.radius;
}
// 생성자가 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야한다
const circle = new Circle(5)


생성자 함수로 인스턴스로 생성하려면 먼저 생성자 함수가 존재해야한다
정의하는 시점에는 인스턴스를 생성하기 이전이므로 생성자 함수가 생성한 인스턴스를 가리키는 식별자 알수없음
그래서 자신이 속한 객체 또는 자신이 생성할 인스턴스르 가리키는 특수한 식별자가 필요한다

this 는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조변수다 this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할수 있다
자바스크립트 엔진에 의해 암묵적으로 생성 어디서든 참조할수있다 this도 지역 변수처럼 사용 가능
this가 가리키는 값 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다
 */

// * this 바인딩
// 바인딩이랑 식별자와 값으 ㄹ연결자하는 과정  변수선언은 식별자와 확보된 메모리공간의 주소를 바인딩 한것이다  this 바인딩 은 this가 가리키 객체를 바인딩 하는 것


function Circle(radius) {
    console.log(this);
    this .radius = radius;
}

Circle.prototype.getDiameter = function () {
    console.log(this)
    return 2 * this.radius;
}
const circle = new Circle(5)
console.log(circle.getDiameter());

// 자바스크립트 this 는 함수가 호출되는 방식에 따라  this 바인딩이 동적으로 결저오딘다

console.log(this)
function square(number) {
    // 일반 함수 내부에서 this 전역객체 window 를 가리킨다
    console.log(this)
    return number * number;
}
square(2);


const person = {
    name: "lucy",
    getName() {
        // 메서드 내부에서 this 메서드를 호출한 객체를 가리킨다
        console.log(this);
        return this.name;
    }
};
console.log(person.getName());

function Person(name) {
    this.name = name;
    // 세생성자 함수가 내부에서 this 는 생성자 함수가 생성할 인스턴르르 가리키다

}
const me = new Person("lucy")

// 함수 호출 방식과 this 바인딩
// 1. 일반함수의 호출
// 2. 메서드 호출
// 3. 생성자 함수 호출
// 4. Function.prototype.apply/call/bind 메서드에 의한 간접호출


// this 바인딩은 함수 호출방식에 따라 동적으로 결정된다
const foo = function () {
    console.dir(this)
}

// 동일한 함수도 다양한 방식으로 호출

// 1. foo 함수 내부의 this는 전역 객체 window를 가리킨다
foo(); // window

// 2. foo 함수 내부의 this는 메서드를 호출한 객체 obj를 가리킨다
const obj = { foo }
obj.foo() // obj

// 3. foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다
new foo(); // foo{}


// 4. foo 함수 내부의 this는 인수에 의해 결정된다
const bar = {name: "bar"};
foo.call(bar);
foo.apply(bar);
foo.bind(bar)();


// * 일반 함수 호출 에서 this는 의미가 없다 자기 참조 하려고 하는기능인데 의미없음
// 1 - 1 일반함수 호출
function basicFoo1() {
    'use strict' // 엄격 모드
    console.log("basicFoo1", this)
    function basicFoo2() {
        console.log("basicFoo2", this)
    }
    basicFoo2();
}
basicFoo1();

// 1 - 2 일반함수 호출 (중첩함수)
var value = 1;
const testObj = {
    value: 100,
    // 일반함수
    foo1() {
        console.log("foo1", this)
        console.log("foo1", this.value)
        // 메서드내 중첩 함수
        function foo2() {
            console.log("foo2", this)
            console.log("foo2", this.value)
        }
        // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩 된다
        foo2();
    }
}

testObj.foo1()

// 1 - 3 일반함수 호출 (콜백함수)

const testObj2 = {
    value: 100,
    foo() {
        console.log("foo's this: ", this)
        // 콜백 함수 내부의 this에는 전역 객체가 바인된다
        setTimeout(function () {
            console.log("callback's this: ", this);
        }, 1000)
    }
}

testObj2.foo();
// 1 - 3 FIX

const testObj3 = {
    value: 100,
    foo() {
        const _this = this;
        // 콜백 함수 내부의 this에는 전역 객체가 바인된다
        setTimeout(function () {
            console.log("callback's this: ", _this);
        }, 1000)
    }
}
testObj3.foo();

// 1 - 3 FIX  this 명시적 바인딩 방법 : bind
const testObj4 = {
    value: 100,
    foo() {
        // 콜백 함수 명시적으로 this를 바인딩
        setTimeout(function () {
           console.log("testObj4", this.value)
        }.bind(this), 1000)
    }
}
testObj4.foo();

// 1 - 3 FIX  this 명시적 바인딩 방법 : 화살표 함수
const testObj5= {
    value: 100,
    foo() {
        // 콜백 함수 명시적으로 this를 바인딩
        setTimeout(() => console.log(`화살표 함수 방식 ${this.value}`), 2000)
    }
}
testObj5.foo();



