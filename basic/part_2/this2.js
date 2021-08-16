// * 메서드 호출
const cafe = {
    name: "starbucks",
    // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩된다
    getName() {
        return this.name;
    }
}

// 메서드 getName을 호출한 객체는 person 이다
console.log(cafe.getName());
// 메서드는 프로퍼티에 바인딩된 함수다
// person 객체의 getName 프로퍼티가 가리키는 함수 객체는 person 객체에 포함된 것이 아니라 독립적으로 존재하는 별도의 객체 getName 프로퍼티가 함수 객체를 가리키고 있을 뿐이다

const anotherCafe = {
    name: "twosome"
}
// getName 메서드를 anotherCafe 객체의 메서드로 할당
anotherCafe.getName = cafe.getName;
// getName 메서드를 호출한 객체는 anotherPerson이다
console.log(anotherCafe.getName());
// getname 메서드를 변수에 할당
const getName = cafe.getName;
// getName 메서드를 일반함수로 호출
console.log(getName());
// 일반 함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name과 같다
//  window.name 은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''
// 노드 환경 undefiend

// ** 메서드 내부의 this는 프로퍼티로 메서드를 가리키고 있는 개체와 관계없고 메서드를 호출한 객체에 바인딩 된다



// * 프로토 타입 메서드 내부에서도 마찬가지
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
}

const me = new Person("lucy")
console.log(me.getName()); // 1  this -> me 를 가리킴

Person.prototype.name = "lucyggg";
console.log(Person.prototype.getName()); // Person.prototype 가리킴


// * 생성자 함수 호출
function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    }
}

// 반지름 5인 Circle 객체를 생성
const circle1 = new Circle(5);
// 반지름 10인 Circle 객체를 생성
const circle2 = new Circle(10);
console.log(circle1.getDiameter());
console.log(circle2.getDiameter());

// 일반 함수 호출 new 없어
const circle3 = Circle(15);
console.log(circle3)
// * 일반 함수로 호출된 Circle 내부의 this는 전역객체를 가리킨다
console.log(radius)







