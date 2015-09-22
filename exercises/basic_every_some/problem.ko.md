# 해야할 일

유효한 사용자의 목록을 받아, 주어진 사용자가 원래 사용자의 목록에 있으면 true를 반환하는 함수를 반환하세요.

아이디가 같은지만 확인하면 됩니다.

## 예제

```js
var goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]

// 선언할 함수 이름은 `checkUsersValid`입니다
var testAllValid = checkUsersValid(goodUsers)

testAllValid([
  { id: 2 },
  { id: 1 }
])
// => true

testAllValid([
  { id: 2 },
  { id: 4 },
  { id: 1 }
])
// => false
```

## 인자

* goodUsers: 유효한 사용자의 목록

Array#some과 Array#every를 사용해 export된 함수에 넘겨진 배열에 반환된 함수에 넘겨진 모든 사용자가 있는지 확인하세요.

## 조건

* for/while 반복문이나 Array#forEach를 사용하지 마세요.
* 헬퍼 같은 불필요한 함수를 만들지 마세요.

## 참고

* https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
* https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some

## 템플릿

```js
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // 여기에 해답을 적으세요
  };
}

module.exports = checkUsersValid
```
