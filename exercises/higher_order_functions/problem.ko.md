고차(higher-order) 함수는 다음 중 하나에 해당하는 함수입니다.

* 입력으로 하나 이상의 함수를 받음
* 함수를 반환

여기 해당하지 않는 함수는 전부 1차(first order) 함수입니다. [1]

다른 많은 언어의 구현과는 달리, JavaScript는 "first-class functions"을 가지고 있기 때문에 높은 순위 함수를 이용할 수 있습니다. 이 말은 함수를 JavaScript 안의 다른 값들처럼 사용할 수 있다는 이야기입니다. 문자열이나 숫자처럼, 함수 값은 변수나 객체의 프로퍼티나 다른 함수에 인자로 넘길 수 있습니다. 함수 값은 사실은 객체(`Function.prototype`으로부터 상속됨)입니다. 그래서 거기에 다른 객체와 마찬가지로 프로퍼티를 추가하고 값을 저장할 수 있습니다.

JavaScript의 다른 형과 함수의 중요한 차이점은 호출 구문입니다. `someFunctionValue(arg1, arg2, etc)`처럼 함수의 참조 뒤에 괄호와 함께 쉼표(,)로 구별되는 값들이 온다면, 함수의 몸통은 (있다면) 주어진 인자로 실행 될 것입니다.

이 예제에서는 함수를 인자로 넘겨봄으로써 함수는 값처럼 넘길 수 있다는 것을 보여드리겠습니다.

# 해야할 일

첫 번째 인자로 함수, 두 번째 인자로 숫자 `num`을 받아 넘겨진 함수를 `num`번 실행하는 함수를 구현하세요.

시작할 때 아래의 템플릿을 사용하세요. 앞으로 대부분의 연습 문제는 템플릿이 제공됩니다.

## 인자

* operation: 인자를 받지 않고 유용한 값을 반환하는 함수
* num: `operation`을 호출할 횟수

## 참고

* https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype

## 힌트

* 너무 깊게 생각하지 마세요. 생각보다 간단합니다.
* 구현에 재귀를 사용하고 있다면 반복문을 사용하셔도 됩니다. (보너스 포인트)
* 넘겨진 함수에서 하는 출력을 볼 수도 있습니다.
* 아무것도 console.log할 필요 없습니다.

## 템플릿

```js
function repeat(operation, num) {
  // 여기에 해답을 적으세요
}

// 밑의 줄을 지우지 마세요
module.exports = repeat
```
