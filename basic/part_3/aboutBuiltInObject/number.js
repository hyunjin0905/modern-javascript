// Number 생성자 함수
// 표준 빌트인 객체인 Number 객체는 생성자 함수 객체다
// new 연산자와 함께 호출하여 Number 인스턴스를 생성할 수 있다
// Number 생성자 함수에 인수를 전달하지 않고 new 연산자와 함께 호출하면 [[NumberData]] 내부슬롯에 0을 할당한 Number 객체를 생성한다
const numObj = new Number()
console.log(numObj);
