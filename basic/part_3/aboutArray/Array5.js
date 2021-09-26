// 배열
// 원본 배열 직접 변경 메서드
// Array.prototype.push()
// Array.prototype.pop()
// Array.prototype.unshift()
// Array.prototype.shift()
// Array.prototype.splice()
// Array.prototype.reduce()
// Array.prototype.fill()



// sort


var numbers = [4, 2, 5, 100, 22, 1, 10 ,3];
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);


var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

items.sort((a,b) => {
    return a.value - b.value
})
console.log(items);

// value 기준으로 정렬
items.sort(function (a, b) {
    if (a.value > b.value) {
        return 1;
    }
    if (a.value < b.value) {
        return -1;
    }
    // a must be equal to b
    return 0;
});

// name 기준으로 정렬
items.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // 이름이 같을 경우
    return 0;
});