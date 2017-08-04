function compose() {
  var functions = arguments;
  return function(value) {
    var num = value;
    for ( var fid in functions )
      num = functions[functions.length - fid - 1](num);
    return num;
  }
}
