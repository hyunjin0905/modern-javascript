// * 표준 빌트인 객체
const strObj = new String('lucy');
console.log(Object.getPrototypeOf(strObj) === String.prototype);


// toFixed 는 Number.prototype의 프로토타입 메서드다
const numObj = new Number(1.5);
console.log(numObj.toFixed())
// 정적 메서드 제공
console.log(Number.isInteger(0.5));


// 원시값은 객체가 아니므로 프로퍼티나 메서드를 가 질수 없는데도 워ㅜ원시값인 문자열이 마치 객체처럼 동작한다
const str = 'hello';
console.log(str.length);
console.log(str.toUpperCase());

// 마침표기법으로 접근하면 자바스크립트 엔진이 일시적으로 원시값을 연관된 객체로 변환해주기 때문이다
// 문자열 숫자 불리언값에 대해 객체처럼 접근하면 생성되는 임시 객체를 래퍼 객체라 한다
// 예 문자열 접근하는순간 String 생성자함수의 인스턴스가 생성되고, 래퍼객체의 [[StringData]] 내부 슬롯에 할당
const str2 = 'hi';
console.log(str.length);
console.log(str.toUpperCase());

// 다시 원시값으로 되돌림
console.log(typeof str);


// 1. 식별자 strA 은 문자열을 값으로 가지고 있다
const strA = "hello";
// 2. 식별자 str은 암묵적으로 생성된 래퍼 객체를 가리킨다
// 식별자 str 값 은 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된다
// 래퍼 객체에 name 프로퍼티가 동적 추가된다
strA.name = "lucy";
// 3. 식별자 strA는 다시 원래의 문자열, 즉 래퍼객체의 [[StringData]] 내부슬롯에 할당된 원시값을 갖는다
// 이때 2에서 생성된 래퍼 객체는 아무도 찾조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.

// 4. 식별자 str은 새롭게 암묵적으로 생성된(2에서 생성된 래퍼객체와 다른 )래퍼 객체를 가리킨다
// 새롭게 생성된 래퍼 객체는 name 프로퍼티가 존재하지 않는다
console.log(strA.name)

// 5.식별자 strA는 다시 원래의 문자열, 즉 래퍼객체의 [[stirngData]] 내부 슬롯에 할당된 원시값을 갖는다
// 이때 4에서 생성된 래퍼객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상된다
console.log(typeof strA, strA)

// new 연산자와 함께 호출해서 인스턴스 생성할 필요 없고 권장하지 않는다


// * 전역객체

