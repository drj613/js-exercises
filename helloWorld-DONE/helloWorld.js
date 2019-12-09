const helloWorld = function(name) {
  if (name === undefined) {
    name = "World";
  }
  return 'Hello, ' + name + '!'
}

module.exports = helloWorld
