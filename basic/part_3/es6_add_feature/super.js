// super
// 화살표 함수는 함수 자체의 super 바인딩 가지 않는다
// super 참조하면 상위 스코프의 super 참조
class base {
 constructor(nmae) {
     this.name = name;
 }
 sayHi() {
     retrun `Hi ${this.name}`;
 }

}
class Derived extends base {
    sayHi = () => `${super.sayHi()} 안녕`;
}
const derived = new Derived("lucy");
console.log(derived.sayHi());

