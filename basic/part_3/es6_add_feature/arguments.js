// argumnets
// 화살표 함수는 함수 자체의 arguments 바인딩을 갖지 않는다
(function () {
    const foo = () => console.log(arguments)
    foo(3, 4)
}(1,2))
// const foo() => console.log(arguments);
// foo(1, 2)
