var foo = function (){}

foo();
new foo();
var obj = { foo: foo };
obj.foo();

// es6 이전의 함수는 사용 목적에 따라 명확히 구분되지 않음
// es6 이전의 모든 함수는 일반함수로서 호출 할수 있는 것은 물론 생성자 함수로서 호출할 수 있다
// 이전 의 모든함수는 callable 이면서 constuructor 이다




// 프로퍼티 f에 바인딩된 함수는 callable 이며 constructor 이다
var obj2 = {
    x: 10,
    f: function () {return this.x;}
}
// 프로퍼티 f의 바인딩 된 함수를 메서드로서 호출
console.log(obj2.f());

// 프로퍼티 fdml 바인딩된 함수를 일반 함수로서 호출
var bar = obj2.f;
console.log(bar());

// 프로퍼티 f의 바인딩된 함수를 생성자 함수로서 호출
console.log(new obj2.f());
// 객체에 바인딩된 함수를 생성자 함수로 호출 하는 경우 흔치 않음 문법상 가능하다는건 문제가 있다
// 성능 면에서 문제
// 객체에 바인된 함수가 constuctor 라는 것은
// 객체에 바인딘 된 함수가 prototype 프로퍼티 가지며, prototype 객체도 생성한다는것을 의미
// 함수에 전달되어 보조함수의 역할을 수행하는 콜백 함수도 마찬가지
// 콜백함수도 constructor 불필요한 prototype 객체 생성
// -> es6 이전 모든 함수는 사용 목적에 따라 명확한 구분이 없으므로 호출 방식에 특별한 제약이 없고
//    생성자 함수로 호출되지 않아도 프로토타입 객체를 생성한다


// es6 는 사용 목적에 따라 세가지 종류로명확히 구분
//          constructor   prototype     super     argumnets
// 일반함수        o            o            x          o
// 메서드         x            x            o          o
// 화살표함수      x            x            x          x


// * 일반함수는 consturtor 이지만 es6 메서드와 화살표 함수는 non-constuctor 이다






