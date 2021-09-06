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


// 콜백 함수를 사용하는 고차 함수 map
// 콜백함수 constuctor이며 프로토타입 생성
[1,2,3].map(function (item) {
    return item * 2
});

// es6 는 사용 목적에 따라 세가지 종류로명확히 구분
//          constructor   prototype     super     argumnets
// 일반함수        o            o            x          o
// 메서드         x            x            o          o
// 화살표함수      x            x            x          x


// * 일반함수는 consturtor 이지만 es6 메서드와 화살표 함수는 non-constuctor 이다



// 메서드
// 일반적으로 메서드는 객체에 바인된 함수를 일컫는의미로 사용 됨
// es6 사양에서 메서드는 메서드 축약표현으로 정의된 함수만을 의미

const obj3 = {
    x: 1,
    // foo 메서드다
    foo() { return this.x; },
    // bar에 바인딩된 함수는 메서드가 아닌 일반함수다
    bar: function () {
        return this.x
    }
}


// es6 사양에서 정의한 메서드(이하 es6메서드)는 인스턴스를 생성할 수 없는 non-consturctor 다
//
//new obj3.foo(); // TypeError: obj3.foo is not a constructor
console.log(new obj3.bar()); // bar {}


console.log(obj3.foo.hasOwnProperty('prototype')) // false
console.log(obj3.bar.hasOwnProperty('prototype')) // true


// * 표준 빌드인 객체가 제공하는 프로토타입 메서드와 정적 메서드는 모두 non-constuctor 이다
console.log(String.prototype.toUpperCase.prototype);


//es6 메서드는 자신을 바인딩한 객체를 가리키는 내부슬롯 [[HomeObject]]를 갖는다
// super 참조는 내부 슬롯 [[HomeObject]]를 사용해서 슈퍼 클래스의 메서드를 참조 내부슬롯[[HomeObject]]를 갖는
// ES6 메서드는 super 키워드를 사용할수 있다


const base = {
    name: "lucy",
    sayHi() {
        return `hi ${this.name}`
    }
}


const derived = {
    __proto__: base,
    // sayHi 는 es6 메서드 es6 메서드는 [[HomeObject]] 갖고있다
    // sayHi [[HomeObject]]는 derived.prototype 을 가리키도
    // super는 sayHi의 [[HomeObject]]의 프로토타입인 base.prototype을 가리킨다
    sayHi() {
        return `${super.sayHi()}. how are you doing?`
    }
}

console.log(derived.sayHi()); // hi! Lee. how are you doing?
