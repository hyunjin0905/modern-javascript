// Rest
// Rest 파라미터(나머지 매개변수)는 매개변수 이름 앞에 세개의 점... 을 붙여서 정의한 매개변수를 의마한다
// Rest 파라미터는 함수에 전달된 인수들의 목록을 배열로 전달받는다

function foo(...rest) {
    // 매개변수 rest는 인수들의 목록을 배열로 전달받는 Rest 파라미터다
    console.log(rest); // [1, 2, 3, 4, 5 ]
}

foo(1,2,3,4,5);


// 함수에 전달된 인수들은 매개변수와 Rest 파라미터에 순차적으로 할당된다

function foo2(param, ...rest) {
    console.log(param);
    console.log(rest);
}
foo2(1, 2, 3, 4, 5);

function bar(param1, param2, ...rest) {
    console.log(param1);
    console.log(param2);
    console.log(rest);
}
bar(1, 2, 3, 4, 5)
// ...rest 는 단 하나만 선언 가능하며 마지막에 위치해야하ㅓㄴ다
// rest 파라미터 함수 정의시 선언한 매개변수 개수를 나타내느 함수 객체의 lentgth 프로퍼티 영향을 주지 않는다
console.log(foo2.length);


// arguments 객체
// - 함수 호출시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사 배열 객체이며 함수 내부에서 지역변수처럼 사용가능

function sum() {
    console.log(arguments)
}

sum(1,2)

// 하지만 배열 아니고 유사배열 객체라서
// 배열 메서드 사용하려면
// Function.prototype.call()
// Function.prototype.apply()
// 메서드 사용해 arguments 객체를 배열로 변환해야 하는 번거로움이 있다

function sum() {
    // 유사 배열 객체인 arguments 객체를 배열로 변환한다
    var array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
        return pre + cur;
    }, 0)
}
console.log(sum(1,2,3,4))


// es6 에서는 rest 파라미터를 사용하여 가변인자 함수의 인수 목록을 배열로 직접 전달 받을 수 있다
// 이를 통해 유사 배열 객체인 arguments 객체를 배열로 변환하는 번거로움을 피할 수 있다

function sum(...args) {
    // Rest 파라미터 args에는 배열 [1, 2, 3, 4, 5]가 할당된다.
    return args.reduce((pre, cur) => pre + cur, 0)
}
// but 화살표 함수 arguments 갖지 않는다



// 매개 변수 기본값



