function createFunctions(n) {
  var callbacks = [];
  for (var i=0; i<n; i++) {
    var func = (function(x) {
        return function() { return x;}
    })(i);
    callbacks.push(func);
  }
    return callbacks;
}


