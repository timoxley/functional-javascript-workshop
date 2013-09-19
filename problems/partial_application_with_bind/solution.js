function logger(namespace) {
  return console.log.bind(console, namespace)
}

// do not edit below this line

$test(logger)
