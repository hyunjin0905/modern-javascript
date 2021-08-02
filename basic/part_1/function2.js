
helloMember_named("조현진");
//helloMember_unamed("조현진"); //Uncaught ReferenceError: Cannot access 'helloMember_unamed' before initialization



function helloMember_named(name) {
    return `${name} + 님 하이요: 함수 선언식, 기명함수`
}

const helloMember_unamed = function (name) {
    return `${name} + 님 하이요: 함수 표현식, 익명함수`
}

helloMember_unamed("조현진");


// 함수 선언식
// 함수 리터럴 형태가 동일하다
// 단, 함수 리터럴은 함수 이름을 생략할수 있으나 함수 선언문은 이름을 생략 할 수 없다
// 표현식이 아닌 문이다
// 리터럴도 중의적인 코드 (둘이상의의미)

// * 함수 리터럴을 단독으로 사용 (함수 리터럴을 피연산자로 사용하지 않으는 경우 ) 함수 선언문
// * 함수 리터럴이 값으로 평가 되어야 하는 문맥 리터럴을 변수에 할당하거나 피연산자로 사용하는 것 함수 리터럴
// 함수선언문
function foo() {
    console.log("foo")
}
// 함수 선언문도 코드가 한줄씩 순차적으로 실행되는 시점인 런타임 이전에 자바스크립트 엔진에 의해 먼저 실행된다



// 함수를 피연산자로 사용하면 함수 선언문 아니라 함수 리터럴 표현식으로 해석된다
// () -> 연산자
(function bar() {
    console.log("bar")
}) // ReferenceError: bar is not defined
// 표현식이 아닌 문인 함수 선언문은 피연산자로 사용할수 없다
// 자바스크립트 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의 식별자를 암묵적으로 생성하고 거기에 함수 객체를 할당한다
// 함수는 함수 이름으로 호출 하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다



// -> 호이스팅 발생
// 익명 함수 함수 표현식
// 브라우저가 런타임에 동적으로 선언되는 함수

// 함수 표현식은

// 기명함수 표현식 , 익명 함수 표현식
// 변수에 할당되는 값이 함수 리터럴인 문이다
// 함수 표현식은 변수 선언문과 변수 할당문을 한번에 기술한 축약표현
// 변수선언은 런타임 이전에 실행되어 undefined 로 초기화
// 변수 할당문의 값은 할당문이 실행되는 시점 , 즉 런타임에 평가되므로 함수 표현식의 함수 리터럴도 할당문이 실행되는 시점에 평가되어 함수 객체가 된다
// * 함수 표현식으로 함수를 정의하면 함수 호이스팅이 발생하는 것이 아니라 변수 호이팅이 발생하는것