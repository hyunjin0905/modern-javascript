// strict mode
function f() {
    'use strict'
 //   x = 10;
}
f()
//console.log(x);
// 암묵적 전역 (implict global)

// es5 엄격모드 도입
// ESLint 도구 도입

// stict mode 적용
// * 전역으로 쓰는건 피하기 'use strict'

// <sciprt>
// 'use strict'
// x = 1
// console.log(x)
// </sciprt>
// <sciprt>
// const y = 1;
// </sciprt>

// strict 모드 스크립트와 none-stict 모드 혼용한 하는것은 오류 발생
// 외부 서드 파티 라비르러리 가 none-strict mode 인 경우가 있기 때문에 전역 x
// 즉시실행함수로 감싸서 쓰기

// * 함수단위로 strict mode 적용 피하기
// stict 모드가 적용된 함수가 참조할 함수의 외부의 컨텍스트에 strict mode를 적용하지 않는다면 이또한 문제 발생
// (function () {
//    var a = 10;
//    function f2() {
//        'use Strict';
//        a = 20;
//    }
//    f2();
// }());

// * 발생시키는 에러
// 암묵적 전역
// function foo() {
//     'use strict'
//      x = 10;
//     console.log(x)
// }
// foo()

// 삭제
// (function () {
//     'use strict';
//     var x = 1;
//     delete x;
//     function foo(a) {
//         delete a;
//     }
//     delete foo;
// })

// 매개 변수 이름의 중복

// with 문의 사용

// ** stict mode 적용 변화
// 일반함수의 this

// (function () {
//     'use strict';
//     function f1() {
//         console.log(this)
//     }
//     f1()
//     function Foo() {
//         console.log(this)
//     }
//     new Foo();
//
// }())


// argunments 객체
(function (a) {
   'use strict'
   // 매개변수에 전달된 인수를 재할당하여 변경
    a = 2;
   console.log(arguments);
}())