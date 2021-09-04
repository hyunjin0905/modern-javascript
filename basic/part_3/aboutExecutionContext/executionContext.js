// ECMAScript 소스코드를 4가지 타입으로 구분
// 4가지 타입의 소스코드는 실행 컨텍스트를 생성
// * 전역코드 - 전역 코드가 평가되면 전역 실행 컨텍스트가 생성된다
// * 함수코드 - 지역 스코프로 생성 지역변수 , 매개변수, arguments 객체를 관리
// * eval 코드 - strict mode 에서 자신만의 독자적인 스코프를 생성 이를 위해 컨텍스트 생성
// * 모듈 코드 - 독립적인 모둘 스코프 생성

/*
* 자바스크립트 엔진은 소스코드를 2개의과정
* 소스코드의 평가
* 소스코드의 실행
*
* */

// var x;
// 소스코드 평가 과정에서 변수 선언문 var x; 를 먼저 실행한다
// 변수 식별자는 x 는 실행 컨텍스트가 관리하는 스코프에 등록되고 undefined로 초기화 된다


// x = 1;
// 소스 코드 평가 과정이 끝나면 실행과정이 시작된다
// x = 1 만 실행된다. 이때 x 변수에 값을 할당하려면 먼저 x 변수가 선언된 변수인지 확인해야한다

// 이를 위해서 실행 컨텍스트가 관리하는 스코프에 x변수가 등록되어 있는지 확인한다
// x 변수가 선언된 변수라면 값을 할당하고 할당 결과를 실행 컨텍스트에 등록하여 관리한다


// 실행 컨텍스트의 역할
const x = 1;
const y = 2;

function foo(a) {
    const x = 10;
    const y = 10;
    console.log(a + x + y);
}
foo(100);
console.log(x + y);


// 1. 전역 코드의 평가
// 2. 전역 코드 실행
// 3. 함수 코드 평가
// 4. 함수 코드 실행

//* 다음과 같이 스코프, 식별자, 코드 실행 순서등의 관리가 필요하다
// 1. 선언에 의해 생성된 모든 식별자(변수, 함수, 클래스 등)을 스코프를 구분하여 등록하고 상태 변화(식별자에 바인딩 된 값의 변화)를 지속적으로 관리할 수 있어야한다.
// 2. 스코프는 중첩 관계에 의해 스코프 체인을 형성해야한다. 즉 스코프 체인을 통해 상위 스코프로 이동하여 식별자를 검색할 수 있어야 한다
// 3. 현재 실행중인 코드의 실행 순서를 변경 할수 있어야 하며 다시 되돌아갈 수도 있어야 한다


// 실행 컨텍스트는 소스코드를 실행하는 데 필요한 환경을 제공하고 코드의 실행 결과를 실제로 관리하는 영역이다
// 실행 컨텍스트는 식별자(변수, 함수, 클래스 등의 이름)등록하고 관리하는 스코프와 코드 실행 순서 관리를 구현한 내부 메커니즘으로, 모든 코드는 실행 컨텍스트를 통해 실행되고 관리된다.
// 식별자와 스코프는 실행 컨텍스트의 렉시컬 환경으로 관리하고 코드 실행 순서는 실행 컨텍스트 스택으로 관리한다



// 실행 컨텍스트 스택 : 코드의 실행 순서를 관리
// 실행 컨텍스트 스택의 최상위에 존재하는 실행 컨텍스트는 언제나 현재 실행 중인 코드의 실행 컨텍스트다
// 실행 컨텍스트 스택의 최상위에 존재하는 실행컨텍스트를 실행중인 실행 컨텍스트라 부른다

const x2 = 1; // 1. 전역실행컨텍스트에 등록
function foo2() { // 1. 전역실행컨텍스트에 등록  //4 bar 함수 종료되면 코드 제어권 foo2 함수로 팝하여 제거
    // 2. 내부 제어권이 생김
    // 2. 내부 foo2 실행컨텍스트 생성해서  실행컨텍스트 스택에 푸시한다
    const y = 2;  // y, bar emdfhr
    function bar() {
        //3. 중첩함수 bar 실행되면  foo 중단
        //3. 내부 제어권 bar 실행컨텍스트가 생성 실행컨텍스트 스택에 푸시
        const z = 3;
        console.log(x2 + y + z); // 3. 함수 호촐되면 실행컨텍스트 생성하고 씰행 컨텍스트 스택에 푸시함
    }
    bar(); //2. bar 호출
}
foo2();//2. 전역코드 실행
//5. 전역 코드로 복귀  제어권 전역코드로 이동


