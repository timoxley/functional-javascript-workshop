# 해야할 일
Array#filter를 사용해 `getShortMessages`를 호출하는 함수를 작성하세요.

`getShortMessages`는 '.message' 프로퍼티를 가지는 배열을 받아 *50자보다 적은* 메시지의 배열을 반환합니다.

이 함수는 *메시지를 가진 객체가 아닌,* 메시지의 배열을 반환해야 합니다.

## 인자

* messages: 밑에 있는 것처럼 생긴 임의의 객체를 10~100개 가지는 배열

```js
{
  message: 'Esse id amet quis eu esse aute officia ipsum.' // 랜덤
}
```

## 조건

* for/while 반복문이나 Array#forEach를 사용하지 마세요.
* 헬퍼 같은 불필요한 함수를 만들지 마세요.

## 힌트

* 배열 메소드를 몇 개 연결해 보세요.

## 예제

```
[ 'Tempor quis esse consequat sunt ea eiusmod.',
  'Id culpa ad proident ad nulla laborum incididunt.',
  'Ullamco in ea et ad anim anim ullamco est.',
  'Est ut irure irure nisi.' ]
```

## 참고

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## 템플릿

```js
function getShortMessages(messages) {
  // 여기에 해답을 적으세요
}

module.exports = getShortMessages
```
