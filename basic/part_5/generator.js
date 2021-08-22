// * generator
// 코드 블록의 실행 일시 중지했다가 필요한 시점에 재개할 수 있는 특수한 함수
// 1. 함수 호출자에게 할수 실행의 제어권을 양도 할수 있다
// 2. 함수 호출자와 함수의 상태를 주고 받을 수 있다
// 3. 제너레이터 함수 호출하면 제너레이터 객체를 반환한다

// 키워드 function*
// 제너레이터 함수 선언문
function* genDecFunc() {
    yield 1;
}

// 표현식
const getDeFunc = function* () {
    yield 1;
}

// 제너레이터 메서드
const obj = {
    * genObjMethod() {
        yield 1;
    }
}

// 제너레이터 클래스 메서드
class MyClass {
    * genClsMethod() {
        yield 1;
    }
}
// 화살표 함수로 정의 할수 없다
// new 연산자와 함께 생성 함수로 호출 할수 없다
