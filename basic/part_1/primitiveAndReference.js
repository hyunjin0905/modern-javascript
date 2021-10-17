
var score = 80;
var copy = score;
console.log("score === copy ", score === copy);
score = 100;
console.log("score 의 원시 공유에 의한 전달(Call by sharing", copy);
console.log("score === copy 값은 같으나 다른 메모리 공간에 저장된 별개의 값임 score 값이 변해도 copy 값에 영향을 주지 않는다", score === copy);
var stringArrayLikeObject = "ArrayLikeObject"
stringArrayLikeObject[0] = "hi"
console.log(stringArrayLikeObject);
console.log(stringArrayLikeObject.length);
// 재할당 가능 , 변경 불가능, 유사 배열 객체 라서 객체처럼 메서드를 사용 할 수 있다

const o = {
    a: 1,
    b: "string",
    c: {
        name: "lucy",
        age: "29"
    }
};

// 얕은 복사
const c1 = {...o};
console.log(c1);
console.log(c1 === o);
console.log(c1.x === o.x);
// 깊은 복사
const obj1 = {
    a: 1,
    b: "string",
    c: {
        name: "lucy",
        age: "29"
    }
};

// Deep Copy 방법
const obj2 = JSON.parse(JSON.stringify(obj1))
console.log(obj1)
console.log(obj2);


function cloneObject(obj) {
    var clone = {};
    for (var key in obj) {
        if (typeof obj[key] == "object" && obj[key] != null) {clone[key] = cloneObject(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }

    return clone;
}
const a = cloneObject(obj1);
console.log(a);
console.log(obj1 === a);
