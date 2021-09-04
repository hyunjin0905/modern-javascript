// * 표준 빌트인 객체
const strObj = new String('lucy');
console.log(Object.getPrototypeOf(strObj) === String.prototype);


// toFixed 는 Number.prototype의 프로토타입 메서드다
const numObj = new Number(1.5);
console.log(numObj.toFixed())
// 정적 메서드 제공
console.log(Number.isInteger(0.5));


// 원시값은 객체가 아니므로 프로퍼티나 메서드를 가질 수 없는데도 원시값인 문자열이 마치 객체처럼 동작한다
const str = 'hello';
console.log(str.length);
console.log(str.toUpperCase());

// 마침표 기법으로 접근하면 자바스크립트 엔진이 일시적으로 원시값을 연관된 객체로 변환해주기 때문이다
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
// 이때 2에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 된다.

// 4. 식별자 str은 새롭게 암묵적으로 생성된(2에서 생성된 래퍼객체와 다른)래퍼 객체를 가리킨다
// 새롭게 생성된 래퍼 객체는 name 프로퍼티가 존재하지 않는다
console.log(strA.name)

// 5.식별자 strA는 다시 원래의 문자열, 즉 래퍼객체의 [[stirngData]] 내부 슬롯에 할당된 원시값을 갖는다
// 이때 4에서 생성된 래퍼객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상된다
console.log(typeof strA, strA)

// new 연산자와 함께 호출해서 인스턴스 생성할 필요 없고 권장하지 않는다


// * 전역객체
// 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체이면 어떤 객체에도 속하지 않은 최상위 객체다
console.log(globalThis === this)
// 전역 객체는 개발자가 의도적으로 생성 할 수 없다
// 즉, 전역 객체를 생성할 수 있는 생성자 함수가 제공되지 않는다
// 전역객체의 프로퍼티를 참조할때 winodw 를 생략 할 수 있다.
window.parseInt('F',15)
console.log(window.parseInt === parseInt);
// 자바스크립트 실행환경에 따라 추가적으로 프로퍼티와 메서드를 갖는다
// 브라우저 환경
// DOM , BOM , CANVAS< XMLHttpRequest, fetch , requestAnimationFrame, SVG, Web Stroage, Web Com,ponent , WebWokrder 같은 클라이언트 사이드 Web api
// 노트 환경 nodejs 교유 api 호스트 객체 로 제공
// let const 키워드로 선언한 전역 변수는 보이지 않는 개념적인 블록 (전역 렉시컬 환경의 선언적 환경 레코드)내에 존재하게 된다


// 빌트인 전역 프로퍼티

// 무한대
console.log(window.Infinity === Infinity);
console.log(typeof Infinity)


// NaN Not-a-Number
console.log(window.NaN)
console.log(typeof NaN);

// undefiend 프로퍼티는 원시타입 undefiend를 값으로 갖는다
console.log(window.undefiend)

// 빌트인 전역함수 전역객체의 메서드다
console.log(eval('1+2'));


// isInFinite
/**
* 전달받은 인수가 유한수인지 확인하고 그 결과가 반환한다
* @param {number} testvalue
* @return {boolean} 유한수 여부
* */

//* isNaN
//* parseFloat
//* pareInt


//
//* encodeURI
/**
* 완전한 URI 통합자원 식별자 (식별하는 고유한 문자열 시퀀스)
* (인터넷에 있는 자원을 나태내는 유일한 주소)를 문자열로 전달받아 이스케이프 처리를 위해 인코딩한다
* @param {string} uri = 완전한 URI
* @returns {stiring} 인코딩 된 URI
* */

// 이스케이프 터리는 네트워크를 통해 정보를 공유할떄 어떤 시스템에서도 읽을 수 있는 아스키 문자 셋으로 변환

// 완전한 URI
const uri = 'http://example.com?name=조현진&job=programmer&teacher';
const enc = encodeURI(uri)
console.log(enc);


//* decodeURI
/**
 * 인코딩된 URI 를 전달받아 이스케이프 처리 이전으로 디코딩한다
 * @param {string} encodedURI - 인코딩된 URI
 * @returns {string} 디코딩된 URI
*/
const dec = decodeURI(enc);
console.log(dec)



//* encodeURIComponent
/**
 * URI의 구성요소를 전달받아 이스케이프 처리를 위해 인코딩한다
 * @param {string} uriComponent = URI의 구성요소
 * @returns {stiring} 인코딩 된 URI의 구성요소
 * */



//* decodeURIComponent
/**
 * 인코딩된 URI의 구성요소를 전달받아 이스케이스 처리 이전으로 디코딩한다
 * @param {string} encodeURIComponent
 * @returns {stiring} 디코딩된 URI dml rntjddyth
 * */


// URI 쿼리 스트링
const uriComp = "name=조현진&job=programmer&good";
// 쿼리 스트링 구분자까지 인코딩한다
let enc2 = encodeURIComponent(uriComp);
console.log(enc2);
let dec2 = decodeURIComponent(enc2);
console.log(dec2);


// 암묵적 전역
console.log(x) // 전역변수는 x 는 호이스팅이 발생한다
// console.log(y) //ReferenceError: y is not defined .. 호이스팅 발생하지 않음
var x = 10; // 전역변수
function foo() {
    // 선언하지 않음 식별자에 값을 할당
    y = 20;
}
foo()
// 선언하지 않은 식별자 y를 전역에서 참조 할수 있다
console.log(x + y);


// foo 함수 호출되면
// 자바스크립트 엔진은 y 변수에 값을 할당하기 위해 먼저 스코프 체인을 통해 선언된 변수인지 확인한다
// 어디에도 찾을수 없어서 참조 에러가 발생한다
// 하지만 자바스크립트 엔진은 window.y = 20 으로 해석해서 전역 객체에 프로퍼티를 동적 생성한다
// 결국 y 는 프로퍼티가 되어 마치 전역 변수처럼 동작 이러한 현상을 암묵적 전역이라한다
// y 는 변수가 아님 호이스팅 일어나지 않는다

var a = 10; // 전역 변수

function foo2() {
    // 선언하지 않은 식별자에 값을 할당
    b = 20; // window.y = 20;
    console.log(a + b)
}
foo2();
console.log(window.a);
console.log(window.b);
delete a; // 전역 변수는 삭제 되지 않는다
delete b; // 프로퍼티는 삭제 된다
console.log(window.a);
console.log(window.b);




