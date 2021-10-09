// 클로저 활용
// 클로저는 상태를 안전하게 변경하고 유지하기 위해 사용한다
// 상태가 의도치 않게 변경되지 않도록 상태를 안전하게 은닉하고 특정 함수에게만 상태 변경을 허용 하기 위해 사용한다

let num = 0
const increase = function () {
    return ++num;
}
console.log(increase())
console.log(increase())
console.log(increase())
console.log(num)// 전역 변수 값이 변경되면 이는 오류로 여김
//1. 카운트 상태 는 increase 함수가 호출되기 전까지 변경되지 않고 유지 되어야한다
//2. 이를 위해 카운트 상태 (num변수값)는 increase 함수많이 변경할 수 있어야 한다


const increse2 = function () {
    let num = 0 // 계속 초기화
    return ++num;
}
console.log(increse2())
console.log(increse2())
console.log(increse2())


// 이전상태를 유지 할수있게 클로저 로 만들기
const increase3 = (function () {
    let num = 0;

    return function () {
        return ++num;
    }
}());
console.log(increase3())
console.log(increase3())
console.log(increase3())
// 즉시 실행 함수는 호출된 이후 소멸되지만 즉시 실행함수가 반환한 클로저는 increase 변수에 할당되어 호출된다
// 이때 즉시 실행함수가 반환한 클로저는 자신이 정의된 위치에 의해 결정된 상위 스코프인 즉시 실행함수의 렉시컬 환경을 기억하고 있다
// 따라서 즉시 실행 함수가 반환한 클로저는 카운트 상태를 유지하기위한 자유 변수를 num 언제 어디서 호출하든지 참조하고 변경할수 있음




const Counter = (function () {
   let num = 0;
   function Counter() {
       this.num = 0;
   }
   Counter.prototype.increase = function () { // 클로저
       return ++num;
   }
   Counter.prototype.decrese = function () { // 클로저
       return num > 0 ? --num : 0;
   }
   return Counter;
}())


// 생성자 함수는 프로토타입을 통해 increase, decrease 메서드를 상속받는 인스턴스 생성된다
// 메서드는 모두 자신의 함수 정의가 평가 되어 함수 객체가 될때 실행중인 실행 컨텍스트인 즉시 실행함수 실행컨텍스트의 렉시컬 환경을 기억하는 클로저다


// 함수형 프로프래밍 클로저
// 함수를 인수로 전달받고 함수를 반환하는 고차 함수
function makeCounter() {
    let counter = 0;

    // 클로저 반환
    return function () {
        counter = predicate(counter);
        return counter;
    }
}
// 보조함수
function increase(n) {
    return ++n;
}

function decrease(n) {
    return --n;
}

const incr = makeCounter(increase)
const decr = makeCounter(decrease)

console.log(incr());
console.log(incr());
