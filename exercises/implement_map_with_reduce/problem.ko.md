# 해야할 일

Array#reduce를 사용해 단순한 Array#map을 구현하세요.

## 예상 출력

`map` 함수는 배열의 각 요소에 함수를 적용한 결과를 새로운 배열에 수집합니다.

```js

var nums = [1,2,3,4,5]

// `map`은 당신이 export한 함수
var output = map(nums, function double(item) {
  return item * 2
})

console.log(output) // => [2,4,6,8,10]

```

## 인자

* input: 어떤 형도 넣을 수 있는 임의의 배열
* operation: `input` 안의 요소에 적용할 수 있는 임의의 함수

## 참고

* https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

## 템플릿

```js

module.exports = function arrayMap(arr, fn) {
  // 여기에 해답을 적으세요
}

```

