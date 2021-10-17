
console.log(a);
var a

console.log(func())
function func() {
    console.log("hi");
}
/*
* 변수 선언의 실행시점과 변수 호이스팅
* 변수 선언이 소스코드가 한줄씩 순차적으로 실행되는 시점, 즉 런타임이 아니라 그 이전 단게에서 먼저 실행되기 때문 (호이스팅 이란 이름이 생긴 이유)
* */

var score;
score = 80;

/*
* 변수 선언은 소스코드가 순차적으로 실행되는 시점인 런타임 이전에 먼저 실행되지만 값의 할당은 소스코드가 순차적으로 실행되는 시점인 런타임에 실행된다
* */


var test = 1;

function test_func() {
    let letA = 0;
    var varA = 1;
    for (let letA = 0; letA < 3; letA++) {
        console.log("for letA", letA);
        console.log("local varA", varA);
    }
    console.log("local varA" ,varA);
    console.log("block letA", letA);
}
test_func();

/*
* let - block 레벨 스코프
* 변수 호이스팅이 발생하지 않는 것처럼 동작한다
* 선언단계 , 초기화 단계 분리되어 진행
* let 키워드로 선언한 전역변수는 전역객체의 프로퍼티가 아님
* 보이지 않는 개념적인 블록
* */
// console.log(foo);
let foo = "foo";

/*
* const - 상수만을 위해 사용하지는 않음
* 선언한 변수는 반드시과 선언과 동시에 초기화 해주기
* 블록 레벨 스코프
* 원시 값을 할당한 경우 변수값 변경 불가능
* 호이스팅이 발생하지 않는 것처럼 동작한다
* 재할당 금지
* immutable value
* 객체를 할당할 경우 값 변경 가능
* 불변을 의미하지 않음
* 객체가 변경되더라도 변수에 할당된 참조 값은 변경 되지 않음
* */

const TAX_RATE = 0.1;
let preTaxPrice = 100;
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

console.log(afterTaxPrice);
const person = {
    name: "lee"
};

person.name = "kim"
console.log(person);


var c = {'id': 1};
var d = c;
d.id = 2;
console.log(c.id);  // 2
