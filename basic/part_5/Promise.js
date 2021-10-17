// 비동기 처리를 위한 콜백의 단점

// get 요청을 위한 비동기 함수
const get = url => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url);
    xhr.send()
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.response))
        } else {
            console.error(`${xhr.status} ${xhr.statusText}`)
        }
    }
}
get('https://jsonplaceholder.typicode.com/posts/1')

