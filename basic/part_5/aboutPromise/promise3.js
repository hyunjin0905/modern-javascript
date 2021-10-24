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

// fullfilled된 프로미스
const fullfilled = new Promise(resolve => resolve(1));
// rejected된 프로미스
const rejected = new Promise((_, rejected) => rejected(new Error("error occurred")))

// 프로미스는 비동기처리 상태와 처리 결과를 관리하는 객체다 