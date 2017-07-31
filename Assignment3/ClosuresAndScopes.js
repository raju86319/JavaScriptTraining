function createFunctions(numberOfFunctions) {
  var callbacks = [];
  for (var i = 0; i < numberOfFunctions; i++) {
    callbacks.push(makeCallback(i));
  }
  return callbacks;
}
function makeCallback(index) {
  return function () {
    return index;
  };
}