# 해야할 일

템플릿으로 주어진 재귀 `repeat` 함수를, 이벤트 루프를 중단하지 않도록(Timer와 IO 핸들러가 발동할 수 있도록) 수정하세요. repeat를 비동기적으로 만들 필요가 있습니다.

테스트의 결과를 출력하고 프로세스를 종료하는 타임아웃은 100 밀리 초 후에 발동하도록 예약되어 있습니다. 모든 연산이 완료되기 전에 타임아웃이 작업을 중단할 수 있도록 `repeat`는 이벤트 루프의 제어권을 해제해야 합니다.

timeout이 발동하기 전에 가능한 많은 작업을 수행해 보십시오!

## 조건

* 어떤 for/while 반복문이나 Array#forEach도 사용하지 마세요.
* 헬퍼 같은 불필요한 함수를 만들지 마세요.

## 힌트

* 프로그램의 수행시간이 오래 걸린다면, 뭔가 잘못된 것입니다.
  노드 프로세스를 죽이려면 Control - C를 사용하세요.

## 참고

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Timers

## 템플릿

```js
function repeat(operation, num) {
  // 도중에 중단될 수 있도록 이곳을 고치세요
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}

module.exports = repeat
```
