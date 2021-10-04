// * 클로저


// const x = 1;
// function outerFunc() {
//     const x = 10;
//
//     function innerFunc() {
//         console.log(x)
//     }
//     innerFunc()
// }
// outerFunc();
//

const x = 1;
function outerFunc() {
    const x = 10;
    innerFunc()
}
function innerFunc() {
    console.log(x)
}

outerFunc()
// innerFunc 함수가 outerFuc 내부에서 정의된 중첩함수가 아니라면 innerFunc함수를
// outerFunc 함수의 내부에서 호출한다 하더라도 outerFunc 함수의 변수에 접근 할수 없다
// 이 와 같은 현상은 자바스크립트가 렉시컬 스코프를 따르는 프로그래밍 언어

// 렉시컬 스코프
// 자바스크립트 엔진은 함수를 어디서 호출했는지가 아니라 함수를 어디에 정의했는지에 따라 상위 스코프가 결정한다 이를 렉시컬 스코프(정적 스코프)라 한다

const y = 1;
function foo() {
    const y = 10;
    bar()
}
function bar() {
    console.log(y)
}
foo();
bar();

// 스코프의 실체는 실행 컨텍스트의 렉시컬 환경이다
// 이 렉시컬 환경은 자신의 "외부 렉시컬 환경에 대한 참조"를 통해 상위 렉시컬 환경과 연결된다 이것이 바로 스코프 체인이다
// 렉시컬 환경의 외부 렉시컬 환경에 대한 참조에 저장할 참조값 즉 상위 스코프에 대한 참조는 함수 정의가 평가되는 시점에 함수가 정의된 환경(위치)에 결정된다 이것이 렉시컬 스코프다


// 함수 객체의 내부슬롯
// 렉시컬 스코프가 가능하려면 함수는 자신이 호출되는 환경과는 상관없이 자신이 정의된 환경, 즉 상위 스코프(함수가 정의가 위치하는 스코프가 바로 상위 스코프다)를 기억 해야한다
// 함수는 자신의 내부슬롯 [[Environment]]에 자신이 정의된 환경 즉 상위스코프의 참조를 저장한다









