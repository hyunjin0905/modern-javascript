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

//1. 카운트 상태 는 increase 함수가 호출되기 전까지 변경되지 않고 유지 되어야한다
//2. 이를 위해 카운트 상태 (num변수값)는 increase 함수많이 변경할 수 있어야 한다
