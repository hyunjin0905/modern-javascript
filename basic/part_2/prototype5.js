
/*
*
* 프로퍼티 존재 확인
*  - in 연산자 : 객체 내에 특정 프로퍼티가 존재하는 지 여부를 확인한다
*  key: 프로퍼티 키를 나타내는 문자열
*  object: 객체로 평가되는 표현식
* */

const person = {
    name: "lucy",
    address: "Seoul"
}

console.log('name' in person);
console.log('address' in person);
console.log('age' in person);


// 확인대상 객체 (person 객체ㄷ 모든 프로토타입의 프로퍼티를 확인하므로 주의 필요
// 해당 객체에는 toString 없지만
console.log('toString' in person); // true
// in 연산자는 person 객체가 속한 프로타입 체인상에 존재하는 모든 프로토타입에서 toString 프로퍼티를 검색했기 떄문이다
// toString  Object.prototype 메서드

// es 6 Reflect.has
console.log(Reflect.has(person, 'name'))
console.log(Reflect.has(person, 'toString'))

// Object.prototype.hasOwnProperty **** 이걸로 쓰는 걸로
console.log(person.hasOwnProperty("name"))
console.log(person.hasOwnProperty("toString"))

/*
* 프로퍼티 열거
* for ... in 문
* for (변수선언문 in 객체) {...}
* */

for (const key in person) {
    console.log(key + ' : ' + person[key]);
}

// toString 과 같은 Object.prototype 의 프로퍼티가 열거되지 않는다
// 메서드가 열거할 수 없도록 정의 되어 있는 프로퍼티다
// 다시 말해
// Object.prototype.string 프로퍼티의 프로퍼티 어트리뷰트 [[Enmerable]]의 값이 false 이기 떄문이다
console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'))
// ** for...in 문은 프토토타입 체인 상에 존재하는 모든 프로토타입의 프로퍼티 중에서 프로퍼티 어트리뷰트 [[Enumerable]] 의 값이 true 프로퍼티를 순회하며 열거한다

const person2 = {
    name: "lucy",
    address: "Seoul",
    __proto__: { age: 29} //
}
for (const key in person2) {
    // 상속받은 프로퍼티 제외하고 객체 자신의 프로퍼티만 열거하려면  객체 자신의 프로퍼티인지 꼭 확인하기
    if (!person2.hasOwnProperty(key)) continue;
    console.log(`${key}: ${person2[key]}`)
}


// 프로퍼티가 심벌인 프로퍼티는 열거 하지 않음
const sym = Symbol();
const obj = {
    a: 1,
    [sym]: 10
}

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`)
}

// for ... in 문 은 순서가 보장이 못됨
// 대부분 모던 브라우저는 순서 보장 숫자(사실은 문자열) 인 프로퍼티 키에대해서는 정렬을 실시
const obj2 = {
    2: 2,
    3: 3,
    1: 1,
    b: 'b',
    a: 'a'
}

for (const key in obj2) {
    if (!obj2.hasOwnProperty(key)) continue;
    console.log(`${key}: ${obj2[key]}`)
}

console.log("------ 배열 -------- ")
// 배열!
// for ...of
// Array.prototype.forEach 메서드 권장
// 배열도 객체이미르ㅗ 프로퍼티와 상송받는 프로퍼티가 포함될수 있다

const arr = [1, 2, 3];
arr.x = 10; // 배열도 객체이므로 프로퍼티를 가질수 있다
console.log(arr);
for (const i in arr) {
    console.log(arr[i])
}
console.log("arr.length ",arr.length)
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.log("forEach")
// forEach 는 메서드는 요소가 아닌 프로퍼티는 제외한다
arr.forEach(v => console.log(v));

// for ...of는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다
for (const value of arr) {
    console.log(value)
}


// for in 단점
// 객체 자신의 고유프로퍼티 뿐만 아니라 상속받은 프로퍼티도 열거함
// 계속 hasownProperty 메서드 써야함


// Object.keys  Object.values, Object.entries 권장
// * Object.keys 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다
console.log("Object.keys  Object.values, Object.entries 권장");
const Cafe = {
    name: "starbucks",
    address: "seoul",
    __proto__: { address2: "gudi" }
}

console.log(Object.keys(Cafe));
console.log(Object.values(Cafe));
console.log("-------------Object.entries()---------");
// 객체 자신의 열거 가능한 프로퍼티 키와 값의 쌍의 배열을 배열에 담아 반환
//console.log(Object.entries(Cafe)); //[["name","address"], ["starbucks" , "seoul]]
//console.log(Object.entries(Cafe))
const a = Object.entries(Cafe);
//console.log(a);
a.forEach(([name, address]) => console.log(name, address))


