//
// 일급객체
// * 무명의 리터럴로 생성 즉 런타임에 생성이 가능
// * 변수나 자료구조(객체, 배열 등)에 저장할 수 있다
// * 함수의 매개변수에 전달할 수 있다
// * 함수의 매개변수에 전달할 수 있다
// * 함수의 반환값으로 사용할 수 있다


// 1. 함수는 무명의 리터럴로 생성할 수 있다
// 2. 함수는 변수에 저장 할수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
const increase = function (num) {
    return ++num;
}

const decrease = function (num) {
    return --num;
}

// 2. 함수는 객체에 저장할 수 있다
const predicates = { increase, decrease };
console.log(predicates);

// 3. 함수의 매개변수에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(predicate) {
    let num = 0;
    return function () {
        num = predicate(num);
        return num;
    };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(predicates.increase);
console.log(increaser());
console.log(increaser());

// 3. 함수는 매개변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser());
console.log(decreaser());




// 1.함수는 무명의 리터럴로 만들수 있다
function(){
    console.log("// 1.함수는 무명의 리터럴로 만들수 있다 ")
}
// 2. 함수를 변수에 담을 수 있다
const sayHello = function () {
    console.log("// 2. 함수를 변수에 담을 수 있다 ")
}
// 3. 함수는 객체에 담을수 있다
const funcitonObject = { sayHello , function(){ console.log("1")}}
console.log(funcitonObject)

// * 객체의 프로퍼티
function square(number) {
    return number * number;
}
console.dir(square)
console.log(Object.getOwnPropertyDescriptors(square));
// __proto__ 는 square 함수의 프로퍼티가 아니다
consoloe.log(Object.getOwnPropertyDescriptor(square, '__proto__'))
