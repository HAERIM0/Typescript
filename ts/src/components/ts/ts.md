# 타입스크립트 변수 선언문

### 타입스크립트 기본 제공 타입

- 수 타입 : number
- 불리언 타입 : boolean
- 문자열 타입 : string
- 객체 타입 : object

### let과 const 키워드

- var 키워드 사용 금지
- let : 그 값이 수시로 변경될 수 있음

```jsx
let 변수이름 [= 초깃값]
```

- const : 변숫값이 절대 변하지 않음
  - const로 변수를 선언할 때는 반드시 초깃값을 명시해야 함

```jsx
const 변수이름 = 초깃값;
```

### 타입 주석

자바스크립트 변수 선언문을 확장해 타입을 명시하는 것

```jsx
let 변수이름 : 타입 [= 초깃값]
const 변수이름 : 타입 = 초깃값
ex)
let n : number = 1
let b : boolean = true
let s : string = 'hello'
let o : object = {}
```

- 타입스크립트는 let으로 선언한 변숫값은 타입 주석으로 명시한 타입에 해당하는 값으로만 바꿀 수 있다

### 타입 추론

타입 스크립트는 자바스크립트와 호환성을 위해 타입 주석 부분을 생략할 수 있음, 타입스크립트가 생략된 코드를 만나면 대입 연산자 = 오른쪽 값에 따라 변수의 타입을 지정하는 것

```jsx
let n = 1; //n의 타입을 number로 판단
let b = true; //b의 타입을 boolean으로 판단
let s = "hello"; //s의 타입을 string으로 판단
let o = {}; //o의 타입을 object로 판단
```

### any 타입

타입스크립트는 자바스크립트와 호환을 위해 any라는 이름의 타입을 제공, any 타입은 값의 타입과 무관하게 어떤 종류의 값도 저장할 수 있다

```jsx
let a: any = 0;
a = "hello";
a = true;
a = {};
```

### undefined 타입

타입스크립트에서 undefined는 타입이기도 하고 값이기도 하다

```jsx
let u: undefined = unedfined;
```

- undefined는 모든 타입의 최하위 타입임

### 템플릿 문자열

변수에 담긴 값을 조합해 문자열을 만들 수 있게 하는 것

```jsx
`${변수 이름}`
```

# 객체와 인터페이스

타입 스크립트의 타입 계층도에서 object 타입은 인터페이스와 클래스의 상위 타입이다. object 타입으로 선언된 변수는 타입의 값을 가질 수는 없지만 속성 이름이 다른 객체를 모두 자유롭게 담을 수 있다

### 인터페이스 선언문

타입스크립트는 객체의 타입을 정의할 수 있게 하는 interface라는 키워드를 제공한다

```jsx
interface 인터페이스 이름{
속성 이름[?] : 속성 타입[,...]
}
```

### 선택 속성 구문

인터페이스를 설계할 때 필수 속성과 선택 속성을 만들 수 있다 이러한 속성을 선택 속성이라고 함

```jsx
interface Iperson2{
name : string // 필수 속성
age : number // 필수 속성
etc : boolean // 선택 속성
}
```

### 익명 인터페이스

interface 키워드도 사용하지 않고 인터페이스의 이름도 없는 인터페이스를 만들 수 있는 것

# 객체와 클래스

### 클래스 선언문

타입스크립트는 객체지향 언어에서 흔히 볼 수 있는 키워드를 제공한다

```jsx
class 클래스 이름{
[private | protected | public] 속성 이름 [?] : 속성 타입 [...]
```

### 접근 제한자

클래스의 속성은 public,private,protect 와 같은 접근 제한자를 이름 앞에 붙일 수 있다 만약 생략하면 모두 public으로 간주한다

### 생성자

타입스크립트의 클래스는 constructor라는 이름의 특별한 메서드를 포함하는ㄴ 것

### 인터페이스 구현

타입스크립트 클래스는 인터페이스를 구현할 수 있다

