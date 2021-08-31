// * 클래스 인스턴스 생성과정
class P1 {
    // 생성자
    constructor(name) {
        // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩 된다
        console.log(this) // Person{}
        console.log(Object.getPrototypeOf(this) === Person.prototype);

        // 2. this에 바인딩되어 있는 인스턴스를 초기화 한다
        this.name = name;

        // 3. 완성된 인스턴스가 바인딩된  this가 암묵적으로 반환된다
    }

}

// * 프로퍼티
// - 인스턴스 프로퍼티
// consturuct 내부 코드가 실행 되기 이전에 consturctor 내부의 this에는 이미 클래스가 생성한 인스턴스인 빈객체가 바인딩 되어있다
// 언제나 퍼블릭하다

// - 접근자 프로퍼티
// 접근자 프로퍼티는 자체적으로 값([[value]] 내부슬롯) 을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할때 사용하는 접근자 함수로 구성된 프로퍼티다

const cafe = {
    name: "twosome",
    sellKind: ["coffe","cake"],
    get sell() {
        return this.sellKind;
    },
    set sell(name) {
        this.sellKind = [...this.sellKind, name];
        //  this.sellKind.push(name);
    }
}
//데이터 프로퍼티 를 통한 프로퍼티 값 참조
console.log(cafe.name, cafe.sellKind);
// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 sell 에 값을 저장하면 setter 함수가 호출한다
cafe.sell = "bread";
// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 sell에 접근하면 getter 함수가 호출한다
console.log(cafe.sell);
// sell 은 접근자 프로퍼티
// 접근자 프로퍼티는 get, set, enumarable, configurable, 프로퍼티 어트리뷰트 갖는다
console.log(Object.getOwnPropertyDescriptors(cafe, "sell"));

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    // getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }

}
const person = new Person("lucy", "cho");

console.log(person.firstName, person.lastName);
person.fullName = 'cho hyunjin';
console.log(person.fullName)
console.log(Object.getOwnPropertyDescriptors(Person.prototype, 'fullName'))
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(person)));


// * 클래스 필드의 정의 제안
// 자바스크립트에서도 인스턴스 프로퍼티를 마치 클래스 기반 객체 지향 언어의 클래스 필드 처럼 정의할수 있는 새로운 표준 사양인 "Class field declarations" 가
// 2021년 1월 TC39프로세스의 stage3에 제안되어 있다 (정식 표준 사양으로 승급 안됨)
// 최신 브라우저와 최신 node.js 에서는 다음 예제와 같이 클래스 필드를 클래스 몸체에 정의 할수 있다
class Person2 {
    // 클래스 필드 정의
    name = "lucy";
    // this.name = ""
    // - 클래스 몸체에서 클래스 필드를 정의 하는 경우 this 클래스 필드를 바인딩 해서는 안된다
}
const me = new Person2();
console.log(me);
// 클래스 필드를 참조하는 경우 자바화 같은 클래스 기반 객체 지향 언어에서는 this를 생략할수 있으나 자바스크립트에서는 this를 반드시 사용해야 한다


class Person3 {
    name; // 1
    // 클래스가 생성한 인스턴스에 클래스필드에 해당하는 프로퍼티가 없다면 자동 추가 되기 때문이다
    constructor(name) {
        // 클래스 필드 초기화
        // 어차피 내부에서 클래스필드를 참조하여 초기값을 할당해야한다  클래스 필드 정의 할 필요가 없다 // 1
        this.name = name;
    }

    // 함수는 일급객체 므로 함수를 클래스필드에 할당할수 있다
    getName = function () {
        return this.name;
    }
}

const me2 = new Person3("hyunjin");
console.log(me2)
console.log(me2.getName());


// private 필드 정의 제안
class Person4 {
    // private 필드 정의
    #name = '';
    constructor(name) {
        // private 필드 참조
        this.#name = name;
    }

}
const m3 = new Person4("lucy");
// console.log(me3.#name); //Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
// 클래스 내부에서만 접근가능


// 다만 접근자 프로퍼티를 통해 간접적으로 접근하는 방법 유효

class Person5 {
    // private 필드 정의
    #name = '';
    constructor(name) {
        // private 필드 참조
        this.#name = name;
    }

    // name 접근자 프로퍼티다
    get name () {
        return this.#name;
    }

}
const m5 = new Person5("lucy");

console.log(me.name);
// private 필드은 반드시 클래스 몸체에 정의 해야한다




// * static 필드 정의 제안
// 최신 브라우저 최신 nodejs 사용가능

class MyMath {
    static PI = 22 / 7;
    static #num = 10;
    static increment () {
        return ++MyMath.#num;
    }

}

console.log(MyMath.PI);
console.log(MyMath.increment());





















