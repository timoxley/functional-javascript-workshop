# 해야할 일

중복없이 모든 의존성과 모듈의 하위 의존성을 알파벳 순으로 반환하는 재귀 함수를 구현하세요. 의존성은 dependency@version (예: 'inflection@1.2.6')의 형식으로 출력해야 합니다.

같은 모듈의 여러 버전은 허용됩니다만, 같은 버전이 중복되면 제거해야 합니다.

## 인자:

* tree: 의존성 트리. 구조는 아래의 예제를 보세요.

## 예제

```js
var loremIpsum = {
  "name": "lorem-ipsum",
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
}

getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]

```

## 조건:

* for/while 반복문을 사용하지 마세요.

## 템플릿

```js

function getDependencies(tree) {
  // 여기에 해답을 적으세요
  // 주의: 이 함수를 재귀 호출할 수 있도록
  // 인자를 추가하셔도 됩니다
  // 필요 없을 수도 있습니다! 재귀를 구현하는 방법은 많습니다.
}

module.exports = getDependencies

```

## 참고

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
