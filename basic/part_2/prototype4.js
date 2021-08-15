// 직접 상속 Object.create
/**
 * 지정된 프로토타입 및 프로퍼티를 갖는 새로운 객체를 생성하여 반환한다
 * @param {Object} prototype = 생성할 객체의 프로토타입으로 지정할 객체
 * @param {Object} [propertiesObject] - 생성할 객체의 프로퍼티를 갖는 객체
 * @returns {Object} 지정된 프로토타입 및 프로터피를 갖는 새로운 객체
 */

// Object.create(prototype[,propertiesObject])

// 프로토타입이 null 객체 생성 , 생성된 객체는 프로토타입 체인의 종점에 위치한다
// obj -> null
let obj = Object.create(null);
console.log("obj : ", obj);
console.log("Object.getPrototypeOf(obj) === null : ", Object.getPrototypeOf(obj) === null);
// Object.prototype을 상속 받지 못한다
// console.log(obj.toString())

// obj -> Object.prototype -> null
// obj = {  } 와 동일하다
obj = Object.create(Object.prototype);
console.log("Object.getPrototypeOf(obj) === Object.prototype : ", Object.getPrototypeOf(obj) === Object.prototype);

// obj -> Object.prototype -> null
// obj = { x: 1}; 와 동일하다
obj = Object.create(Object.prototype, {
    x: { value: 1, writable: true, enumerable: true, configurable: true}
});
// 위 코드는 아래와 동일
// obj = Object.create(Object.prototype);
// obj.x = 1;
console.log("obj.x : ", obj.x);
console.log("Object.getPrototypeOf(obj) === Object.prototype : ", Object.getPrototypeOf(obj) === Object.prototype);

const myProto = { x: 10 };
// 임의의 객체를 직접 상속 받는다
// obj -> myProto -> Object.prototype -> null
obj = Object.create(myProto);
console.log(obj.x);
console.log("Object.getPrototypeOf(obj) === myProto: ", Object.getPrototypeOf(obj) === myProto)


// 생성자 함수

function Person(name) {
    this.name = name;
}
// obj -> Person.prorotype -> Object.prototype -> null
// obj = new Person("lucy") 와 같음
obj = Object.create(Person.prototype);
obj.name = "lucy";
console.log("생성자 함수 Object.create: ", obj.name);
console.log(Object.getPrototypeOf(obj));
// * 장점
// new 연산자 없이도 객체를 생성할 수 있다
// 프로토타입을 지정하면서 객체를 생성할 수 있다
// 객체 리터럴에 의해 생성된 객체도 상속받을 수 있다

const objTest = { a: 1 };

objTest.hasOwnProperty('a');
objTest.propertyIsEnumerable('a');
console.log(objTest)

// * ESLint 권장하지 않음
// 프로토타입 체인의 종점에 위치하는 객체 를 생성
const objTest2 = Object.create(null);
console.log("objTest", objTest) // [[prototype]] o
console.log("objTest2", objTest2) // [[prototype]] x
objTest2.a = 1;
console.log("Object.getPrototypeOf(objTest2) === null", Object.getPrototypeOf(objTest2) === null);

// * objTest2 Object.prototype의 빌트인 메서드 사용할 수 없음
// console.log(objTest2.hasOwnProperty('a'));

// ** 간접적 호출
const objTest3 = Object.create(null);
objTest3.a = 1;

// ** Object.prototype 빌트인 메서드는 객체로 직접 호출 하지 않는다!
console.log(Object.prototype.hasOwnProperty.call(objTest3, 'a'));




// * 객체 리터럴 내부에서 __proto__에 의한 직접상속
// 두번쨰 인자 프로퍼티 정의 번거로움
// es6 에서  객체 리터럴 내부에서 __proto__ 접근자 프로퍼티를 사용해서 직접 상속을 구현

const myProto2 = { x: 10 };
// 객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있다.
const objTest4 = {
    y: 20,
    __proto__: myProto2
};
// const objTest = Object.create(myProto, {
//     y: { value: 20, writable: true, enumerable: true, configurable: true}
// });  위와 동일하다


console.log("objTest4", objTest4.y, objTest4.x);
console.log(Object.getPrototypeOf(objTest4) === myProto2);


