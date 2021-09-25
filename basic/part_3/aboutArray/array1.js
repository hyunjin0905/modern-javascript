// 배열 이란?
// 여러개의 값을 순차적으로 나열한 자료구조
// 배열이 가지고 있는 값을 요소 라고 부른다
const arr = ["apple", "banana", "melon"]
// 자바스크립트의 모든 값은 배열의 요소가 될 수 있다
// 배열의 요소는 배열에서 자신의 위치를 나타내는 0 이상의 정수인 index 를 갖는다
// 요소에 접근할때는 대괄포 표기법 인덱스 지정
arr[0];
arr[1];
arr[2];
// 배열은 요소의 개수, 배열의 길이를 나타내는 length 프로퍼티를 갖는다
console.log(arr.length)
// 배열은 index , length 프로퍼티를 갖기 때문에 for 문을 통해 순차적으로 요소에 접근할 수 있다
// 배열의 순회
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// * 자바스크립트에서 배열이라는 타입은 존재 하지 않는다 배열은 객체 타입이다
typeof arr // object


// 배열 리터럴
// Array 생성자 함수
// Array.of
// Array.from 메서드로 생성할 수 있다
// * 배열의 생성자함수는 Array 이며
// * 배열의 프로토타입 객체는 Array.prototype -> 배열을 위한 빌트인 메서드 제공


const arr1 = [1,2,3];
console.log(arr1.constructor === Array)
console.log(Object.getPrototypeOf(arr) === Array.prototype)


// * 배열 , 일반객체의 구별 되는 특징
// 구분                객체                  배열
// 구조         프로퍼티키와 프로퍼티 값      인덱스와 요소
// 값의 참조          프로퍼티 키              인덱스
// 값의 순서             x                    o
// length 프로퍼티       x                    o



