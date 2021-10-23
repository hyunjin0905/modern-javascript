// 비동기 처리를 위한 콜백 패턴의 단점
// 콜백 헬
const get = url => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.response))
        } else {
            console.error(`${xhr.status} ${status.statusText}`)
        }
    }
}
get("http://jsonplaceholder.typicode.com/posts/1");
// get 함수는 비동기 함수다
// 비동기 함수를 호출하면 함수 내부의 비동기로 동작하는 코드가 완료되지 않았다 해도 기다리지 않고 즉시 종료된다
// 즉 비동기 함수 내부의 비동기로 동작하는 코드는 비동기 함수가 종료된 이후에 완료된다
// 따라서 비동기 함수 내부의 비동기 로 동작하는 코드에서 처리하는 결과를 외부로 반환하거나
// 상위 스코프의 변수에 할당하면 기대한 대로 동작하지 않는다

let g = 0;
setTimeout(() => {
   g = 100;
}, 0)
console.log(g)




// const Promise = new Promise((resolve,rejected )=> {
//     if (true) resolve("result")
//     else {
//         rejected("failur reaseon")
//     }
// })

const promiseGet = url => {
    return new Promise((resolve, rejected) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url);
        xhr.send()
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.response))
            } else {
                resject(new Error(xhr.status))
            }
        }
    })
}

promiseGet('https://jsonplaceholder.typicode.com/posts/1')

// 프로미스의 상태정보                  의미                          상태 변경 조건
// pending            비동기 처리가 아직 수행되지 않은 상태       프로미스가 생성된 직후의 기본 상태
// fulfilled           비동기 처리가 수행된 상태(성공)           resolve 함수 호출
// rejected           비동기 처리가 수행된 상태(실패)           reject 함수 호출
// 생성된 직후의 프로미스는 기본적으로 pending 상태


