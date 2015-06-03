# 해야할 일

**Function#bind를 사용해** 메시지에 이름공간(namespace)을 사용할 수 있는 로그 함수를 구현하세요.

구현은 이름공간 문자열을 받아야 하고 콘솔에 이름공간이 앞에 붙은 메세지를 출력하는 함수를 반환해야 합니다.

반환되는 로그 함수에서 *모든* 인자가 넘겨지고 출력되어야 합니다.

** 결과를 콘솔에 직접 출력하세요 **

## 인자

* 이름공간: 반환하는 함수에 넘겨질 각 메시지의 앞에 붙을 문자열

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

* Function#bind를 사용할 것

## 템플릿

```js

module.exports = function(namespace) {
  // 여기에 해답을 적으세요
}

```

## 참고

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
