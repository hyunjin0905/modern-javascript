// 프로토타입 기반 객체지향 언어는 클래스가 필요없는 객체 지향 프로그래밍 언어다
// es5에서는 클래스없이도 다음과 같이 생성자 함수와 프로토타입으 ㄹ통해 객체 지향 언어의 상속을 구현 받을 수 있다
var Person = (function () {
    // 생성자 함수
    function Person(name) {
         this.name = name;
    }

    // 프로토타입 메서드
    Person.prototype.getName = function () {
        console.log(this.name)
    }
    return Person
}())

var me = new Person("lucy");
me.getName();

// 클래스 정의
class Person {

}

// 익명 클레스 표현식
const Person = class {}
// 기명 클래스 표현식
const Person = class MyClass {}
// 클래스를 표현식으로 갖는다는 것은 일급 객체 라는것 이다
// 1. 무명의 리터럴 생성 가능 즉 런타임에 생성이 가능
// 2. 변수나 자료구조에 저장할 수 있다
// 3. 함수의 배개변수에 전달할 수 있다
// 4. 함수의 반환값으로 사용 할 수 있다
// 클래스는 함수다


class Person {
// 몸체에는 0개 이상의 메서드만 정의할 수 있다
// 생성자
// 프로토타입 메서드
// 정적 메서드
    constructor(name) {
        // 인스턴스 생성 및 초기화
        this.name  = name; // name 프로퍼티는 public
    }
    // 프로토타입 메서드
    sayHi() {
        console.log(`hi${this.name}`)
    }
    // 정적 메서드
    static sayHell() {
        console.log("hello")
    }
}

const me = new Person("lucy");
// 인스턴스 프로퍼티 참조
console.log(me.name);
//프로토타입 메서드 호출
me.sayHi();
// 정적 메서드 호출
Person.sayHell()

// 클래스 호이스팅