- 클래스가 인터페이스를 구현할 때는 implements 키워드를 사용한다
- 클래스 몸통에는 반드시 인터페이스가 정의하고 있는 속성을 멤버 속성으로 포함해야 한다

```jsx
class 클래스 이름 implements 인터페이스 이름{

}

ex)
interface IPerson4 {
name : string
age? : number
}

class Person4 implements IPerson4 {
name : string
age : number
}
```

### 추상 클래스

타입스크립트는 abstract 키어드를 사용해 추상 클래스를 만들 수 있다

- 추상 클래스는 abstract 키워드를 class 키워드 앞에 붙여서 만든다

```jsx
abstract class 클래스 이름 {
abstract 속성이름 : 속성타입
abstract 메서드 이름() {}
}
```

### 클래스의 상속

겍체지향 언어는 부모 클래스를 상속받는 상속 클래스를만들 수 있는데, 타입스크립트는 다음처럼 extends 키워드를 사용해 상속 클래스를 만든다

```jsx
class 상속 클래스 extends 부모 클래스 {...}
```

### static 속성

타입스크립트 클래스는 정적인 속성을 가질 수 있다.

- 클래스의 정적 속성은 ‘클래스 이름.정적 속성 이름’ 형태의 점 표기법을 사용해 값을 얻거나 설정한다

```tsx
class 클래스 이름 {
static 정적 속성 이름 : 속성 타입
}
```

# 객체의 비구조화 할당문

구조화 : 인터페이스나 클래스를 사용해 관련된 정보를 묶어 새로운 타입으로 표현하는 것

### 비구조화란?

구조화된 데이터를 분해하는 것

### 비구조화 할당

- 비구조화 할당을 객체에 적용하려면 얻고 싶은 속성을 중괄호로 묶는다

```tsx
let { name, age } = jack;
```

### 잔여 연산자

타입스크립트는 점을 연이어 3개 사용하는 . . . 연산자를 제공한다. 이 연산자는 사용되는 위치에 따라 잔여 연산자 또는 전개 연산자라고 부른다

```jsx
let address: any = {
  country: "korea",
  city: "Seoul",
  address1: "Gangnam-Gu",
};
const { country, city, ...detail } = address;
```

### 전개 연산자

점 3개 연산자가 비구조화 할당문이 아닌 곳에서 사용되는 때

# 객체의 타입 변환

### 타입 변환

타입이 있는 언어들의 특정 타입의 변숫값을 다른 타입의 값으로 변환할 수 있는 기능

### 타입 단언 = 타입 변환을 타입스크립트에서 부르는 말

```tsx
(<타입>객체)
(객체 as 타입)

ex)
export default interface INameable {
name : string
};
```

# 함수 선언문

```tsx
function 함수 이름(매개변수 1, 매개변수 2[, ...]) {
함수 몸통
}

function 함수 이름(매개변수1 : 타입1, 매개변수2 : 타입2[, ...]) : 반환값 타입 {
함수 몸통
}
```

### 매개변수와 반환값의 타입 주석 생략

함수 선언문에서도 매개변수와 반환값에 대한 타입 주석을 생략할 수 있다

- 변수 때와는 달리 함수의 매개변수 타입과 반환 타입을 생략하는 것은 바람직 하지 않다, 타입이 생략되어 있으면 함수의 구현 의도를 알리 어렵고 잘못 사용하기 쉽기 때문이다

### void 타입

값을 반환하지 않는 함수는 반환 타입이 void다. void 타입은 함수 반환 타입으로만 사용할 수 있다

```tsx
function printMe(name: Strign, age: number): void {}
```

### 함수 시그니처

함수의 타입

```tsx
(매개변수1 타입, 매개변수2 타입[, ...]) => 반환값 타입
```

### type 키워드로 타입 별칭 만들기

type 키워드는 기존에 존재하는 타입을 단순히 이름만 바꿔서 사용할 수 있게 하는 기능

```tsx
type 새로운 타입 = 기존 타입
```

### undefined 관련 주의 사항

undefined 타입은 타입스크립트의 타입 계층도에서 모든 타입 중 최하위 타입이다

### 선택적 매개변수

