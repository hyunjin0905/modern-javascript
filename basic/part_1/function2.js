
helloMember_named("조현진");
//helloMember_unamed("조현진"); //Uncaught ReferenceError: Cannot access 'helloMember_unamed' before initialization



function helloMember_named(name) {
    return `${name} + 님 하이요: 함수 선언식, 기명함수`
}

const helloMember_unamed = function (name) {
    return `${name} + 님 하이요: 함수 표현식, 익명함수`
}

helloMember_unamed("조현진");


// 기명 함수 함수 선언식
// 브라우저가 런타임 이전에 선언되는 함수
// -> 호이스팅 발생
// 익명 함수 함수 표현식
// 브라우저가 런타임에 동적으로 선언되는 함수