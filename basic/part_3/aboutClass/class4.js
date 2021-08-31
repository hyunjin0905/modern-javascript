// 상속에 의한 클래스 확장
// 프로토타입 기반 상속은 프로토타입 체인을 통해 다른 객체의 자산을 상속받는 개념이지만
// 상속에 의한 클래스 확장은 기존 클래스를 상속받아 새로운 클래스를 확장 하여 정의 하는 것이다

class Animal {
    constructor(age, weight) {
        this.age = age;
        this.weight = weight;
    }
    eat() { return 'eat'; }
    move() { return 'move'; }

}
class Bird extends Animal{
    fly () {
        return 'fly';
    }
}
const animal = new Bird(12, 100);
console.log(animal.eat());

// extends 키워드
// 동적상속
// extends 다음 키워드 다음에는 클래스 뿐만이 아니라 [[Constuct]] 내부 메서드를 갖는 함수 객체로 평가될 수 있는 모든 표현식을 사용할수 있따


function Base1() {}
class Base2{}
let condition = true;

// 조건에 따라 동적으로 상속 대상을 결정하는 서브 클래스
class Derived extends (condition ? Base1 : Base2) {}
const derived = new Derived();
console.log(derived);


// 서브 클래스의 constuctor
// 생략하면 consturctor 암묵적으로 정의된다
// args 는 new 연산자와 함께 클래스를 호출할떄 전달한 인수의 리스트다

class Base3{
    constructor() {
        this.name = name;
        console.log(arguments)
    }
}

class Devived2 extends Base3 {
    constructor(...args) {
        super(...args);
        console.log(args);
    }
}
const d = new Devived2();
console.log(d);


// super 키워드
// super 호출하면 수퍼클래스의 constructor (super-connstuctor)를 호출한다
class Base2 {
    constructor(a,b) { //4
        this.a = a;
        this.b = b;
    }

}

class Derived extends Base {
    // 다음과 같이 암묵적으로 constuctor 가 정의된다
    constructor(a, b, c) { // 2
        super(a,b); // 3
        this.c = c;
    }

}
const derived2 = new Derived(1, 2, 3);
console.log(derived2)

// 1 new 연산자와 함께 derived 클래스를 호출하면서
// 2 전달한 인수 1,2,3 은 Derived 클래스의 constucotr 에 전달 되고
// 3 super 호출을 통해 Base2 클래스의 consturctor에 일부가 전달된다


//* 주의사항

// 1. 서브클래스에서 constructor 생략하지 않은 경우 서브 클래스의 constucutor에서는 반드시 super를 호출 해야한다
// 2. 서브 클래스의 constructor 에서 super를 호출하기 전에는 this를 참조 할수 없다
// 3. super는 반드시 서브 클래스의 consturtor 에서만 호출한다. 서브 클래스가 아닌 construtor 나 함수에서 super를 호출하면 에러가 발생한다


// super 참조
// 메서드내에서 super를 참조하면 수퍼클래스의 메서드를 호출 할 수 있다
//1. 서브클래스의 프로토타입 메서드 내에서 super.sayHi는 수퍼클래스의 프로토타입 메서드 sayHi를 가르킨다