함수의 매개변수에도 이름뒤에 물음표를 붙일 수 있으며, 이를 선택적 매개변수 라고 한다

```tsx
function fn(arg1: string, arg?: number): void {}
```

# 함수 표현식

### 함수는 객체다

타입스크립트는 자바스크립트의 스킴과,프로토타입 기반 객체 지향언어를 셀프로 만들어졌다는 특징을 모두 포함한다

```tsx
let add2 = function (a, b) {
  return a + b;
};
console.log(add2(1, 2));
```

- 함수 선언문에서 함수 이름을 제외한 function(a,b) {return a+b} 같은 코드를 함수 표현식이라고 한다

### 일동 함수

자바스크립트와 타입스크리트는 일등 함수 기능이 있으므로 함수형 프로그래밍 언어다

- 일등 함수란 함수와 변수를 구분 하지 않는다는 의미이다

```tsx
let f = function (a, b) {
  return a + b;
};
f = function (a, b) {
  return a - b;
};
```

### 표현식

프로그래밍 언어에서 표현식 이라는 용어는 리터럴,연산자,변수,함수 호출 등이 복합적으로 구성된 코드 형태를 의미한다

### 함수 표현식

function(a,b) {return a+b} 부분을 함수 표현식이라고 한다

### 계산법

컴파일러는 표현식을 만나면 계산법을 적용해 어떤 값을 만든다

### 함수 호출 연산자

변수 이름 뒤에 함수 호출 연산자 를 붙여서 호출할 수 있다

- 함수가 매개변수를 요구한다면 함수 호출 연산자 () 안에 필요한 매개변수를 명시할 수 있다

### 익명 함수

이름이 없는 함수

```tsx
let value = (function(a,b) {return a+b} (1,2)
```

### const 키워드와 함수 표현식

함수 표현식을 담는 변수는 let보다는 const 키워드로 선언하는 것이 바람직 하다

- let키워드는 변숫값이 변할 수 있다
- const 키워드로 선언하면 함수 내용이 이후에 절대로 바뀔 수 없다

# 화살표 함수와 표현식 문

화살표 함수의 몸통은 function 때와는 다르게 중괄호를 사용할 수도 있고 생략할 수도 있다

- 중괄호 사용 여부에 따라 타입스크립트 문법이 동작하는 방식이 실행문 방식과 표현식 문 방식으로 달라진다

```tsx
const arrow1 = (a: number, b: number): number => {
  return a + b;
};
const arrow2 = (a: number, b: number): number => a + b;
```

### 실행문과 표현식 문

똑같이 CPU 에서 실행되는 구문이라도 키워드 없이 결괏값을 반환는 실행문

### 복합 실행문

- 프로그래밍 언어에서 if와 같은 구문은 조건을 만족하면 단순히 한 줄의 실행문만을 실행하는 형태로 설계한다
- 복합 실행문은 중괄호 {}를 사용해 이용한다
  - 복합 실행문은 컴파일러로 하여금 여러 실행문을 한 개처럼 인식하게 한다

```tsx
if(조건식){
 실행문 1
 실행문 2
}
```

### 함수 몸통과 복합 실행문

function 키워드로 만드는 함수는 반드시 몸통을 중괄호로 감싸야 한다

- 함수 몸통은 여러 줄로 구현할 수 있다

```tsx
function f() {
  let x = 1,
    y = 2;
  let result = x + y + 10;
}
```

### return 키워드

- return 키워드는 반드시 함수 몸통에서만 사용할 수 있다는 제약이 있다

### 표현식 문 스타일의 화살표 함수 구현

```tsx
const isFreater = (a: number, b: number): boolean => a > b;
```

### 표현식과 표현식 문의 차이

표현식 이란 용어는 두 가지 형태로 사용되는데, 이 둘을 구분하고자 표현식과 표현식 문으로 구분한 것이다

### 실행문을 만드는 세미콜론

타입스크립트에서는 관습적으로 표현식 문에는 세미콜론을 붙이지 않는다

# 일등 함수 살펴보기

