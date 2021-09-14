// this 바인딩은 함수의 호출 방식
// 함수를 정의할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고 함수를 호출할때
// 함수가 어떻게 호출되었는지 따라 this에 바인딩할 객체가 동적으로 결정된다
// 주의! 일반함수로서 호출되는 콜백함수의 경우
// 고차 함수의 인수로 전달되어 고차 함수 내부에서 호출되는 콜백함수도 중첩함수라고 할 수 있다
class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        // add메서드는 인수로 전달된 배열 arr을 순회하며 배열의 모든 요소에 prefix를 추가한다
        // 1.
        return arr.map(function (item) {
            return this.prefix + item // 2.
            // TypeError: Cannot read property 'prefix' of undefinex
        })
    }
}
const prefixer = new Prefixer("-webkit-");
console.log(prefixer.add(['transition','user-selct']))

// 해결 1
add(arr) {

    // this를 일단 회피시킨후에 콜백함수내부에서 사용한다
    const _this = this;
    return arr.map(function (item) {
        return _this.prefix + item // 2.
    })
}


// 해결 2
// Array.prototype.map 두번째 인수로 add 메서드를 호출한 prefixer객체를 가리키는 this를 전달한다
// es5 도입된  Array.prototype.map 콜백함수 내부의 this를 해결학이위해 객체 전달 할수 있음
add(arr) {
    return arr.map(function (item) {
        return _this.prefix + item // 2.
    }, this)
}

// 해결 3
// Function.prototype.bind 메서드를 사용하여 add 메서드 를 호출 한prefixer객체를 가리키는 this를 바인딩 한다
add(arr) {
    return arr.map(function (item) {
        return _this.prefix + item // 2.
    }.bind(this))
}


// 화살표 함수 사용하기
// 함수자체의 this 바인딩 가지 않음 따라서 화살표 함수 내부에서 this를 참조하면 상위 스코프의 this를 그대로 참조한다 이를 lexical local
add(arr) {
    return arr.map(item => this.prefix + item )
}


// 화살표 함수를 제외함 모든 함수에는 this 바인딩이 반드시 존재 한다
// 화살표 함수는 상위 스코프의 this를 참조 한다
() => this.x

// 익명 함수에 상위 스코프의 this를 주입한다 위 화살표 함수와 동일하게 동작한다
(function () { return this.x; }).bind(this)