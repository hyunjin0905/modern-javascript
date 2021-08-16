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





