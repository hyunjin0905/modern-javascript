// 매개변수 기본값
// 함수 호출할떄 매개변수의 개수만큼 인수를 전달하는 것이 바람직하지만 그렇지 않은 경우에도 에러가 발생하지 않는다
// 자바스크립트 엔진이 매개변수의 개수와 인수의 개수를 체크 하지 않기 떄문이다
// 인수가 전달되지 않는 매개변수의 값은 undefined 다 이를 방치하면 다음 예제와 같이 의도치 않은 결과가 나올수 있다
function sum(x, y) {
    return x + y;
}

console.log(sum(1)) // NaN
// 다음 예제와 같이 매개변수에 인수가 전달되었는지 확인하여 ㅇ니수가 전달되지 않는 경우 매개변수에 기본값을 할당할 필요가 있다 즉, 방어코드가 필요하다


function sum2(x = 0, y = 0) { // * es6 에 도입된 매개변수 기본값
    // 또는 x = x | 0;
    //     y = y | 0;
    // 인수가 전달되지 않아 매개변수의 값이 undefined인 경우 기본값을 할당한다
    return x + y;
}


console.log(sum2(1));

function logName(name = "lucy") {
    console.log(name);
}

logName(); // lucy
logName(undefined); // lucy
logName(null) // null


// 기본값 지정 할 수 없다
//function f(...rest = []) {
  //  Uncaught SyntaxError: Rest parameter may not have a default initializer
//}


// 매개변수 기본값은 함수 정의시 선언한 매개변수 개수를 나타내는 함수 객체의 length 프로퍼티와 arguments 객체에 아무런 영향을 주지 않는다
function sum3(x, y = 0) {
    console.log(arguments)
}

console.log(sum3.length);
sum3(1);
sum3(1, 2);



