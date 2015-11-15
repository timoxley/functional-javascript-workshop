JavaScript는 'duck' 타이핑을 구현합니다. 덕 타이핑은 동적 타이핑의 형식입니다. 이는 특정 클래스에서 상속받는 것이나 특정 인터페이스의 구현 방식이 아닌, 객체의 메소드와 속성을 통해 바른 형식이 무엇인지 결정합니다. 이 개념의 이름은 James Whitcomb Riley가 만든 덕 데스트에 기인하고 다음 문장으로 요약할 수 있습니다.

  "오리처럼 걷고, 오리처럼 수영하고, 오리처럼 꽥꽥대는 새가 있다면, 나는 그 새를 오리라 부르겠다"

JavaScript에서 탄탄한 프로그램을 작성하려다보면 종종 객체가 우리가 원하는 형인지 확인할 필요가 있습니다.

객체가 직접 구현한 프로퍼티를 '가지고' 있는지를 확인하려면 (즉, 프로토타입에서 상속되지 않았는지 확인하려면) Object#hasOwnProperty를 사용할 수 있습니다.

```js
var duck = {
  quack: function() {
    console.log('quack')
  }
}

duck.hasOwnProperty('quack') // => true
```

duck에 .hasOwnProperty 메소드를 구현한 적이 없는데 어디서 왔을까요?

duck은 `{}` 구문으로 만들어졌으므로 Object.prototype을 상속받습니다.

```js
var object = {quack: true}

Object.getPrototypeOf(object) === Object.prototype // => true
object.hasOwnProperty('quack')                     // => true
```

Object.prototype에서 상속되지 않은 객체라면 어떨까요?

```js
// 'null' 프로토타입으로 객체를 생성.
var object = Object.create(null)
object.quack = function() {
  console.log('quack')
}

Object.getPrototypeOf(object) === Object.prototype // => false
Object.getPrototypeOf(object) === null             // => true

object.hasOwnProperty('quack')
// => TypeError: Object object has no method 'hasOwnProperty'
```

'객체처럼 보이는 것'에 `this` 값과 같이 호출할 수 있다면 `Object.prototype`를 통해 `hasOwnProperty`를 사용할 수 있습니다. Function#call을 사용하면 변경된 `this` 값으로 어떤 함수든 호출할 수 있습니다.

```js
// 호출할 때 넘기는 첫 번째 인자는 `this`의 값이 됩니다
// 나머지 인자는 함수에 넘기는 인자가 됩니다

Object.prototype.hasOwnProperty.call(object, 'quack') // => true
```

# 해야할 일:

'quack' 프로퍼티가 직접 정의된 인자의 개수를 반환하는 `duckCount` 함수를 작성하세요. 프로토타입에서 상속된 값은 제외하셔야 합니다.

예제:

```js
var notDuck = Object.create({quack: true})
var duck = {quack: true}
duckCount(duck, notDuck) // 1
```
## 인자

* 0-20개의 인자를 넘깁니다. 각 인자는 어떤 프로퍼티도 가질 수 있는 모든 형이 가능합니다. 몇몇 인자는 'quack' 프로퍼티를 가집니다.

## 조건

* for/while 반복문이나 Array#forEach를 사용하지 마세요.
* counter/accumulator 변수를 만들지 마세요.
* 헬퍼 같은 불필요한 함수를 만들지 마세요.

## 힌트

* 모든 함수에서 사용할 수 있는 `arguments` 변수는 *배열*처럼 'quack'하는 *객체*입니다.

```js
{
  0: 'argument0',
  1: 'argument1', // etc
  length: 2
}
```

## 참고

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Array-like
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments


## 템플릿

```js
function duckCount() {
  // 여기에 해답을 적으세요
}

module.exports = duckCount
```
