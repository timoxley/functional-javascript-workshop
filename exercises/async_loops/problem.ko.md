이 코드는 동작하지 않습니다!

어떤 자바 개발자가 이 끔찍한 코드를 우리에 코드베이스에 테스트도 안 하고 커밋했습니다!

```js
function loadUsers(userIds, load, done) {
  var users = []
  for (var i = 0; i < userIds.length; i++) {
    users.push(load(userIds[i]))
  }
  return users
}

module.exports = loadUsers
```

# 해야할 일

이 코드를 고치세요! 콜백은 모든 사용자가 로드된 후에 호출되어야만 합니다.
사용자의 순서는 공급된 사용자의 아이디의 순서와 일치해야 합니다. 이 함수는 비동기적이기 때문에, 반환 값을 걱정하지 않아도 됩니다.

## 인자

* userIds: 사용자 아이디(숫자)의 배열
* load: 사용자 객체를 불러올 때 사용하는 함수. 숫자 아이디와 콜백을 받음. 콜백은 특정 아이디로 로딩된 사용자(사용자거나 널)와 함께 호출됩니다.
* done: (`load`로 검색된) 사용자 객체의 배열을 받는 함수.

## 조건

* for/while 반복문을 사용하지 마세요. (Array#forEach는 괜찮습니다.)
* `done`의 결과의 순서는 `userIds`의 순서와 같아야 합니다.
* 사용자들은 병렬로 로드되어야 합니다. 전체 작업은 1초 이상 걸리면 안 됩니다.
* 헬퍼 같은 불필요한 함수를 만들지 마세요.

## 힌트

* 순서를 관리하기 위해 정렬할 필요는 없습니다.
* `console.log`를 사용하면 확인에 영향을 줍니다. `console.log`는 `functional-javascript run` 할 때만 사용하세요.

## 템플릿

```js
function loadUsers(userIds, load, done) {
  var users = []
  for (var i = 0; i < userIds.length; i++) {
    users.push(load(userIds[i]))
  }
  return users
}

module.exports = loadUsers
```
