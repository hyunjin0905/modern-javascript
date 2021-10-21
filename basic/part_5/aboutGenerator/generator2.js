
// * 제너레이터의 일시 중지와 재개
// yield 키워드는 제너레이터 함수의 실행을 일시 중지시키거나 yield 키워드 뒤에 오는 표현식의 평가 결과를 제너레이터 함수 호출자에게 반환한다

function* getFunc1() {
    yield 1; // 1 호출되면 일시 정지 함수의 제어권이 호출자로 양도
    yield 2; // 2
    yield 3; // 3
    // 4
}

const generator = getFunc1()
console.log(generator.next()) // 1
console.log(generator.next()) // 2
console.log(generator.next()) // 3
console.log(generator.next()) // 4
// {value: yield 표현식 , done: 함수가 끝까지 실행되어있는지의 여부 }

//1. next 메서드 호출하면 첫번째 yield 표현식 까지 실행되고 일시 중지
// 이터레이터 리절트 객체 반환 ({ value, done })
// value 프로퍼티에서는  첫번째 yield 된 값 1이 할당된다
// done 프로퍼티에는 제너레이터 함수가 끝까지 실행되었는지를 나타내는 false가 할당됨

//2. ...
//3. ...
//4. 남은 yield 표현식이 없으므로 제너레이터 함수의 마지막까지 실행한다
// next 메서드는 이터레이터 리절트 객체를 반환 { value: undefined, done: true }


// * 이터레이터의 next 메서드와 달리 제너레이터 객체의 next 메서드에는 인수를 전달 가능

function* getFunc2() {
    // x 변수에는 아무것도 할당되지 않았다 x변수의 값은 next 메서드가 두번째 호출될때 결정된다
    const x = yield 1;
    // 두번째 next 메서드를 호출할 떄 전달한 인수 10은 첫번째 yield 표현식을 할당받는 x 변수에 할당된다
    // 즉 const x = yield 1; 은 두번째 next 메서드 호출 될때 완료된다
    // 두번째 next 메서드 호출 하면 두번째 yield 표현식까지 실행되고 일시 중지 된다
    // 이때 yield 된 값 x + 10 은 next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티에 할당된다
    const y = yield (x + 10);
    // next 메서드 호출할떄 전달한 인수 20은 두번째 yield 표현식을 할당받는 y 변수에 할당된다
    // 세번째 메서드에서  const y = yield (x + 10); 완료된다  이때 함수 끝까지 실행된다
    // 반환값 x + y next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티에 할당된다
    // 제너레이터에서는 값을 반환할 필요가 없고 return 은 종료의 의미로만 사용해야한다
    return x + y;
}

const generator2 = getFunc2(0);
// 처음 호출 하는 메서드는 인수를 전달하지 않는다
let res = generator2.next();
console.log(res);
// 인수로 전달한 10은 x 변수에 할당된다
res = generator2.next(10);
console.log(res); // {value: 20  done: false}
// 인수에 전달 한 20은 y 변수에 할당된다
res = generator2.next(20);
console.log(res); // {value: 30  done: true}