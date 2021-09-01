// 인스턴스 생성
// class Person{}

// 클래스는 생성자 함수이며 new 연산자와 함께 호출되어 인스턴스를 생성한다
//const me = new Person();

// 클래스는 인스턴스를 생성하는 것이 유일한 존재 이유
// const me = Person();// TypeError: Class constructor Foo cannot be invoked without "new"
// console.log(me);

// 클래스는 함수 표현식과 마찬가지로 클래스를 가리키는 식별자로 인스턴스를 생성해야한다
const person = class MyClass{}
// 함수 와 동일하게 클래스 몸체 내부에서만 유효한 식별자다
// console.log(MyClass)
// const you = new MyClass{] // 기명표현식과 마찬가지로 클래스표현식에서 사용한 클래스 이름은 외부 코드에서 접근 불가능하기 떄문

// 몸체 메서드 정의
// consutruor 생성자
// 프로토타입 메서드
// 정적 메서드


// 클래스 정의에 대한 새로운 제안 사양...
// 원래는 인스턴스 프로퍼티는 반드시  construcotr 내부에서 정의 해야되데  몸체에서도 정의 내릴수 있다는 ... 모던브라우저에서는 사용가능(크롬)


// constuctor 인스턴스를 생성하고 초기화하기 위한 특수한 메서드다 constructor는 이름을 변경할 수 없다
// class Person {
//     // 생성자
//     constructor(name) {
//         // 인스턴스 생성 및 초기화
//         this.name = name;
//     }
// }

// console.log(typeof Person) // function
// console.log(Person)
// 클래스는 평가되어 함수 객체
// 프로토타입과 연결되어 있으면 자신의 스코프 체인을 구성한다
// prototype 프로퍼티가 가리키는 프로토타입 객체의 constucutor프로퍼티는 클래스 자신을 카리키다 이는 클래스가 인스턴스를 생성하는 생성자 함수 라는 것을 의미한다
// 즉 생성자함수와 ㅁ찬가지로 constuctor 내부에서 this에 추가한 프로퍼티는 인스턴스 프로퍼티가 된다

// 클래스
class Myclass {
    // 생성자
    constructor(name) {
        // 인스턴스 생성 및 초기화
        this.name = name;
    }
}

// 생성자 함수
function Person(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
}
// consturctor 는 메서드로 해석되는것이나리ㅏ 클래스가 평가 되어 생성한 함수 객체 코드의 일부가된다
// 클래스 constuctor 와 프로토타입 consturctor 관련없다
// * 최대 한개만 존재
// * 생략 가능
// * 생략 시 암묵적으로 정의된다
// * constructor 내부에서 this에 인스턴스 프로퍼티를 추가한다

class Person2 {
    constructor() {
        this.name = "lucy";
        this.address = "seoul";

        // 명시적으로 원시값을 반환하면 원시값 무시되고 암묵적으로 this가 반환된다
        //return {}
    }
}
// constuctor 에서 명시적으로 반환한 빈 객체가 반환된다
const me2 = new Person2();
console.log(me2);

class Person3 {
    constructor() {
        this.name = name;
        // 명시적으로 원시값을 반환하면 원시값 반환은 무시되고 암묵적으로 this가 반환된다
        return 100;
    }
}
const me3 = new Person3("lucy");
console.log(me2);

// 프토토타입 메서드

// 생성자 함수
function f(name) {
    this.name = name
}
f.prototype.sayHi = function () {
    console.log(this.name)
}
const f1 = new f("lucy");
f1.sayHi();

class ClassF {
    constructor(name) {
        this.name = name;
    }
    // 프로토타입 메서드
    sayHi () {
        console.log(this.name)
    }
}
// 클래스가 생성한 인스턴스는 프롵토타입의 체인의 일원이 된다
const f2 = new ClassF();
f2.sayHi();

// f2 객체의 프로토타입은 classF.prototype 이다
console.log("Object.getPrototypeOf(f2) === ClassF.prototype", Object.getPrototypeOf(f2) === ClassF.prototype);
console.log(f2 instanceof ClassF);
console.log("f2 객체", f2);
console.log(Object.getPrototypeOf(ClassF.prototype));
// classF.prototype 의 프로토타입은 Object.prototype 이다
console.log(Object.getPrototypeOf(ClassF.prototype) === Object.prototype);
// f2 객체의 construtor 는 classF 클래스다
console.log(f2.constructor)
console.log(f2.constructor === ClassF);
// 클래스는 생성자 함수와 마찬가지로 프로토타입 기반의 객체 생성 매커니즘이다

// 정적 메서드
// 인스턴스를 생성하지 않아도 호출할수 있는 메서드

/* 생성자 함수 의 정적 메서드 쓰는 법 */
function Classf3(name) {
    this.name = name;
}
// 정적 메서드
Classf3.sayHi = function () {
    console.log("hi!")
}
Classf3.sayHi();

/* 클래스에서 정적 메서드 쓰는 법 */
class Classf4 {
    constructor(name){
        // 인스턴스 생성 및 초기화
        this.name = name;

    }
    static sayHi() {
        console.log("Hi!");
    }
}

Classf4.sayHi();
// 정적 메서드는 인스턴스로 호출할수 없다 정적 메서드가 바인딩된 클래스는 인스턴스의 프로토타입 체인상에 존재하지 않기 때문



/// 정적 메서드 vs 프로토타입 차이
// 1. 자신이 속해 있는 프로토타입 체인이 다르다
// 2. 정적 메서드는 클래스로 호출 프로토타입 메서드는 인스턴스로 호출
// 3. 정적 메서드는 인스턴스 프로퍼티를 참조 할수 없지만 프로토타입 메서드는 가능


class Square1 {
    // 정적 메서드
    static area (width, height) {
       return width * height
    }
}

console.log(Square1.area(20, 30));

class Square2 {

    constructor(width, height) {
        this.width = width;
        this.heigth = height;
    }
    area() {
        return this.width * this.height
    }
}


const squareCalcu = new Square2(20, 30)
console.log(squareCalcu.area())

// 인스턴스 프로퍼티를 참조 해야할경우 정적메서드는 프로토타입 메서드를 사용해야한다
// this 사용
// 정적 메서드를 모아놓는 이유는 이름 충돌 가능성을 줄여주고 관련함수들을 구조화 할 수 있는 효과가 있다

// 클래스 정의한 특징
// 1. function 키워드를 생략한 메서드 축약표현을 사용했다
// 2. 객체 리터럴과 다르게 클래스에 메서드를 정의할때는 콤마가 필요 없다
// 3. 암묵적으로 strict mode로 실행된다
// 4. for ... in 문 이나 Object.keys() 메서드등으로 열거 할 수 없다 즉 프로퍼티 열거 가능 여부를 나타내며, 불리언 값을 갖는 프로퍼티 어트리뷰트 [[Enumerable]] 의 값이 false
// 5. 내부 메서드 [[Construct]] 를 갖지 않는 non-consturctor 다 따라서 new 연산자와 함께 호출 할수 없다



