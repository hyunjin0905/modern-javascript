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

var x;
// * 소스코드 평가 과정에서 변수 선언문 var x; 를 먼저 실행한다
// 변수 식별자는 x 는 실행 컨텍스트가 관리하는 스코프에 등록되고 undefined로 초기화 된다


x = 1;
// * 소스 코드 평가 과정이 끝나면 실행과정이 시작된다
// x = 1 만 실행된다. 이때 x 변수에 값을 할당하려면 먼저 x 변수가 선언된 변수인지 확인해야한다

// * 이를 위해서 실행 컨텍스트가 관리하는 스코프에 x변수가 등록되어 있는지 확인한다
// x 변수가 선언된 변수라면 값을 할당하고 할당 결과를 실행 컨텍스트에 등록하여 관리한다
