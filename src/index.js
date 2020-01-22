import "./styles.css";

// 1. 오브젝트 정의 { } 사용
const Person = {
  Name: "abc",
  age: 30,
  height: 150
};

// 2. 오브젝트의 값 사용
const {Name, height} = Person;

//const Foo = function(Person) {
//  console.log(Person.name, Person.age, Person.height);
//};
  
//  Foo(Person);
  
const Foo = function({age}){
  console.log(age);
}

Foo(Person);

// 예제 : minr과 max를 더한 값 출력
const data = {
  min: 1,
  max: 3,
  avg: 2,
  median: 4
}

// 1_1) 풀어쓴 방법 
const sum = function({min, max}) {
  console.log(min + max);
}

sum(data);

// 1_2) 풀어쓴 방법 (예전 방법)
const sum2 = function(){
  return function({min, max}){
    console.log(min + max);
  }
}

sum2(data);

// 2_1) 간단한 방법
const foo1 = () => (function({min, max}){
  console.log(min + max);
})

foo1()(data);   // function 안에서 매개변수를 사용하므로 

// 2_2) 간단한 방법
const foo2 = (() => ({min, max}) => console.log(min + max));

foo2()(data);

// 2_3) 간단한 방법
const foo3 = ({min, max}) => console.log(min + max);

foo3(data)

// 이름없는 함수를 바로 실행시키는 방법
//const bar = (() => func)();

// first name과 last name을 합쳐 full name
const name = {
  firstName: "kyoungOk",
  lastName: "yim",
};

const fullName = ({firstName, lastName}) => console.log(firstName + lastName);

fullName(name);

// price와 discountRate를 곱해서 할인이 적용된 가격을 구하세요. 
const item = {
  item: "book",
  price: 15000,
  discountRate: 0.3
};

const Price = ({price, discountRate}) => console.log(price-(price * discountRate));

Price(item)

  
  
