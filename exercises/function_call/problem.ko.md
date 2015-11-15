# 해야할 일

`Array.prototype.slice`를 사용하는 함수를 `slice.call`이나 `slice.apply`를 사용하지 않고 작성하세요.

일반적으로는 `slice`에는 `call`이나 `apply`가 필요합니다.

```js
var slice = Array.prototype.slice

function() {
  var args = slice.call(arguments) // this works
}
```

이렇게 동작하게 하고 싶습니다.

```js
var slice = yourFunction

function() {
  var args = slice(arguments) // this works
}
```

## 예제

`slice` 함수는 다음과 같이 사용할 수 있습니다.

```js
var nums = [1,2,3,4,5]

// slice 함수는 첫 번째 인자로 배열을 받는 것을 제외하고
// slice의 일반적인 행동과 같아야 합니다.

slice(nums, 0, 2) // [1, 2]
slice(nums, 1, 2) // [2]

// 비교를 위한 일반적인 slice의 사용법
nums.slice(0, 2) // [1, 2]
nums.slice(1, 2) // [2]
```

## 조건

* 어떤 for/while 반복문이나 Array#forEach도 사용하지 마세요.
* `function` 키워드를 사용하지 마세요. :D

## 힌트

* 한 줄이면 충분합니다.
* 모든 JavaScript 함수는 call, apply, bind 같은 메소드를 `Function.prototype` 객체로부터 상속합니다.
* Function#call은 호출될 때 `this`의 값을 실행합니다.  `someFunction.call()` 안에서 `this`의 값은 `someFunction`이 됩니다.
* Function.call 자체는 `Function.prototype`에서 상속되는 함수입니다.

```js
function myFunction() {
  console.log('called my function')
}

Function.prototype.call.call(myFunction) // => "called my function"
```

## 템플릿

```js
module.exports = // 여기에 해답을 적으세요
```
