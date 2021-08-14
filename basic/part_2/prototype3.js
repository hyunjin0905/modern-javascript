const Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    // 1. 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    // Animal.prototype에 객체 리터럴 할당
    Animal.prototype = {
        //2  constructor 프로퍼티와 생성자 함수 간의 연결을 설정
        constructor: Animal,
        getName() {
            console.log(`hi! ${this.name}`)
        }
    }
    return Animal;
}());

const aniaml = new Animal();
console.log(aniaml.constructor === Animal);
console.log(aniaml.constructor === Object);


// 2 파괴된 constructor 프로퍼티와 생성자함수 간의 연결 되살려보기


