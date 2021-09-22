// * 배열 메서드
// 배열에는 원본배열(메서드를 호출한 배열, 즉 배열 메서드의 구현체 내부에서 this가 가리키는 객체)을 직접 변경하는 메서드와
// 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드가 있다
const arr = [1];
// push메서드는 원본배열을 직접 변경한다
arr.push(2);
console.log(arr);

// concat 메서드는 원본배열 arr을 직접 변경하지 않고 새로운 배열을 생성하여 반횐한다
const result = arr.concat(3);
console.log(arr);
console.log(result)

// Array.isArray 는 Array 생성자 함수의 정적 메서드

// 전달된 인수가 배열이면 true 배열이 아니면 false 반환
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2]))
console.log(Array.isArray(new Array()))

console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));


// * Array.prototype.indexOf
// 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스르 반한환다
// 원본배열 인수로 전달된 요소와 중복되는 요소가 여러개 있다면 첫번째로 검색된 요소의 인덱스르 반환
// 원본배열에 인수로 전달한 요소가 존재 하지 않으면 -1 반환
const arr1 = [1, 2, 2, 3];

console.log(arr1.indexOf(2)); // 1
console.log(arr1.indexOf(4)); // -1
console.log(arr1.indexOf(2, 2)) // 2 두번째 인수는 검색을 시작할 인덱스  생략하면 처음부터 검색한다

const foods = ['a', 'b', 'orange'];

if (foods.indexOf('orange') === -1) {
    foods.push('orange')
}

console.log(foods);


// * Array.prototype.push
// * push 는 원본배열을 직접 변경한다
const arrpush1 = [1, 2];
arrpush1.push(3,4)
console.log(arrpush1);


// push 메서드는 성능면에 좋지 않다
// 마지막 요소로 추가할 요소가 하나뿐이라면 push 프로퍼티 사용하지 않고 length 프로퍼티를 사용하여 배열의 마지막에 요소를 직접 추가 할수 있다 이방법이 push 메서드보다 빠름

const arrpush2 = [1, 2];
arrpush2[arrpush2.length] = 3;
console.log(arrpush2);


// es6 스르프레드 문법 사용하면 함수 호출ㅎ없이 표현식으로 마지막에 요소를 추가할수있으며 부수효과도 다

const arrspread = [1, 2];
console.log([...arrspread, 3])


// * Array.prototype.pop
// pop 메서드는 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다
// 빈배열 이면 undefiend pop 매서드 원본배열 직접 변경한다
const arrpop = [1,2];
let arrpopResult = arrpop.pop();
console.log(arrpopResult);


// - stack 구현
console.log("stack =================================== ");

// Last In First Out
const Stack = (function () {
  function Stack(array = []) {
      if (!Array.isArray(array)) {
          throw new TypeError(`${array} is not an array `)
      }
      this.array = array;
  }
  Stack.prototype = {
      constructor: Stack,
      push(value) {
          return this.array[this.array.length] = value;
      },
      pop(value) {
          return this.array.pop()
      },
      entries() {
          return [...this.array]
      }
  }
  return Stack;
}())


const stack = new Stack([1,2]);
console.log(stack.entries())
stack.push(3);
console.log(stack.entries())
stack.pop();
console.log(stack.entries())

class StackClass {
    #array; // private class member