### 콜백 함수

매개변수 형태로 동작하는 함수

```tsx
const f = (callback: () => void): void => callback();
```

### 중첩 함수

함수형 언어에서 함수는 변수에 담긴 함수 표현식이므로 함수 안에 또 다른 함수를 중첩해서 구현할 수 있다

### 고차 함수와 클로저, 그리고 부분 함수

고차함수란 또 다른 함수를 반환하는 함수를 말한다

```tsx
const add2 =
  (a: number): ((number) => number) =>
  (b: number): number =>
    a + b;
```

# 함수 구현 기법

### 매개변수 기본값 지정하기

선택적 매개변수는 항상 그 값이 undefined로 고정된다. 함수 호출 시 인수를 전달하지 않더라도 매개변수에 어떤 값을 설정하고 싶다면 매개변수의 기본값을 지정할 수 있다. 이를 디폴트 매개변수라고 한다

```tsx
(매개변수: 타입 = 매개변수 기본값)
```

### 객체 생성 시 값 부분을 생략할 수 있는 타입스크립트 구문

타입스크립트는 매개변수의 이름과 똑같은 이름의 속성을 가진 객체를 만들 수 있다

```tsx
const makePerson = (name: string, age: number) => {
  const person = { name, age };
};
```

### 객체를 반환하는 화살표 함수 만들기

```tsx
export const makePerson = { name: string, age: number };
```

### 매개변수에 비구조화 할당문 사용하기

함수의 매개변수도 변수의 일종이므로 비구조화 할둥문을 적용할 수 있다

```tsx
export type Person = { name: string; age: number };

const printPerson = ({ name, age }: Person): void =>
  console.log(`name: ${name}, age: ${age}`);
```

### 색인 키와 값으로 객체 만들기

타입스크립트에서는 {[key] : value} 형태의 타입을 색인 가능 타입 이라고 한다

```tsx
type KeyType = {
  [key: string]: string;
};
```

# 클래스 메서드

### function 함수와 this 키워드

- 타입스크립트에서는 function 키워드로 만든 함수에 this 키워드를 사용할 수 있다
- 화살표 함수에는 this 키워드를 사용할 수 없다

### 메서드란?

메서드란 function으로 만든 함수 표현식을 담고 있는 속성이다

```tsx
export class A {
  value: number = 1;
  method: () => void = function (): void {
    console.log(`value: ${this.value}`);
  };
}
```

### 클래스 메서드 구문

타입스크립트는 클래스 속성 중 함수 표현식을 담는 속성은 function 키워드를 생략할 수 있게 하는 단축 구문을 제공한다

```tsx
export class B {
constructor(poblic value: number = 1) {}
method(): void {
  console.log(`vlaue;${this.value}`)
 }
}
```

### 정적 메서드

클래스와 메서드 속성은 static수정자를 앞에 붙여 정적 메서드를 만들 수 있다

```tsx
클래스이름.정적 메서드()
```

### 메서드 체인

객체의 메서드를 이어서 계속 호출하는 방식

- 타입스크립트로 메서드 체인을 구현하려면 메서드가 항상 this를 반환한다

```tsx
${"#p1"}.css("color","red").slideUp(2000).slideDown(2000);
```

# 배열 이해하기

### [ ] 단축 구문

```tsx
let numbers = [1, 2, 3];
let strings = ["hi", "world"];
```

### 자바스크립트에서 배열은 객체다

자바스크립트에서 배열은 다른 언어와 다르게 객체이다. 배열은 array 클래스의 인스턴스인데 클래스의 인스턴스는 객체이기 때문이다

### 배열의 타입

타입스크립트에서 배열의 타입은 ‘아이템 타입[]’ 이다

```tsx
let strArray: string[] = ["hello", "world"];
let numArray: number[] = [1, 2, 3];
```

### 문자열과 배열 간 변환

- 타입스크립트에서는 문자 타입이 없고 문자열의 내용 또한 변경할 수 없다
- 문자열을 배열로 전환할 때는 String 클래스의 split 메서드를 사용한다

