// 함수 실행 컨텍스트는 함수가 호출하면 함수코드가 평가되어 생성된다
// 자바스크립트 엔진은 단하나의 실행 컨텍스트 스택을 갖는다
// 자바스크립트 엔진은 한번에 하나의 태스트만 실행할 수 있는 싱글 스레드 방식으로 동작한다
// 싱글 스레드 방식은 한번에 하나의 테스크만 실행할수 있기때문에 처리에 시간이 걸리는 태스크를 실행하는 경우 블로킹이 발생한다
function sleep (func, delay) {
    console.log(Date.now());
    const delayUntil = Date.now() + delay;
    while (Date.now() < delayUntil);
    func();
}
function foo() {
    console.log("foo")
}
function bar() {
    console.log("bar")
}
setTimeout(foo, 0)
bar();