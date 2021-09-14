(function () {
    const foo = () => console.log(this);
    foo();
}).call({a: 1});


(function () {
    const bar = () => () => console.log(this);
    bar()();
}).call({a: 1});

const f = () => console.log("f의 상위스코프는  전역 이므로   -> ",this)
f();



// increase 프로퍼티에 할당한 화살표 함수의 상위스코프는 전역이다
// 따라서 increase 프로퍼티에 할당한 화살표 함수의 this는 전역객체를 가리킨다
const count = {
    num: 1,
    increase: () => ++this.num
}
console.log(count.increase()) // NaN


// 화살표 함수는 this 바인딩 x

window.x = 1;
const normal = function () { return this.x }
console.log(normal.call({ x: 10 }))


const arrow = () => this.x
console.log(arrow.call({ x: 1 }))

// 호출 할수 없다는 의미 는 아니다 !

const add = (a, b) => a + b;
console.log(add.call(null, 1, 2));
console.log(add.apply(null, [1, 2]));
console.log(add.bind(null, 1, 2)());


// 메서드를 화살표 함수로 정의하는 것은 피해야 한다
// 화살표 함수로 메서드 정의
// 일반적인 의미의 메서드다
//bad
const person1 = {
    name: "lucy",
    sayHi: () => console.log(`hi${this.name}`)
}
person1.sayHi();


//good
const person2 = {
    name: "lucy",
    sayHi () {
        console.log(`hi${this.name}`)
    }
}
person2.sayHi();


// 프로토타입 객체의 프로퍼티에 화살표 함수를 할당하는 경우에도 동일한 문제 발생
function Person3(name) {
    this.name = name
}
// Bad
Person3.prototype.sayHI = () => console.log(`hi ${this.name}`)
// this.name 은 빈문자열을 갖는 window.name 과 같다
const person3 = new Person3("lucy");
person3.sayHI();

// goood
Person3.prototype.sayGoodHi = function () {
    console.log(`hi ${this.name}`)
}
person3.sayGoodHi();



// 일반 함수가 아닌 es6 메서드를 동적 추가 하고싶다면 다음과 같이
// 객체 리터럴을 바인딩하고 프로토타입의 constructor 프로퍼티와 생성자 함수 간의 연결을 재설정한다
function Person(name) {
    this.name = name;
}

Person.prototype = {
    // constructor 프로퍼티와 생성자 함수간의 연결을 재설정
    constructor: Person,
    sayHi() { console.log(`Hi ${this.name}`) }
}
const person = new Person("lucy");
person.sayHi();

// 클래스 필드 정의 제안을 사용하여 클래스필드에 화살표 함수를 할당할수 있다
class ClassPerson {
    name = "lucy";
    sayHi = () => console.log(`Hi ${this.name}`)
}
const classperson = new ClassPerson();
classperson.sayHi()


// 그렇다면 sayHi 클래스필드 에 할당한 화살표 함수의 상위 스코프는  무엇일까
// sayHi 클래스 필드는 인스턴스 프로퍼티이므로 다음과 같은 의미이다
class ClassPerson2 {
    constructor() {
        this.name = "lucy"
        // 클래스가 생성한 인스턴스(this)의 sayHi 프로퍼티에 화살표 함수를 할당한다
        // 따라서 sayHi 프로퍼티는 인스턴스 프로퍼티다
        this.sayHi = () => console.log(`Hi ${this.name}`)
    }
}
// 클래스 필드는 프로토타입 메서드가아니라 인스턴스 메서드가 됨
// 그래서  es6 메서드 축약표현으로 정의한 es6 메서드를 사용하는것이 좋다

// 결론
class ClassPerson3 {
    name = "조현진";
    sayHi() { console.log(`hi ${this.name}`) }
}
const classPerson3 = new ClassPerson3()
classPerson3.sayHi();












