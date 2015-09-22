이 프로그램은 세 인자를 curries up하는 `curry3`의 구현 예제입니다.

```js
function curry3(fun){
  return function(one){
    return function(two){
      return function (three){
        return fun(one, two, three)
      }
    }
  }
}
```

이 구현을 이런 간단한 함수에 사용하려 한다고 해봅시다.

```js
function abc(one, two, three) {
  return one/two/three
}
```

이는 이렇게 동작할 것입니다.

```js
var curryC = curry3(abc)
var curryB = curryC(6)
var curryA = curryB(3)

console.log(curryA(2)) // => 1
```

# 해야할 일

이 도전 과제에서는, 임의의 수의 인자를 받는 'curry' 함수를 구현할 것입니다.

`curryN`은 두 파라미터를 받습니다.

* fn: curry할 함수.
* n: 생략할 수 있는 curry할 인자의 수. 주어지지 않으면 `curryN`은 fn의 인자를 `n`의 값으로 사용해야 함.

## 예제

```js
function add3(one, two, three) {
  return one + two + three
}

var curryC = curryN(add3)
var curryB = curryC(1)
var curryA = curryB(2)
console.log(curryA(3)) // => 6
console.log(curryA(10)) // => 13

console.log(curryN(add3)(1)(2)(3)) // => 6
```

## 조건

* 어떤 for/while 반복문이나 Array#forEach도 사용하지 마세요.

## 힌트

* 함수의 예상되는 인자의 수는 함수의 .length 속성을 확인해서 알 수 있습니다.

## 템플릿

```js
function curryN(fn, n) {
  // 여기에 해답을 적으세요
}

module.exports = curryN
```
