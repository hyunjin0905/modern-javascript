

const o = {}
// 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다
// o.[[Prototype]]
console.log( o.__proto__ );
//__proto__ 접근가능

// 내부 슬롯
const person = {
    name: "cho"
}
console.log(Object.getOwnPropertyDescriptor(person, 'name')) //propertyDescriptor 객체 반환

// 데이터 프로퍼티
const person1 = {
    name: "hyunjin"
}

// 프로퍼티 동적 생성

person1.age = 20;
console.log(Object.getOwnPropertyDescriptors(person1)) // 프로퍼티

// 접근자 프로퍼티
const person2 = {
    firstName: "hynnjin",
    lastName: "cho",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        // 배열 구조 할당
        [this.firstName, this.lastName] = name.split(' ');
    }
};
console.log(person2);
//  접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다
person2.fullName = "hello lee";
console.log(person2);
// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근하면 getter 함수 호출
console.log(person2.fullName);

let descriptor = Object.getOwnPropertyDescriptor(person2, "fullName");
console.log(descriptor);

// 접근자 프로퍼티와 데이터프로퍼티를 구별하는 방법
// 일반객체의 __proto__는  접근자 프로퍼티
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');

// 함수 객체의 prototype 은 데이터 프로퍼티 이다
Object.getOwnPropertyDescriptor(function () {}, 'prototype')

// 프로퍼티 정의
const person3 = {};
Object.defineProperty(person3, 'firstName', {
    value: "lucy",
    writable: true,
    enumerable: true,
    configurable: true
})

Object.defineProperty(person3, "lastName", {
    value: "cho",
})
descriptor = Object.getOwnPropertyDescriptor(person3, "firstName");
console.log("firstNmae", descriptor);
descriptor = Object.getOwnPropertyDescriptor(person3, "lastName");
console.log("lastName", descriptor);
console.log(Object.keys(person3));
person3.lastName = "kim";
console.log(person3)
// delete person3.lastName; // 재정의 불가능 [[configurable]]

// 접근자 프로퍼티 정의 defineProperty 하나만
Object.defineProperty(person, "fullName", {
   get() {
       return `${this.firstName} ${this.lastName}`;
   },
    set() {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
})

descriptor = Object.getOwnPropertyDescriptor(person3, "fullName");
console.log("fullName", descriptor);
person.fullName = "Heegun Lee";
console.log(person);

// defineProperties 여러개 정의
Object.defineProperties(person, {
    // 데이터 프로퍼티 정의
    firstName: {
        value: "lucy",
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: "c",
        writable: true,
        enumerable: true,
        configurable: true
    },
    // 접근자 프로퍼티 정의
    fullName: {
        // getter 함수
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        // setter 함수
        set() {
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        configurable: true
    }
})
person3.fullName = "hyeunjin cho";
console.log(person3);

console.log("----------------")

const animal = { name: "rabbit" }
console.log(Object.isExtensible(animal));

// 확장 금지
Object.preventExtensions(animal);
console.log(Object.isExtensible(animal));

// 추가금지
animal.age = 1;
console.log(animal);

// 삭제가능
delete animal.name;
console.log(animal);

// 프로퍼티 정의 에 의한 프로퍼티 추가 금지
//Object.defineProperty(animal, 'new', {
//   value: 2
//}); //// throws a TypeError
console.log(animal)

// 객체 밀봉
// 읽기과 쓰기만 가능

console.log(Object.isSealed(animal));
Object.seal(animal)
console.log(Object.isSealed(animal));
console.log(Object.getOwnPropertyDescriptors(animal))
// 추가 금지 삭제 금지
// ...
// 프로퍼티 값 갱신 가능
animal.name = "cat"
console.log(animal);

// 프로퍼티 재정의 금지
// Object.defineProperty(animal, "name", { configurable: true })

// 객체 동결
// 읽기만 가능
Object.freeze(animal);
console.log(Object.isFrozen(animal));
console.log(Object.getOwnPropertyDescriptors(animal))

// 갱신 금지
// ..
// 추가 금지
// ..
// 삭제 금지
// ..
// 재정의 금지
// ..

// 불변 객체
// 중첩 객체까지는 동결 시키지 못함
// 중첩 객체 까지 동결시키는 함수
function deepFreeze(target) {
    if (target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);
        Object.keys(target).forEach(key => deepFreeze(target[key]))
    }
    return target;
}

const person4 = {
    name: "cho",
    address: { city: "seoul" }
}
deepFreeze(person4);
console.log(Object.isFrozen(person4));
console.log(Object.isFrozen(person4.address));
person4.address.city = "busan"
console.log(person4);



