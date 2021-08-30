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



















