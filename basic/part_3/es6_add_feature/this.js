//
class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        // add메서드는 인수로 전달된 배열 arr을 순회하며 배열의 모든 요소에 prefix를 추가한다
        // 1
        return arr.map(function (item) {
            return this.prefix + item // 2
            // TypeError: Cannot read property 'prefix' of undefinex
        })
    }
}
const prefixer = new Prefixer("-webkit-");
console.log(prefixer.add(['transition','user-selct']))