    // TODO: 19.9.1 복습
    constructor(array = []) {

        if(!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array `)
        }
        this.#array = array;
    }
    push(value) {
        return this.#array.push(value);
    }
    pop() {
        return this.#array.pop()
    }
    entries() {
        return [...this.#array]
    }
}

const stackclass = new StackClass([1,2,4]);
console.log(stackclass.entries())
stack.push(3);
console.log(stackclass.entries())
stack.pop();
console.log(stackclass.entries())
console.log("stack =================================== ");

// * Array.prototype.unshift
// 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고 변경된 length 프로퍼티 값을 반환한다 직접변경
const arrUnshift = [1, 2];
let arrUnshiftResult = arrUnshift.unshift(3, 4);
console.log("unshift => ",arrUnshiftResult);

// * Array.prototype.shift
// 원본배열에서 첫번째 요소를 제거하고 제거한 요소를 반환한다 원본배열 직접 변경
const arrshift = [1, 2];
let arrshiftArr = arrshift.shift();
console.log(arrshiftArr);
console.log("shift => ", arrshift);

// - queue 구현
// First In First Out
console.log("queue =================================== ");
const Queue = (function () {
    function Queue(array = []) {
        if (!Array.isArray(array)) {
            throw new Error(`${array} is not an array`)
        }
        this.array = array;
    }
    Queue.prototype = {
        constructor: Queue,
        enqueue(value) {
            return this.array.push(value);
        },
        dequeue() {
            return this.array.shift();
        },
        entries() {
            return [...this.array]
        }
    }

    return Queue;
}())

const queue = new Queue([1, 2, 3]);
console.log(queue.entries());
queue.enqueue(4);
console.log(queue.entries());
queue.dequeue();
console.log(queue.entries());


class Queueclass {
    #array;
    constructor(array = []) {
        if (!Array.isArray(array)) {
            throw new Error(`${array} is not an array`)
        }
        this.#array = array;
    }
    enqueue(value) {
        return this.#array.push(value);
    }
    dequeue() {
        return this.#array.shift();
    }
    entries() {
        return [...this.#array]
    }
}
const queueclass = new Queueclass([1, 2, 3]);
console.log(queueclass.entries());
queueclass.enqueue(4);
console.log(queueclass.entries());
queueclass.dequeue();
console.log(queueclass.entries());
console.log("queue =================================== ");

// * Array.prototype.concat()
// concat 메서드는 인수로 전달된 값들을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다
// 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다
// 원본 배열은 변경되지 않는다

const arrconcat1 = [1, 2];
const arrconcat2 = [3, 4];
// 배열 arrconcat2 를 원본배열 arrconcat1 의 마지막 요소로 추가한 새로운 배열을 반환한다
// 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다
let resultconcat = arrconcat1.concat(arrconcat2);
console.log(resultconcat);
// 원본배열 변경 하지 않음
console.log(arrconcat1)

const arrrr = [3, 4];
arrrr.unshift([1, 2]);
arrrr.push([5, 6]);
console.log(arrrr);
let arrrrResult = [1, 2].concat([3,4]);
arrrrResult = arrrrResult.concat([5,6]);
console.log(arrrrResult)

// concat -> ** 스프레드 문법으로 대체
spreadResult = [...[1,2], ...[3, 4]]
console.log(spreadResult)


// * Array.prototype.splice
// 원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우 splcie 메서드를 사용한다 spice 메서드는 3개의 매개변수가 있으며 원본 배열을 직접 변경한다
// start : 원본 배열의 요소를 제거 하기 시작할 인덱스 start 지정하면 우너본 배열의 start 부터 모든 요소를 제거한다 start가 음수 인경우
// 배열의 끝에서의 인덱스를 나타낸다 만약 start가 -1 이면 마지막 요소를 가리키고 -n 이면 마지막서 n번째 요소를 가리킨다
// deleteCont : 원본 배열의 요소를 제거하기 시작할 인덱스인 start 부터 제거할 요소의 개수다 deletecount 가 0 인 경우 아무런 요소도 제거되지 않는다 (옵션)
// itmes : 제거한 위치에 삽입할 요소들의 목록이다 생략할경우 원본배열에서 요소들을 제거하기만 한다
console.log("Array.prototype.splice =================================== ");
const arrspilce = [1, 2, 3 ,4]
const arrspliceResult = arrspilce.splice(1, 2, 20, 30);
console.log(arrspilce); // [1, 20, 30, 4] 원본 배열 변경
console.log(arrspliceResult); // [2, 3]  제거된 배열 반환


/// 특정 요소제거
const array1 = [1, 2, 3, 1, 2];

function remove(arr, item) {
    const result = arr.indexOf(item)
    if (result !== -1) {
        arr.splice(result, 1);
    }
    return arr
}

console.log(remove(array1, 2));
console.log(remove(array1, 10));


// fliter 메서드 사용하기
const array2 = [1, 2, 3, 1, 2];
// 하지만 특정요소가 모두 중복되는경우 모두 제거된다
function removeAll(array, item) {
    return array.filter(v => v !== item);
}
console.log(removeAll(array2,2))


// * Array.prototype.slice
// slice 메서드는 인수로 전달된 범위의 요소들을 복사하여 배열로 반환한다 원본배열을 변경되지 않는다
// start : 복사를 시작할 인덱스다 음수인 경우 배열의 끝에서의 인덱스를 나타낸다 예를 들어 slice(-2)는 배열의 마지막 두개의 요소를 복사하여 배열로 반환한다
// end : 복사를 종료할 인덱스다 이 인덱스에 해당하는 요소는 복사되지 않는다 end 는 생략 가능하며 생략시 기본값은 length 프로퍼티 값이다
console.log("Array.prototype.slice =================================== ");

const arrSlice = [1, 2, 3];
console.log(arrSlice.slice(0, 1)) // [1]
console.log(arrSlice.slice(1, 2)) // [2]
console.log(arrSlice) // [1, 2 ,3]
console.log(arrSlice.slice(1)) // [2, 3] arr[1] 이후 부터 모든 요소를 복사하여 반환
console.log(arrSlice.slice(-1)) // [3] 배열의 끝에서 부터 한개 복사해서 반환
console.log(arrSlice.slice(-2)) // [2, 3]배열의 끝에서 부터 두개 복사해서 반환

const originArr = [1, 2, 3];
// 인수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환한다
const copy = originArr.slice();
console.log(copy);
console.log(copy === originArr) // false 얕은복사

const todos = [
    { id: 1, content: "HTML", complted: true },
    { id: 2, content: "CSS", complted: true },
    { id: 3, content: "Javascript", complted: false },
];
// 얕은 복사
const todosCopy = todos.slice();
console.log(todosCopy);
console.log(todosCopy[0] === todos[0])


// slice 메서드가 복사본을 생성하는 것을 이용하여 arguments, HTMPCollction, NodeList 유사배열 객체를 배ㅕㅇㄹ로 변환

function sum() {
    var arr = Array.prototype.slice.call(arguments)
    console.log(arr);
    return arr.reduce(function (pre, cur) {
        return pre + cur
    }, 0)
}

console.log(sum(1, 2, 3))


// * Array.prototype.join()
// 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열, 즉 구분자로 연결한 문자열을 반한한다 구분자는 생략 가능하며 기본 구분자는 콤마다
console.log("Array.prototype.join =================================== ");
const arrJoin  = [1, 2, 3];
console.log(arrJoin.join());
console.log(arrJoin.join(''));
console.log(arrJoin.join(':'));


// * Array.prototype.reverse()
console.log("Array.prototype.reverse =================================== ");
const arrReverse = [1, 2, 3];
const revertResult = arrReverse.reverse();
console.log(arrReverse);
console.log(revertResult)


// * Array.prototype.fill()
// es6에 도입된 fill 메서드는 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다 이때 원본 배열이 변경된다
console.log("Array.prototype.fill =================================== ");
const arrFill = [1, 2, 3];
arrFill.fill(0)
// 원본배열 직접 변경
console.log(arrFill);

// 두번째 인수로 요소 채우기를 시작할 인덱스를 전달 할 수 있다
const arrFill2 = [1, 2, 3];
arrFill2.fill(0, 1);
console.log(arrFill2);

// 세번째 인수로 요소채우기를 멈출 인덱스를 전달할 수 있다
const arrFill3 = [1, 2, 3, 4, 5];

arrFill3.fill(1, 0, 3)
console.log(arrFill3);

const arrFill4 = new Array(3);
const arrFill4Result = arrFill4.fill(1);
console.log(arrFill4Result);

// 단점 하나의 하나의 값으로만 채울수 있기 때문에
// Array.from() 사용 하기

const sequence = (length = 0) => Array.from({ length }, (_,i) => i)
console.log(sequence(3));


// * Array.prototype.includes()
// es7 includes 메서드는 배열네 특정요소가 포함 되어있는지 확인하여 true 또는 false 를 반환한다 첫번쨰 인수로 검색할 대상을 지정한다
console.log("Array.prototype.includes =================================== ");
const arrInclude1 = [1, 2, 3];
console.log(arrInclude1.includes(2)); // true
console.log(arrInclude1.includes(100)) // false
console.log(arrInclude1.includes(1,1))
console.log(arrInclude1.includes(3, -1))

// indexOf 비추 반환값이 -1 인지 확인해야되고 배열에 NaN이 포함되어있는지 확인할수 없다는게 문제가 있음
console.log([NaN].indexOf(NaN) !== -1);
console.log([NaN].includes(NaN))


// * Array.prototype.flat
console.log("Array.prototype.flat =================================== ");
// es10 도입 된 flat 메서드는 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄환 한다
console.log([1, [2, 3, 4, 5]].flat());

console.log([1, [2, [3, [4]]]].flat());
console.log([1, [2, [3, [4]]]].flat(1));

console.log([1, [2, [3, [4]]]].flat(2));

console.log([1, [2, [3, [4]]]].flat(3));
console.log([1, [2, [3, [4]]]].flat().flat());

console.log([1, [2, [3, [4]]]].flat(Infinity));



