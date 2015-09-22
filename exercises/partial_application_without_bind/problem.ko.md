부분 애플리케이션을 사용해 이미 있는 함수로부터 인자의 개수를 고친 새로운 함수를 만들 수 있습니다. 부분적으로 적용할 인자를 설정한 후, 나머지 인자를 받아 원래 함수를 실행할 수도 있는 새로운 함수를 얻을 수 있습니다.

더 딱딱하게 말하면 부분 애플리케이션은 더 좁은 목적으로 사용하기 위한 함수를 만들기 위해 함수에 넘길 인자의 수를 고칠 때 참조됩니다.

예제로, 2개의 인자를 받아 더하는 `add`라는 함수가 있다고 합시다.

```js

function add(x, y) {
  return x + y
}

add(10, 20) // => 30

```

이제, `partiallyApply`라는 함수가 있다고 합시다. `partiallyApply`는 함수와 '부분적으로 사용할' 인자를 받습니다.

첫 번째 인자를 `add` 함수의 `x`로 '부분적으로 사용했습니다'.

```js

var addTen = partiallyApply(add, 10) // `x`를 10으로 고정

```

새로운 함수 `addTen`은 `add` 함수의 `y` 파라미터를 받습니다. `add`는 아직 호출되지 않았습니다!

`y`를 위한 인자를 넘기면, 원래 `add` 함수를 실행할 수 있습니다.

```js

addTen(20) // => 30
addTen(100) // => 110
addTen(0) // => 10

// 등등

```

위에 있는 예제는 모두 `add(10, y)`를 호출하는 것과 같고 `y`는 `addTen`이라고 적절히 이름 지은 호출에 공급됩니다.

# 해야할 일

부분 애플리케이션을 사용해 `console.log`에 넘길 첫 번째 인자를 고정하는 함수를 만드세요. 다시 말해 출력 앞에 네임스페이스를 붙일 수 있는 로그 함수를 구현하세요.


구현은 네임스페이스 문자열을 받아야 하고 콘솔에 네임스페이스가 앞에 붙은 메시지를 출력하는 함수를 반환해야 합니다.

부분 애플리케이션을 구현하기 위해 `Function#apply`를 사용해야 합니다.

반환되는 로그 함수에서 *모든* 인자가 넘겨지고 출력되어야 합니다.

** 결과를 콘솔에 직접 출력하세요 **

## 인자

* 네임스페이스: 반환하는 함수에 넘겨질 각 메시지의 앞에 붙을 문자열

## 예제

```js

var info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info
```

## 조건

* Function#bind를 사용하지 말 것
* Function#apply를 사용할 것

## 템플릿

```js

var slice = Array.prototype.slice

function logger(namespace) {
  // 여기에 해답을 적으세요
}

module.exports = logger

```

## 참고

* https://en.wikipedia.org/wiki/Partial_application
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

## 힌트

`console.log`는 개수와 상관없이 인자를 받을 수 있으며 공백으로 구분해 출력합니다.

```js

console.log('hello', 'world') // => 'hello world'
console.log(1,2,3) // => 1 2 3

```

`console.log`에 넘길 첫 번째 인자를 '부분 적용'하고 싶을 뿐입니다.

`Function.prototype.apply`를 사용하면 'this의 값'을 새로 제공해 함수를 실행하고 *인자의 배열을 함수에 적용*할 수 있습니다.


```js

add(10, 20) // => 30
add.apply(null, [10, 20]) // => 30

```

`apply`를 `Function.prototype.call`과 비교하면 이렇습니다.

```js

add.apply(null, [10, 20]) // => 30
add.call(null, 10, 20) // => 30

```
