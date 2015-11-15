# 해야할 일

주어진 문자열의 배열을 `Array#reduce`를 이용해 각 문자열이 배열에 나타난 숫자를 가지는 객체를 만드세요. 직접 객체를 반환해야 합니다.(console.log는 필요없어요.)

## 예제

```js
var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

console.log(countWords(inputWords))

// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }
```

## 인자

* inputWords: 임의의 문자열 배열

## 조건

* for/while 반복문이나 Array#forEach를 사용하지 마세요.
* 헬퍼 같은 불필요한 함수를 만들지 마세요.

## 참고

* https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

## 템플릿

```js
function countWords(inputWords) {
  // 여기에 해답을 적으세요
}

module.exports = countWords
```
