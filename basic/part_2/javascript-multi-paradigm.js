// 자바스크립트
// 명령형, 함수형, 프로토타입 기반 객체 지향 프로그래밍을 지원하는 멀티 패러다임 프로그래밍 언어
// * 원시타입의 값 제외 나머지 값들은 모두 객체다
// -> 자바스크립트를 이루고 있는 거의 모든 것이 객체다

// 클래스
// * es6 도입
// * 클래스도 함수 이다
// * 프로토타입 기반 패턴의 문법적 설탕(사람이 편한게 디자인된 문법)
// * 생성자 함수 처럼 인스턴스를 생성하지만 보다 엄격 제공하지 않는 기능도 제공
// ..


// 객체 지향 프로그래밍
// * 실세계의 실체(사물이나 개념)를 인식하는 철학적 사고를 프로그래밍에 접목하려는 시도에서 시작한다.
// * 실체는 특징이나 성질을 나태내는 속성을 가지고 있고 이를 통해 실체를 구분 한다
// * 다양한 속성중에서 필요한 속성만 간추려 내어 표현하는것을 추상화 하라고 한다


const person = {
    name: "jo",
    address: "seoul"
}

console.log(person)
// * 속성을 통해 여러개의 값을 하나의 단위로 구성한 복합적인 자료구조를 객체라 한다
// * 독립적인 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임이다

const circle = {
    radius: 5, // 원의 상태 를 나타내는 데이터

    /* 원의 지름과 둘레 넓이 를 구하는것은 동작이다 */
    getDiameter() {
        return 2 * this.radius;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    },
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

console.log(circle);
// ** 객체 지향 프로그래밍은 객체가 상태데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조 라고 할 수 있다
// 데이터 - 프로퍼티
// 동작 - 메서드
// 자신의 고유한 기능을 수행하면서도 다른 객체와 관계성을 가질 수 있다


// 상속과 프로토타입
function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
        return Math.PI * this.radius ** 2;
    }
}
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때 마다 동일한 동작을 하는
// getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다
// getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것 이 바람직하다
console.log(circle1.getArea === circle2.getArea);
console.log(circle1.getArea());
console.log(circle2.getArea());

// !!!! 동일한 프로퍼티 동일한 메서드 구조를 갖는 객체를 여러개 생성할 때만 유용하다
// 10개의 인스턴스를 생성하면 내용이 동일한 메서드도 10개 생성 메모리를 불필요하게 낭비한다

