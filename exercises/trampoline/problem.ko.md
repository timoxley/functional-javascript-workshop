템플릿은 `repeat`의 선언을 포함합니다. `repeat`는 함수 operation, 숫자 num을 받아, operation을 num번 수행합니다.

```js
var count = 0
repeat(function() {
  count++
}, 100)

console.log('executed %d times.', count)
// => executed 100 times.
```

하지만 `repeat`를 큰 `num`으로 수행하면 스택 오버플로가 일어날 수 있습니다.

```
var count = 0
repeat(function() {
  count++
}, 100000)

console.log('executed %d times', count)
// => RangeError: Maximum call stack size exceeded
```

# 해야할 일

trampoline을 사용해 지속적으로 동기 호출하도록 밑의 템플릿을 수정하세요.

반복되는 연산이 인자를 사용하지 않고(혹은 이미 기능에 바인딩되었고) 반환 값이 중요하지 않다고 생각해도 됩니다.

## 조건

* 반복문을 포함해 repeat의 구현을 변경하지 마세요.
(그래도 다른 방법으로 변경할 수 있습니다.)

## 힌트

* `repeat`를 수정해 다음 단계가 있다면 '다음 단계'를 반환하도록 하세요.
* trampoline은 다음 단계가 없을 때까지, 계속해서 동기적으로 단계를 실행하고 새로운 단계로 넘어갑니다. 여기에 반복문을 사용할 수 있습니다!
* 프로그램의 수행시간이 길다면, 무언가 잘못된 것입니다. 노드 프로세스를 죽이려면 Control - C를 사용하세요.

## 템플릿

```js
function repeat(operation, num) {
  // 스택 오버플로를 일으키지 않도록 수정하세요!
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}

function trampoline(fn) {
  // trampoline을 구현하셔야 합니다.
}

module.exports = function(operation, num) {
  // 여기서 trampoline을 호출하셔야 합니다!
  return repeat(operation, num)
}
```