```tsx
split(구분자: string): string[]
```

### 인덱스 연산자

배열이 담고 있는 아이템 중 특정 위치에 있는 아이템을 얻고자 할 떄는 인덱스 연산자[인덱스]를 사용한다

- 인덱스 연산자는 배열의 특정 위치에 있는 아이템을 얻는다

```tsx
const numbers: number[] = [1, 2, 3, 4, 5];
for (let index = 0; index < numbers.length; index++) {
  const item: number = numbers[index];
}
```

### 배열의 비구조화 할당

객체뿐만 아니라 배열에도 비구조화 할당을 적용할 수 있다

```tsx
let array: number[] = [1, 2, 3, 4, 5];
let [first, second, third, ...rest] = array;
```

### for…in 문

for in 문은 객체를 대상을 사용하지만 배열도 객체이므로 배열에 사용할 수도 있다

```tsx
for(변수 in 객체) {
  ...
}
```

- for…in 문은 배열의 인덱스값을 순회한다
- for…in 문에 객체를 사용할 때는 객체가 가진 속성을 대상으로 순회한다

```tsx
let jack = { name: "jack", age: 18 };
for (let property in jack) console.log(`${property}: ${jack[property]}`);
```

### for…of 문

for of 문은 배열의 아이템값을 대상을 순회한다

```tsx
for(let 변수 of 객체) {
  ...
}
```

### 제네릭 방식 타입

타입을 T와 같은 일정의 변수(타입 변수)로 취급하는 것

```tsx
const arrLength = (array: T[]): number => array.length;
```

### 제네릭 함수의 타입 추론

타입스크립트는 타입 변수가 생략된 제네릭 함수를 만나면 타입 추론을 통해 생략된 타입을 찾아낸다

### 제네릭 함수의 함수 시그니처

타입스크립트는 어떤 경우 함수 시그니처의 매개변수 부분에 변수 이름을 기입하라고 요구한다

```tsx
const f = <T,>(cd: (arg: T, i?: number) => number): void => {};
```

### 전개 연산자

점 세 개가 나란히 있는 . . .을 말한다

- 전개 연산자는 배열에도 적용할 수 있다

```tsx
let mergedArray: number[] = [...array1];
```

### range 함수 구현

- range 함수는 재귀 함수 스타일로 동작하며 from 에서 to 까지 수로 구성된 배열을 생성해준다

# 선언형 프로그래밍과 배열

### 명령형 프로그래밍이란?

프로그램의 기본 형태는 입력 데이터를 얻고 가공한 다음, 결과를 출력하는 형태로 구성된다

- 명령어 프로그래밍에서는 여러 개의 데이터를 대상으로 할 때 for 문을 사용해서 구현한다
- 선언형 프로그래밍은 시스템 자원의 효울적인 운용보다느 일괄된 문제 해결 구조에 더 집중한다
  - 선언형 프로그래밍은 명령형 프로그래밍처럼 for 문을 사용하지 않고 모든 데이터를 배열에 담는다

### fold : 배열 데이터 접기

함수형 프로그래밍에서 폴드는 특별한 의미가 있는 용어다

- 폴드 함수는 T[ ] 타입 배열을 가공해 T 타입 결과를 만들어 준다

### filter : 조건에 맞는 아이템만 추려내기

함수형 프로그래밍에서 흔히 보는 filter라는 이름의 함수는 입력 배열을 가공해 조건에 맞는 값만 추려내는 기능을 한다

### map : 배열 데이터 가공하기

# 배열의 map,reduce,filter 메서드

### filter 메서드

- 배열의 타입이 T[]일 때 배열의 filter 메서드

```tsx
filter(callback: (value: T, index?: number): boolean): T[]
```

### map 메서드

- 배열의 타입이 T[ ]일 때 배열의 map 메서드
  - filter와 달리 map 메서드는 입력 타입과 다른 타입의 배열을 만들 수 있다

```tsx
map(callback: (value: T, index?: number): Q): Q[]
```

### reduce 메서드

