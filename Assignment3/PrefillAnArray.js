function prefill(numberofElements, value) {
  if (/\D/g.test(numberofElements) || numberofElements < 0) { throw new TypeError(numberofElements + ' is invalid') }
  return Array.apply(null, new Array(parseInt(numberofElements, 10))).map(function () { return value; });
}