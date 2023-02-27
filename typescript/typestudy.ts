//let으로 선언했기 때문에 수정 가능, 타입을 string으로 줬기 때문에 string 이외의 값은 오류가 남
let car:string = 'bmw';

car = "car" //오류 X
car = 3 //오류 O

//튜풀

let b: [string, number];

b = ["x", 1];

//enum 값이 차례로 나옴
enum Os {
  window = "win",
  Ios = "ios",
  Android = "and",
}

let myOs:Os;
myOs = Os.window

null, undeined
let a: null = null;
let b: undefined = undefined;

//interface

interface User {
  name: string;
  age: number;
  gender?:string //?는 있어도 되고 없어도 되는 값을 의미
  readonly birthYear : number //readonly 속성은 읽기 전용임 수정 불가능
}

let user: User = {
  name: "xx",
  age: 30,
};

user.age = 10;
user.gender = "male"

//implements

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color = "red";
  wheels = 4;

  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log("go...");
  }
}

const b = new Bmw("red");
b.start();

extends
interface Benz extends Car {
  door: number;
  stop(): void;
}

//함수

function add(num1: number, num2: number): void {} //아무것도 리턴하지 않으면 void 를 사용

function isAdult(age: number): boolean {
  // 리턴 결과를 boolean으로 리턴 가능
  return age > 10;
}

function hello(name?: string) {
  return `Hello, ${name || "world"}`;
}

const result = hello();

function hello2(name: string, age?: number): string {
  //리터럴
  if (age !== undefined) {
    return `Hello,${name} you are ${age}`;
  } else {
    return `Hello ${name}`;
  }
}

console.log(hello("sam"));

function add(...nums) {
  // 나머지 매개변수
  return nums.reduce((result, num) => result + num, 0);
}

function showName(this: User) {
  //this의 타입은 매개변수로 지정해줌
  console.log(this.name);
}

//literal types

type Job = "police" | "dev" | "teacher"; // 타입을 선언 해놓으면 이 프로퍼티밖에 사용 못함

interface User {
  name: string;
  job: Job;
}
const user: User = {
  name: "Bob",
  job: "dev",
};

interface HighSchoolStudent {
  name: string | number;
  grade: 1 | 2 | 3;
}

//Union types

interface Car {
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

function getGift(gift: Car | Mobile) {
  console.log(gift.color);
  if (gift.name === "car") {
    gift.start();
  } else {
    gift.call();
  }
}

Intersection types
interface Car {
  name: string;
  start(): void;
}

interface Toy {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
    name:"타요",
    start(){},
    color:"blue",
    price:1000
};

class
class Car {
  constructor(readonly color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

const bmw = new Car("red");

//접근 제한자 = public,private,protected

//제네릭

function getSize<T>(arr: T[]): number {
  return arr.length;
}

interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const m1: Mobile<{color:string coupon:boolean}> = {
  name: "s21",
  price: 1000,
  option: {
    color: "red",
    coupon: false,
  },
};

const m2: Mobile<string> = {
  name: "s20",
  price: 900,
  option: "good",
};

//keyof

interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

// type UserKey = keyof User;

Partial<T> 프로퍼티를 모두 옵셔널로 바꿔줌
interface User {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

let admin: Partial<User> = {
  id: 1,
  name: "Bob",
  age: 30,
};

//Readonly<T>

interface User {
  id: number;
  name: string;
  age?: number;
}

let admin: Readonly<User> = {
  id: 1,
  name: "bob",
};

admin.id = 4;

//Record<K,T>

type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D" | "F";

const score: Record<Grade, Score> = {
  1: "A",
  2: "B",
  3: "D",
  4: "C",
};

interface User {
  id: number;
  name: string;
  age: number;
}

function isValid(user: User) {
  const result: Record<keyof User, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
  };
  return result;
}

//Pick<T,K> 특정 프로퍼티만 가져와 사용가능

interface User {
  id: number;
  name: string;
  age: number;
  gender: "M" | "w";
}

const admin: Pick<User, "id" | "name"> = {
  id: 0,
  name: "Bob",
};

//Omit<T,K> 특정 프로퍼티를 생략하고 사용가능

interface User {
  id: number;
  name: string;
  age: number;
  gender: "M" | "w";
}

const admin: Omit<User, "age" | "gender"> = {
  id: 0,
  name: "Bob",
};

//Exclude<T1,T2>

type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>;

//NonNullable null을 제외한 타입 생서

type T1 = string | null | undefined | void;
type T2 = NonNullable<T1>