재귀는 알고리즘 문제를 우아하고 효과적으로 풀 수 있는 기초 프로그래밍 개념입니다. 사실, 재귀는 모든 반복 행동을 재귀 함수만으로 정의할 수 있을 정도로 강력합니다. 중첩된 데이터 구조를 반복할 때, 재귀는 필수적이라는 걸 아실 수 있을 겁니다.

재귀 함수는 자기 자신을 호출하는 함수입니다. 예를 들어, 이 재귀 함수는 단어의 배열을 받아, 단어를 대문자로 바꾼 배열을 반환합니다.

```js
function toUpperArray(items) {
   if (!items.length) return []             // 종료 조건
   var head = items[0]                      // 처리할 아이템
   head = head.toUpperCase()                // 행동 수행
   var tail = items.slice(1)                // 다음
   return [head].concat(toUpperArray(tail)) // 귀납적 단계
}

toUpperArray(['hello', 'world']) // => ['HELLO', 'WORLD']
```

이 연습 문제의 핵심은 인숙한 인터페이스를 재귀 함수로 구현해 재귀에 익숙해지는 것입니다.

# 해야할 일

재귀를 이용해 Array#reduce를 구현하세요.

reduce가 올바르게 동작하는지 테스트하기 위해 구현하신 reduce를 basic_reduce 해결책의 실행에 사용합니다. 즉, reduce 함수에 단어의 배열, 함수, 배열 안의 각 단어의 횟수를 반환할 객체의 초기값이 넘겨집니다. 구현하실 reduce에 넘겨지기 때문에 이 부분을 구현하실 필요는 없습니다.

단순하게 하기 위해, 구현하실 reduce에 **초기값이 없을 경우에 대한 대비를 하실 필요는 없습니다**. 초기값이 언제나 있으리라 가정하셔도 됩니다.

## 인자

* arr: reduce 할 배열
* fn: reduce 단계에서 사용할 함수. 일반 Array#reduce처럼, 이 함수에는 previousValue, currentValue, index, 반복할 배열을 넘겨야 합니다.
* init: reduce의 초기값. Array#reduce와는 다르게, 이 값은 필요합니다. (그리고 항상 제공된다고 가정합니다.)

## 예제

```js
// reduce 함수는 첫 번째 인자로 배열을 받는 것을
// 제외하고 일반 Array#reduce와 같은 동작을 합니다

reduce([1,2,3], function(prev, curr, index, arr) {
  return prev + curr
}, 0)
// => 6
```

## 조건

* for/while 반복문을 사용하지 마세요.
* Array#map이나 Array#reduce 같은 Array 메소드를 사용하지 마세요.

## 참고

* https://en.wikipedia.org/wiki/Recursion
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

## 템플릿

```js
function reduce(arr, fn, initial) {
  // 여기에 해답을 적으세요
}

module.exports = reduce
```
