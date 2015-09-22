# 해야할 일

객체의 특정 메소드를 오버라이드해 이전 기능을 유지하면서 새로운 기능을 추가하세요.

얼마나 함수가 호출되었는지 감시하는 스파이를 만드세요.

## 예제

```js
var spy = Spy(console, 'error')

console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

console.log(spy.count) // 3
```

## 인자

* target: `method` 메소드를 가지는 객체
* method: `target`에 있는 감시할 메소드 이름(문자열)

## 조건

* 어떤 for/while 반복문이나 Array#forEach도 사용하지 마세요.
* 헬퍼 같은 불필요한 함수를 만들지 마세요.

## 힌트

* 함수는 문맥, 입력, 출력을 가집니다. 감시하는 함수의 문맥, 입력, *출력*을 확실히 고려하세요.

## 템플릿

```js
function Spy(target, method) {
  // 여기에 해답을 적으세요
}

module.exports = Spy
```
