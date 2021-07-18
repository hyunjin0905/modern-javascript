<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<script>
    var var1 = 1;

    if (true) {
        var var2 = 2;
        if (true) {
            var var3 = 3;
        }
    }

    function foo() {
        var var4 = 4;
        function bar(){
            var var5 = 5;
        }
    }

    console.log(var1);
    console.log(var2);
    console.log(var3);
    //console.log(var4);
    //console.log(var5);
    /*
    * [ scope ]
    *  모든 식별자는 자신이 선언된 위치에 의해서 다른코드가 식별자 자신을 참조 할 수 있는 유효범위가 결정된다
    *  즉, 식별자가 유효한 범위
    * 자바스크립트 엔진이 식별자 사용할때 사용하는 규칙
    * 식별자를 찾는 규칙
    * */

    /*
    * [ 종류 ]
    * 지역 변수
    * - 함수의 몸체 이다
    * - 함수 호출이 끝나면 변수도 사라진다
    * 전역 변수
    * - 모든 지역에서 참조할수 있는 변수이다
    * */

    /*
    * [ 스코프 체인 ]
    * - 단방향 구조
    * - 계층 구조로 참조 한다
    * - 상위 스코프에서  하위스코프에서 자유롭게 참조가능 근데 상위스코프는 하위 스코프를 참조할수 없음
    * */

    /*
    * [ 렉시컬 환경 ]
    * 코드 어디서 실행되고 주변에 어떤 코드가 있는지 - 코드의 문맥은 렉시컬 환경에서 이뤄짐
    * [ 실행 컨테스트 ]
    * 실행 컨텍스트가 렉시컬 환경을 평가되고 실행함
    * */

    var x = "global";

    function func() {
        var x = "local";
        console.log(x);
    }

    func();
    console.log(x); // global
    // 자바스크립트 엔진도 x 변수에 무엇을 참조할지 고민을 한다 ㅋ -> 식별자 결정

    function a() {
        console.log("this is global area")
    }

    function b() {
        function a() {
            console.log("this is local area")
        }
        a();
    }
    b();

    var f1_x = 0;
    function f1() {
        var f1_x = 10;
        f2()
    }

    function f2() {
        console.log(f1_x);
    }
    f1();
    f2();
    /*
    * 함수를 어디서 호출했는지 에 따라 함수의 상위 스코프를 따르는게 아니라
    * 함수를 어디서 정의 했는지 에 따라 함수의 상위 스코플르 따른다
    * -> 함수의 상위 스크로는 함수 정으가 실행될때 정적으로 결정된다 함수 정의가 실행되어 생성된 함수 객체는 이렇게 결정된 상위 스코프를 기억한다
    * 함수가 호출될 떄마다 함수의 상위 스코프를 참조할 필요가 있기 때문이다
    * f2 가 어디서 호출됬는지 상괴ㅏ없이 언제나 자신이 기억하고있는 전역스코프를 상위스코프로 사용
    *
    * */


    console.log(window);
    console.log(globalThis);

    // 전역 변수 억제

    (function hi() {
        console.log("즉시실행함수")
    }());

    //네임 스페이스 객체  전역 변수로 쓰자
    var MYAPP = {};
    MYAPP.name = "cho";
    console.log(MYAPP.name);

    MYAPP.person = {
        name: "cho",
        address: "seoul"
    }
    console.log(MYAPP)

    // 모듈 패턴
    /*
    * 캡슐화 : 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶음
    * - 객체의 특정프로퍼티 ,메서드를 감출목적으로 사용 -> 정보 은닉
    * */

    var Count = (function () {
        // private
        var num = 0;

        // public
        return {
            increase() {
                return ++num;
            },
            decrease() {
                return --num;
            }
        }
    }());


    console.log(Count.num);
    console.log(Count.increase());
    console.log(Count.decrease());

    // es6 모듈 사용하면 전역변수를 사용할 수 없다 script 태그에 type="module" 추가
    // 구형브라우저에는 작동하지 않으므로 웹백  모듈 번들러를 사용하는것 이 일반적



    console.log(hi);
</script>
<script type="module">
    var hi = "type module test"
    console.log(var1);

</script>

</body>
</html>