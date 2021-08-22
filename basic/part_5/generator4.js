// 비동기 처리
// 제너레이터 함수는 함수호출자와 함수의 상태를 주고 받을 수 있다
// 이 러한 특성을 활용하면 프로미스를 사용한 비동기 처리를 동기 처리처럼 구현할수 있다
// 다시 말해 프로미스의 후속처리 메서드 then/catch/finally 없이 비동기 처리 결과를 반환하도록 구현할 수 있따

//
// const fetch = require("node-fetch");

// 제너레이터 실행기
const async = generatorFunc => {
    const generator = generatorFunc(); // 2

    const onResolved = arg => {
        const result = generator.next(arg) // 5

        return result.done
            ? result.value // 9
            : result.value.then(res => onResolved(res)); 7
    };

    return onResolved; //3
};

(async(function *(fetchTodo) { // 1
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const response = yield fetch(url) // 6
    const todo = yield response.json() // 8
    console.log(todo);

})());