fold 함수는 타입스크립트 배열의 reduce 메서드로 대체할 수 있다

- 배열의 타입이 T[]일 때 배열의 reduce 메서드

```tsx
reduce(callback: (result: T, value: T), initiaValue: T): T
```

# 순수 함수와 배열

### 순수 함수란?

순수 함수는 부수 효과가 없는 함수를 말한다

- 부수 효과란 함수가 가진 고유한 목적 이외에 다른 효과가 나타나는 것을 의미하며 부작용이라고도 한다.
- 순수 함수 조건
  - 함수 몸통에 입출력 관련 코드가 없어야 한다
  - 함수 몸통에서 매개변숫값을 변경시키지 않는다
  - 함수는 몸통에서 만들어진 결과를 즉시 반환한다
  - 함수 내부에 전역 변수나 정적 변수를 사용하지 않는다
  - 함수가 예외를 발생시키지 않는다
  - 함수가 콜백 함수로 구현되었거나 함수 몸통에 콜백 함수를 사용하는 코드가 없다
  - 함수 몸통에 Promise와 같은 비동기 방식으로 동작하는 코드가 없다

```tsx
function pure(aL number, b: number): number {return a+b}
```

### 타입 수정자 readonly

타입스크립트는 순수 함수 구현을 쉽게 하도록 readonly 키워드를 제공한다

- readonly 타입으로 선언된 매개변숫값을 변경하는 시도가 있으면 문제가 있는 코드라고 알려줘서 불순 함수가 되지 않게 방지한다

### 불변과 가변

- 변수가 const나readonly를 명시하고 있으면 변숫값은 초깃값을 항상 유지해야한다. 이런 변수는 변경할 수 없다는 의미로 불변 변수라고 한다
- let이나 readonly를 명시하지 않은 변수는 언제든 값을 변경할 수 있다. 이런 변수는 변경할 수 있다는 의모로 가변 변수라고 한다

### 깊은 복사와 얕은 복사

순수 함수를 구현할 때는 매개변수가 불변성을 유지해야 하므로, 매개변수를 가공하려고 할 때 깊은 복사를 실행해 매개변숫값이 변경되지 않게 해야 한다

- 깊은 복사는 대상 변숫값이 바뀔 때 원본 변숫값은 그대로인 형태로 동작한다

```tsx
let original = 1;
let copied = original;
copied += 2;
console.log(original, copied);
```

### 전개 연산자와 깊은 복사

전개 연산자를 사용해 배열을 복사하면 깊은 복사를 할 수 있다

```tsx
const Array = [1, 2, 3, 4]
const deepCopiedArray = [...Array]
console.log(Array,deepCopieArray
```

### 배열의 sort 메서드를 순수 함수로 구현하기

Array 클래스는 sort 메서드를 제공해 배열의 아이템을 오름차순 혹은 내림차순으로 정렬해준다

```tsx
export const pureSort = <T,>(array: readonly T[]): T[] => {
  let deepCopied = [...array];
  return deepCopide.sort();
};
```

### 배열의 filter 메서드와 순수한 삭제

- 배열의 splice 메서드는 순수 함수에서 사용 불가함
- 특정 아이템을 삭제하는데 filter 메서드 사용가능

```tsx
export const pureDelete = <T,>(
  array: readonly T[],
  cd: (val: T, index?: number) => boolean
): T[] => array.filter((val, index) => cd(val, index) == false);
```

### 가변 인수 함수와 순수 함수

함수를 호출할 때 전달하는 인수의 개수를 제한하지 않는 것을 가변인수라고 한다

```tsx
export const mergeArray = <T>(..arrays: readonly T[][]): T[] =? {}
```

# 튜플 이해하기

### 튜플에 타입 별칭 사용하기

튜플을 사용할 때는 타입 별칭으로 튜플의 의미를 명확하게 한다

```tsx
export type ResultType = [boolean, string];
```

### 튜플에 적용하는 비구조화 할당

튜플은 물리적으로는 배열이므로 배열처럼 인텍스 연산자나 비구조화 할당문을 적용할 수 있다

