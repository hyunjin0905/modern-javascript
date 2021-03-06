// 프로토타입 기반 객체지향 언어는 클래스가 필요없는 객체 지향 프로그래밍 언어다
// es5에서는 클래스없이도 다음과 같이 생성자 함수와 프로토타입을 통해 객체 지향 언어의 상속을 구현 받을 수 있다
// var Person = (function () {
//     // 생성자 함수
//     function Person(name) {
//          this.name = name;
//     }
//
//     // 프로토타입 메서드
//     Person.prototype.getName = function () {
//         console.log(this.name)
//     }
//     return Person
// }())
//
// var me = new Person("lucy");
// me.getName();

//차이점
// 1. 클래스는 new 연산자 없이 호출하면 에러가 발생한다 하지만 생성자 함수 new 연산자 없이 호출하면 일반 함수로서 호출된다
// 2. 클래스는 상속을 지원하는 extends 와 super 키워드를 제공한다. 하지만 생성자 함수는 extends 와 super 키워드 지원하지 않는다
// 3. 클래스는 호이스팅이 발생하지 않는 것처럼 동작한다. 하지만 함수 선언문으로 정의된 생성자 함수는 호이스팅이, 함수 표현식으로 정의한 생성자 함수는 변수 호이스팅이 발생한다
// 4. 클래스 내의 모든 코드에서 암묵적으로 strict mode가 지정되어 실행되며 strict mode를 해제 할수 없다 하지만 생성자 함수는 암묵적으로 strict mode가 지정되지 않는다
// 5. 클래스의 constructor, 프로토타입 메서드 , 정적메서드는 모두 프로퍼티 어트리뷰트 [[Enumerable]]의 값이 false 다 다시 말해 열거 되지 않는다



//
// 클래스 정의
// class Person {
//
// }

// 익명 클레스 표현식
// const Person = class {}
// 기명 클래스 표현식
// const Person = class MyClass {}
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
// 클래스는 함수로 평가된다
// console.log(Person) // ReferenceError....

// 클래스 선언문으로 정의한 클래스는 함수 선언문과 같이 소스코드 평가 과정 즉 런타임 이전에 먼저 평가되어 함수 객체를 생성한다
// 이때 클래스가 평가되어 생성된 함수 객체는 생성자 함수로서 호출할 수 있는, 즉 constructor다
// 생성자 함수로서 호출할 수 있는 함수는 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다
// 프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제 나 쌍으로 존재하기 때문
// 단 클래스는 클래스 정의 이전에 참조할수 없다


class Person2{}
console.log(typeof Person2);


// 클래스 선언문은 마치 호이스팅이 발생하지 않는 것처럼 보이나 그렇지 않음
const Person3 = '';
{
    // 호이스팅이 발생하지 않는다면 ''이 출력되어야 한다
    console.log(Person3); // Uncaught ReferenceError: Cannot access 'Person3' before initialization
    class Person3 {

    }
}
// 따라서 선언문 이전에 일시적 사각지대(T:TempporalDeadZone)에 빠지기 때문에 호이스팅이 발생하지 않는 것처럼 동작한다







