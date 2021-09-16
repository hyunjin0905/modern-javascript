// * 자바스크립트 배열은 배열이 아니다
// 자료구조에서 말하는 배열은 동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열된 자료구조를 말한다
// 즉 배열의 요서는 하나의 데이터 타입으로 통일되어 있으며 서로 연속적으로 인접해 있다
// 이러한 배열을 밀집 배열이라한다
// 일반적인 의미 배열은 각 요소가 동일한 데이터 크기를 가지며빈틈없이 연속적으로 이어져 있으므로 다음과 같이 인덱스를 통해
// 단 한번의 연산으로 임의의 요소에 접근(임의 접근, 시간복잡도O(1)) 매우 효율적 고속 동작
// * 검색 대상 요소의 메모리 주소 = 배열의 시작 메모리 주소 + 인덱스 * 요소의 바이트 수
// 예 ) 메모리 주소 1000 시작 각 요소가 8 바이트
// 인덱스가 0 인 요소의 메모리 주소: 1000 + 0 * 8 = 1000
// 인덱스가 0 인 요소의 메모리 주소: 1000 + 1 * 8 = 1008
// 인덱스가 0 인 요소의 메모리 주소: 1000 + 2 * 8 = 1016


// 하지만 정렬되지 않은 배열에서 특정한 요소에 검색하는 경우 배열의 모든 요소를 처음부터 특정요소를 발견할때까지 차례대로 검색
// (선형검색, 시간복잡도 O(n)) 해야한다

function linearSearch(array, target) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] === target) return i;
    }

    return -1
}

console.log(linearSearch([1,2,3,4,5,6],3))
console.log(linearSearch([1,2,3,4,5,6],0))

// 또한 배열에 요소를 삽입하거나 삭제하는 경우 배열의 요소를 연속적으로 유지하기위해 요소를 이동시켜야하는 단점


// **  자바스크립트의 배열은 지금까지 위에 살펴본 자료구조에서 말하는 일반적인 의미의 배열과 다르다
// 즉, 배열의 요소를 위한 각각의 메모리 공간은 동일한 크기를 가지 않아도되며 연속으로 이어져 있지  않을 수도 있다
// 배열의 요소가 연속적으로 이어져 있지 않는 배열을 희소배열이라고 한다
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체다

console.log(Object.getOwnPropertyDescriptors([1,2,3]))
// 자바스크립트 배열은 인덱스를 나타내는 문자열을 프로퍼티 키로 가지며 length 프로퍼티를 갖는 특수한 객체다
// 배열의 요소는 사실 프로퍼티 값

const arrr = [
    'string',
    10,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [],
    {},
    function () {}
]


// 일반적인 배열과 자바스크립트 배열의 장단점 정리
// 일반적인 배열은 인덱스로 요소에 빠르게 접근할수있다
// 하지만 특정요소를 검색하거나 요소를 삽입, 삭제 하는 경우에는 효율 적 이지 않다
// 자바스크립트 배열은 해시테이블로 구현된 객체이므로 인덱스로 요소에 접근하는 경우 일반적인 배열보다 성능적인 면에서 느릴수 밖에 없는 구조적인 단점이 있다
// 하지만 특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠른 성능을 기대 할수 있다


// 배열과 일반객체의 성능 테스트
const arr2 = [];
console.time('Array Performance test');
for(let i = 0; i < 1000000; i++) {
    arr2[i] = i;
}

console.timeEnd("Array Performance test");


const obj = {}
console.time('Object Performance test');
for(let i = 0; i < 1000000; i++) {
    obj[i] = i;
}

console.timeEnd('Object Performance test')


// * length 프로퍼티와 희소배열
[].length //0
[1,2,3].length //3

// length 프로퍼티의 값 0과 2의32승 -1(4,294,967,295)개 가질수 있음
const arr3 = [1 ,2 ,3];
console.log(arr3.length);

// 요소추가
arr3.push(4);
// 요소를 추가하면 length 프로퍼티의 값이 자동 갱신된다
console.log(arr3.length);

//요소 삭제
arr3.pop();
// 요소를 삭제하면 length 프로퍼티의 값이 자동 갱신된다
console.log(arr3.length)

const arr4 = [1, 2, 3, 4, 5];
// length 프로퍼티에 3을 할당
arr4.length = 3;
console.log(arr4.length);

const arr5 = [1];
arr5.length = 3;
console.log(arr5);

console.log(Object.getOwnPropertyDescriptors(arr5));


// 희소배열
const spares = [, 2, , 4];

// 희소배열 length 프로퍼티 값은 요소의 개수와 일치하지 않는다
console.log(spares.length);
console.log(spares);

// 배열 sparse에는 인덱스가 0, 2인 요소가 존재 하지 않는다
console.log(Object.getOwnPropertyDescriptors(spares));

// 일반적인 배열의 length는 배열 요소의 개수 즉 배열의 길이와 언제나 일치한다
// 하지만 희소배열은 length와 배열요소의 개수가 일치 하지 않는다
// 희소배열의 length는 희소배열의 실제요소개수보다 언제나 크다

// 안쓰는게 좋음

// 배열에는 같은타입의 요소를 연속적으로 위치시키는것이 최선이다



