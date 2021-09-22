// * 배열 고차 함수
// 고차 함수는 함수를 인수로 전달받거나 함수를 반환하는 함수를 말한다 외부상태의 변경이나 가변 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에 기반 두고있다
// 함수형 프로그래밍은 로직 내에 존재하는 조건문과 반복문제거하여 복잡성을 해결하고
// 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임이다

// * Array.prototype.sort()
// 배열의 요소를 정렬 , 원본배열을 직접 변경하여 정렬된 배열을 반환 기본적으로 오름차순
console.log("Array.prototype.sort() ====================================")
const fruit = ["Banna", "Apple", "kiwi"];
fruit.sort();
console.log("fruit 원본배열을 직접 변경", fruit);
console.log("fruit sort => ", fruit);

// 한글 오름차순 가능
const kofruit = ["파인애플", "사과", "키위"];
kofruit.sort();
console.log("kofruit 원본배열을 직접 변경", kofruit);
console.log("kofruit sort => ", kofruit);

// 내림차순
kofruit.reverse() // 원본배열 직접변경
console.log("kofruit reverse => ", kofruit);

// 주의!
const points = [40, 100, 1, 5, 2, 25, 10];
points.sort();
console.log(points);
// sort 메서드는 기본정렬 순서는 유니코드 코드 포인트 의 순서를 따른다
// 배열의 요소가 숫자 타입이라 할지라도 배열의 요소를 일시적으로 문자열로 변환한 한 후 유니 코드 포인트 순서를 기준으로 정렬한다
// 예 [10, 1].sort -> [10, 1]  10 의 유니코드 코드 포인트는 1 보다 앞서므로 먼저 정렬된다

// 따라서 숫자 요소를 정렬할 떄는 sort 메서드는 정렬 순서를 정의하는 비교 함수를 인수로 전달해야한다
// 비교함수는 양수나 또는 음수 0 을 반환해야한다
// 비교 함수의 반환값이 0 보다 작으면 비교함수의 첫번째 인수를 우선하여 정렬하고 0이면 정렬하지 않으며 0 보다 크면 두번쨰 인수를 우선하여 정렬한다
points.sort((a, b) => {
    return a - b
})
console.log("points", points)

// 최소, 최대
console.log(points[points.length - 1], points[0]);

// 객체를 요소로 갖는  배열 정렬
const todos = [
    { id: 1, content: "HTML", complted: true },
    { id: 2, content: "CSS", complted: true },
    { id: 3, content: "Javascript", complted: false },
];
function compare(key) {
    return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0))
}
todos.sort(compare('id'));
console.log(todos);
// - sort 메서드는 quicksort 알고리즘을 사용했었다 동일한 값의 요소가 중복되어 있을때 초기 순서와 변경 될 수 있는 불안정한 정렬 알고리즘으로 알려져 있다
// es10 timesort 알고리즘을 사용하도록 바뀌었다



// * Array.prototype.forEach()
// 배경
console.log("Array.prototype.forEach() ====================================")
const numbers = [1, 2, 3];
const pows = [];

for (var i = 0; i < numbers.length; i++) {
    pows[pows.length] = numbers[i] ** 2;
}

console.log(pows);

// for문을 대체 할수 있는 고차함수도 forEach 메서드는 자신의 내부에서 반복문을 실행한다
// 즉 forEach메서드는 반복문을 추상화한 고차 함수로서 내부에서 반복문을 통해 자신을 호출한 배열을 순회하면서 수행해야할 처리를 콜백함수로 전달 받아 반복 호출한다
numbers.forEach((item, index) => {
     pows[pows.length] = numbers[index] ** 3;
})
console.log(pows);

// forEach 메서드는 콜백 함수를 호출하면서 3개 (요소값, 인덱스 , this)의 인수를 전달한다
[1, 2, 3].forEach((item, index, arr) => {
    console.log(`요소값 : ${item},인덱스 : ${index}, this : ${JSON.stringify(arr)}`)
})

// forEach 메서드는 원본배열 (forEach를 메서드를 호출한 배열 , 즉 this)를 변경하지 않는다 하지만 콜백함수를 통해 원본배열을 변경할 수는 있다
const number2 = [1,2,3]
number2.forEach((item, index, arr) => {
    arr[index] = item ** 2;
})
console.log(numbers);

// forEach 메서드의 반환값은 언제나 undefined
const forEachResult = [1, 2, 3].forEach(console.log);
console.log(forEachResult);

// forEach메서드의 두번째 인수로 forEach 메서드의 콜백함수 내부에서 this로 사용할 객체를 전달할 수 있다.
class Numbers {
    numberArray = [];
    multiply(arr) {
        arr.forEach(function (item) {
            this.numberArray.push(item * item)
        }, this)
    }
}
const numbersClass = new Numbers();
numbersClass.multiply([1, 2, 3])
console.log(numbersClass.numberArray)

