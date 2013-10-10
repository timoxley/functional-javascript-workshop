function Lookup(context, property) {
  if (!context) return undefined
  if (Object.prototype.hasOwnProperty.call(context, property)) return context[property]
  return Lookup(context.__PROTO__, property)
}

function Create(proto) {
  return {
    __PROTO__: proto
  }
}

function New(Type) {
  var obj = Create(Type.PROTOTYPE)
  var args = [].slice.call(arguments, 1) // remove Type arg
  var result = Type.apply(obj, args)
  if (typeof result !== 'undefined') return result
  return obj
}

module.exports = {
  Lookup: Lookup,
  Create: Create,
  New: New
}
