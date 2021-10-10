// 캡슐화 정보 은닉
// 캡슐화 객체의 상태를 나타내는 프로퍼티와 프로퍼티와 참조하고 조작할수 있는 동작인 메서드를 하나로 묶는것
// 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기도 하는데 이를 정보 은닉이라 한다

function Person(name, age) {
    this.name = name; // public
    let _age = age; // private

    // 인스턴스 메서드
    Person.prototype.sayHi = function () {
        console.log(`${this.name}  ${_age}`);
    }

}
const me = new Person("lee", 20);
me.sayHi();
console.log(me.name)
console.log(me._age)