// 더 나은 방법 es6의 화살표 함수를 사용하는 것 화살표 함수는 함수 자체의 this바인딩을 갖지 않는다
// 따라서 화살표 함수 내부에서 this를 참조하면 상위스코프 즉 , multiply 메서드 내부의 this를 그대로 참조한다
class NumbersArrow {
    numberArray = [];
    multiply(arr) {
        arr.forEach((item) =>  {
            this.numberArray.push(item * item)
        })
    }
}
const numbersClass2 = new NumbersArrow();
numbersClass2.multiply([1, 2, 3])
console.log(numbersClass2.numberArray)

// forEach 메서드의 동작을 이해하기 위해 폴리필 살펴보기
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
        if (typeof callback !=='function' ) {
            throw new TypeError(callback + `is not a function`);
        }

        // this로 사용할 두번째 인수를 전달받지 못하면 전역 객체를 this 로 사용한다
        thisArg = thisArg || window;

        // for 문으로 배열을 순회하면서 콜백 함수를 호출한다
        for (var i = 0; i < this.length; i ++) {
            // call 메서드를 통해 thisArg를 전달하면서 콜백함수를 호출한다
            // 이때 콜백함수의 인수로 배열 요소, 인덱스, 배열 자신을 전달한다
            callback.call(thisArg, this[i], i, this)
        }
    }
}
// continue, break x

// 희소 배열의 경우 존재 하지 않는 요소는 순회대상에서 제외된다
const sparseArr = [1, ,3];
sparseArr.forEach(v => console.log(v));


// * Array.prototype.map()
// map 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백함수를 반복 호출한다
// 그리고 콜백함수의 반환값들로 구성된 새로운 배열을 반환한다
// 원본 배열 변경되지 않는다
console.log("Array.prototype.map() ====================================")
const mapNumbers = [1, 2, 3];
const roots = mapNumbers.map(item => Math.sqrt(item))
// const roots = mapNumbers.map(Math.sqrt) 와 같다
// 원본배열
console.log(mapNumbers)
// 새로운 배열
console.log(roots)
// map 메서드가 생성하여 반환하는 새로운 배열의 length 프로퍼티값은 map 메서드를 호출한 배열의 length 프로퍼티 값과 반드시 일치한다
// 즉, map 메서드를 호출한 배열과 map 메서드가 생성하여 반환한 배열은 1:1 매핑한다

const mapData = [1, 2, 3].map((item, index, arr) => {
    console.log(`요소값 : ${item},인덱스 : ${index}, this : ${JSON.stringify(arr)}`)
    return item
})
console.log("mapData", mapData)

class Prefixer {
    constructor(prefix) {
        this.prefix = prefix
    }
    add(arr) {
        return arr.map(function (item) {
            // 외부에서 this를 전달하지 않으면 this는 undefiend 를 가리킨다
            return this.prefix + item;
        }, this); // map 메서드의 콜백 함수 내부에서 this로 사용할 객체를 전달
    }
}
const priefixer = new Prefixer('-webkit');
console.log(priefixer.add[('transition', 'user-select')])


// * Array.prototype.filter()
// filter 메서드는 자신을 호출한 배열의 모든 요소를 순회하면서 인수로 전달받은 콜백 함수를 반복 호출한다
// 그리고 콜백함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다
// 원본 배열 변경되지 않는다
console.log("Array.prototype.filter() ====================================")
const number = [1, 2, 3, 4, 5];
const odds = number.filter(item => item % 2);
console.log(odds)

const filterData = [1, 2, 3].filter((item, index, arr) => {
    console.log(`요소값 : ${item},인덱스 : ${index}, this : ${JSON.stringify(arr)}`)
    return item % 2;
    // 1 true
    // 0 false
    // 1 true
})
console.log(filterData) // [1, 3]

class Users {
    constructor() {
        this.users = [
            {id: 1, name: "hyunjin"},
            {id: 2, name: "lucy"}
        ]
    }
    // 요소추출
    findById(id) {
        return this.users.filter(user => user.id === id)
    }

    // 요소제거
    remove(id) {
        this.users = this.users.filter(user => {
            console.log(user.id !== id)
            user.id !== id
        });
    }

}

const users = new Users();
let user = users.findById(1);
console.log(user)
users.remove(1);
user = users.findById(1);
console.log(user)
// filter메서드를 사용해 특정 요소를 제거할 경우 특정 요소가 중볻되어 있다며 중복된 요소가 모두 제거된다
// 하나만 제거하려면 indexOf를 통해 특정요소의 인덱스를 취득한 후에 spilce 메서드 사용하기



// * Array.prototype.reduce()
console.log("Array.prototype.reduce() ====================================")
const sum = [1, 2, 3, 4].reduce((accumulator, currentValue, index, array) => accumlator + currentValue, 0)
console.log(sum)
// * Array.prototype.some()
// * Array.prototype.every()
// * Array.prototype.find()
// * Array.prototype.findIndex()
// * Array.prototype.flatMap()