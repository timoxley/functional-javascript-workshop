# 해야할 일

다음 코드의 for 반복문을 Array#map으로 바꾸세요.

```js
function doubleAll(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}

module.exports = doubleAll
```

## 인자

* numbers: 0에서 9사이의 정수를 0~20개 가지는 배열

## 조건

* Array.prototype.map()을 사용하셔야 합니다.
* for/while 반복문이나 Array.prototype.forEach를 사용하지 마세요.
* 헬퍼 같은 불필요한 함수를 만들지 마세요.

## 참고

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## 템플릿

```js
function doubleAll(numbers) {
  // 여기에 해답을 적으세요
}

module.exports = doubleAll
```
