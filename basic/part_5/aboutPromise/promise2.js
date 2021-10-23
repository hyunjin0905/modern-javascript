let todos;

// get 요청을 위한 바동기 함수
const get = url => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            //1. 서버의 응답을 상위 스ㅗ콮의 변수에 할당한다
            todos = JSON.parse(xhr.response)
        } else {
            console.error(`${xhr.status} ${status.statusText}`)
        }
    }
}
get("http://jsonplaceholder.typicode.com/posts/1");
console.log(todos); // undefined
// 응답 결과하가 할당되기 이전
// xhr.onload 이벤트 핸들러에서 서버의 응답을 상위스코프의 변수에 할당하면 처리 순서가 보장되지 않는다
// ! 그이유는
// 1. get 함수 호출
// 2. get 함수 실행 컨텍스트 생성
// 2-1. 실행컨텍스트 콜 스택에 푸시
// 3. 실행과정 xhr.onload 이벤트 핸들러 프로퍼티에 이벤트 핸들러 바인딩
// 4. get 종료 실행컨텍스트 콜 스택에서 팝
// 5. console.log 호출
// 5-1 console.log 실행 컨텍스트 생성 되어 스택에 푸시
// 6 서버로부터 응답 이때 xhr.onload 핸들러 프로퍼티 바인딩한 핸들러가 즉시 실행 되지 않음  태스크 큐에 저장되어 대기했다가
// 7. 콜스택 비면 이벤트 루푸에 의해 콜스택으로 푸시되어 실행
// 7-1 이벤트 핸들러의 평가
// 7-2 이벤트 핸들러의 실행컨텍스트 생성
// 7-3 콜스택 푸시
// 7-4 이벤트 핸들러 실행 과정

// 따라서 xhr.onload 이벤트 핸들러가 실행되는 시점에는 콜스택이 빈상태여야 하므로 console.log 는 이미 종료된 이후이다

// 이처럼
// 1. 비동기 함수는 비동기 처리 결과를 외부에 반환 할수 없다
// 2. 상위 스코프의 변수에 할당 할수도 없다
// 3. 비동기 처리 함수의 후속 처리는 내부에서 수행해야한다
// 4. 비동기 처리결과에 대한 후속처리를 콜백함수를 전달하는것이 일반적이다


// get 요청을 위한 바동기 함수
const getCallback = (url, successCallback, faulureCallback) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            // 서버의 응답을 콜백함수에 인수로 전달하면서 호출하여 응답에 대한 후속처리를 한다
            successCallback(JSON.parse(xhr.response))
        } else {
            faulureCallback(xhr.status)
        }
    }
}
getCallback("http://jsonplaceholder.typicode.com/posts/1", console.log, console.log);


//
const url2 = "http://jsonplaceholder.typicode.com"
const getCallbackHell = (url, callback) => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            // 서버의 응답을 콜백함수에 인수로 전달하면서 호출하여 응답에 대한 후속처리를 한다
            callback(JSON.parse(xhr.response))
        } else {
            console.error(`${xhr.status} ${status.statusText}`)
        }
    }
}
getCallbackHell(`${url2}/posts/1`,({userId}) => {
    getCallbackHell(`${url2}/users/${userId}`, userInfo => {
        console.log(userInfo);
    })
} )
// 콜백 헬 가독성 나쁘다
// 실수 유발


// 에러 처리의 한계
// 비동기 처리를 위한 콜백 패턴의 문제점중에서 심각한것은 에러처리가 곤란하다

try {
    setTimeout(() => {
        throw new Error("Error")
    }, 1000)
}catch (e) {
    console.error("캐치한 에러 ", e);
}