```tsx
import {doSomething} from  './doSomething'

const [result,errorMessage] doSomething()
console.log(result,errorMessage)
```

# 반복기 이해하기

### 반복기와 반복기 제공자

- 반복기 특징
  - next 라는 이름의 메서드를 제공한다
  - next 메서드는 value와 done 이라는 두개의 속성을 가진 객체를 반환한다
- 반복기 제공자 : 반복기를 제공하는 역할을 하는 함수

```tsx
import { createRangeIterable } from "./createRangeIterable";
const iterator = createRangeIterable(1, 3 + 1);
while (true) {
  const { value, done } = iterator.next();
  if (done) break;
  console.log(value);
}
```

### 반복기는 왜 필요한가?

### for…of 구문과 Symbol.iterator 메서드

### Itrable<T>와 Iterator<T> 인터페이스

타입스크립트 반복기 제공자에 Iterable<T>와 Iterator<T> 제네릭 인터페이스를 사용할 수 있다

- Iterable<T>는 다음처럼 자신을 구현하는 클래스가 [Symbol.iterator] 메서드를 제공한다는 것을 명확하게 알려주는 역할을 한다

```tsx
class 구현 클래스 implements Iterable<생성할 값의 타입> {}
```

- Iterator<T>는 반복기가 생성할 값의 타입을 명확하게 해준다

```tsx
[Symbol.iterator](): Iterator<생성할 값의 타입> {}
```

# 생성기 이해하기

function\* 키워드로 만든 함수를 생성기라고 한다

### setlnterval 함수와 생성기의 유사성

생성기가 동작하는 방식을 세미코루틴이라고 한다.세미코루틴은 타입스크립트 처럼 단일 스레드로 동작하는 프로그래밍 언어가 마치 다중 스레드로 동작하는 것처럼 보이게 하는 기능을 한다

### function\* 키워드

생성기는 오직 function\* 키워드로 선언해야 하므로 화살표 함수로는 생성기를 만들 수 없다

- 생성기는 반복기를 제공하는 반복기 제공자로서 동작한다

### yield 키워드

생성기 함수 안에서는 yield 문을 사용할 수 있다.yield는 연산자 형태로 동작한다

- 기능
  - 반복기를 자동으로 만들어 준다
  - 반복기 제공자 역할도 수행한다

### yield 반환값

yield 연산자는 값을 반환한다

### 동기와 비동기 API

운영체제가 제공하는 서비스를 API라고 한다

- 동기 :파일 내용을 모두 읽을 때 까지 프로그램 동작을 잠시 멈추는 방식의 API
- 비동기 : 프로그램의 동작을 멈추지 않는 대신 결과를 콜백 함수로 얻게 하는 비동기 방식의 API
  - 비동기 API의 콜백 함수를 특별히 비동기 콜백함수라고 한다

### readFileSync와 readFile API

### 단일 스레드와 비동기 API

타입스크립트또한 단일 스레드로 동작하므로 readFileSync와 같은 동기 API를 사용하지 말아야 한다

- 항상 비동기 방식으로 동작하는 API를 사용해 프로그램의 반응성을 훼손하지 말아야 한다

### 콜백 지옥

비동기 API를 사용하면 콜백 함수에서 다시 또 다른 비동기 API를 호출하는 코드를 만들때 코드가 매우 복잡해짐

- 복잡한 형태로 얽힌 콜백 구조를 콜백 지옥이라고 표현
- Promise는 이런 콜백 지옥에 빠진 코드를 좀 더 다루기 쉬운 형태의 코드로 만들려는 목적으로 고안되었다

# Promise 이해하기

- Promise 클래스를 사용하려면 일단 new 연산자를 적용해 프로미스 객체를 만들어야 한다

```tsx
const promise = new Promise(콜백 함수)
```

- Promise의 콜백 함수는 resolve와 reject라는 두 개의 매개변수를 가진다

```tsx
new Promise<T>((resolve: (sucessValue: T) => void, reject: (any) => void) => {
  //코드 구현
});
```

