// 프로토타입 기반 객체지향 언어는 클래스가 필요없는 객체 지향 프로그래밍 언어다
// es5에서는 클래스없이도 다음과 같이 생성자 함수와 프로토타입을 통해 객체 지향 언어의 상속을 구현 받을 수 있다
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

//차이점
// 1. 클래스는 new 연산자 없이 호출하면 에러가 발생한다 하지만 생성자 함수 new 연산자 없이 호출하면 일반 함수로서 호출된다
// 2. 클래스는 상속을 지원하는 extends 와 super 키워드를 제공한다. 하지만 생성자 함수는 extends 와 super 키워드 지원하지 않는다
// 3. 클래스는 호이스팅이 발생하지 않는 것처럼 동작한다. 하지만 함수 선언문으로 정의된 생성자 함수는 호이스팅이, 함수 표현식으로 정의한 생성자 함수는 변수 호이스팅이 발생한다
// 4. 클래스 내의 모든 코드에서 암묵적으로 strict mode가 지정되어 실행되며 strict mode를 해제 할수 없다 하지만 생성자 함수는 암묵적으로 strict mode가 지정되지 않는다
// 5. 클래스의 constructor, 프로토타입 메서드 , 정적메서드는 모두 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false 다 다시 말해 열거 되지 않는다




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






