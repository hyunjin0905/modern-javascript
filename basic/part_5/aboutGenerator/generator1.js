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

// 제너레이터 함수를 호출하면 일반 함수처럼 함수 코드 블록을 실행 하는 것이 아니라 제너레이터 객체를 생성해 반환한다.
// 제너레이터 함수가 반환한 제너레이터 객체는 이터러블 이면서 동시에 이터레이터다


function* getFunc() {
    yield 1;
    yield 2;
    yield 3;
}
const generator1 = getFunc();
console.log(generator)
// 제너레이터 객체는 이터러블이면서 동시에 이터레이터다
// 이터러블은 Symbol.iterator 메서드를 직접 구현하거나 프로토타입 체인을 통해 상속받은 객체다
console.log(Symbol.iterator in generator);

// 이터레이터는 next 메서드를 갖는다
console.log('next' in generator);

// 제너레이터는 next 객체를 갖는 이터레이터 지만 이터레이터에 없는 return, throw 메서드를 갖는다
// 제너레이터 객체의 세개의 메서드를 호출하면 다음과 같이 동작한다


function* getFunc2() {
    try {
        yield 1;
        yield 2;
        yield 3;
    } catch (e) {
        console.error(e)

    }

}
const gen = getFunc2();
console.log(gen.next());
// 1. next 메서드 호출하면 제너레이터 함수의 yield 표현식까지 코드 블록 실행하고
// yield 된 값을 value 프로퍼티 값으로 false를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체 반환
console.log(gen.return('End'));
// 2. return 메서드 호출하면
// 인수로 전달 받은 값을 value 프로퍼티 값으로 , true를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체를 반환
console.log(gen.throw("Error throw"));
// 3. throw 메서드를 호출하면 인수로 전달받은 에러를 발생시키고
// undefiened value 프로퍼티 값으로 true 를 done 프로퍼티 값으로 갖는 이터레이터 리절트 객체를 반환한다

