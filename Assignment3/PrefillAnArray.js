function prefill(n, v) {
  if (/\D/g.test(n) || n < 0) { throw new TypeError(n + ' is invalid') }
  return Array.apply(null, new Array(parseInt(n, 10))).map(function () { return v; });
}