- 타입스크립트에서 Promise는 제네릭 클래스 형태로 사용한다

```tsx
const numPromise: Promise<number> = new Promise<number>(콜백 함수)
```

### resolve 와 rejcet 함수

### Promise.resolve 메서드

Promise 클래스는 resolve 라는 클래스 메서드를 제공한다

- Promise.resolve(값) 형태로 호출하면 항상 이 값은 then 메서드에서 얻을 수 있다

```tsx
Promise.resolve(1).then((value) => console.log(value));
```

### Promise.reject 메서드

Promise.reject(Error 타입 객체)를 호출하면 이 Error 타입 객체는 항상 catch 메서드의 콜백 함수에서 얻을 수 있다

```tsx
Promise.reject(new Error("에러 발생")).catch((err: Error) =>
  console.log("error:", err.message)
);
```

### then- 체인

Promise 객체에 then 메서드를 여러 번 호출하는 코드 형태를 then 체인 이라고 한다

```tsx
Promise.resolve(1)
 .then((value: number) => {
   console.log(value)
   return Promise.resolve(true)
})
 .then((value: boolean) => {
   console.log(value)
   return [1, 2, 3]
})
 .then((value: number[]) => {
   console.log(value)
   return {name: 'jack', age: 32}
```

### Promise.all 메서드

Promise.all 메서드는 Promise 객체들을 배열 형태로 받아 모든 객체를 대상으로 해소된 값들의 배열로 만들어 준다

- Promise.all 메서드는 이런 내용으로 구성된 또 다른 promise 객체를 반환하므로 해소된 값ㄷㄹ의 배열은 then 메서드를 호출해서 얻어야 한다
- 배열에 담긴 Promise 객체 중 거절 객체가 발생하면 더 기다리지 않고 해당 거절 값을 담은 promise.reject 객체를 반환한다

### Promise.rece 메서드

- Promise,rece 클래스 메서드는 배열에 담긴 프로미스 객체 중 하나라도 해소 되면 이 값을 담은 Promise.resolve 객체를 반환한다.
- 거절 값이 가장 먼저 발생하면 Promise.reject 객체를 반환한다

# async와 await 구문

### await 키워드

- await 키워드는 피연산자의 값을 반환해 준다
- 피연산자가 Promise 객체이며 then 메서드를 호출해 얻은 값을 반환해 준다

```tsx
let value = await Promise 객체 혹은 값
```

### async 함수 수정자

- await 키워드는 항상 async 라는 이름의 함수 수정자가 있는 함수 몸통에서만 사용할 수 있다

```tsx
//화살표 함수 형태의 async
export const test1 = async () => {
 let value = await 1
 console.log(value)
 value = await Promise.resolve(1)
 console.log(value)
}
//function 함수 형태의 async
export const function test2() {
 let value = await 'hello'
 console.log(value)
 value = await Promise.resolve('hello')
 console.log(value)
}
```

### async 함수의 두 가지 성질

- 일반 함수처럼 사용할 수 있다
- Promise 객체로 사용할 수 있다

### async 함수가 반환하는 값의 의미

async 함수는 값을 반환할 수 있다

- 반환값은 Promise 형태로 변환되므로 then 메서드를 호출해 async 함수의 반환값을 얻어야 한다

```tsx
const asyncReturn = async () => {
  return [1, 2, 3];
};

asyncReturn().then((value) => console.log(value));
```

### async 함수의 예외 처리

async 함수에서 예외가 발생하면 프로그램이 비정상으로 종료된다

- 예외가 발생해서 프로그램이 비정상으로 종료하는 상황을 막는 방법
  - asyncException 을 단순히 asyncException() 형태의 함수 호출 방식이 아닌 asyncException()이 반환하는 프로미스 객체의 catch 메서드를 호출하는 형태로 코드를 작성해야 한다
  ```tsx
  const asyncException = async () => {
    throw new Error("error");
  };
  asyncException().catch((err) => console.log("error:", err.message));
  ```
  - await 구문에서 Promise.reject 값이 발생하면 프로그램이 비정상으로 종료한다
