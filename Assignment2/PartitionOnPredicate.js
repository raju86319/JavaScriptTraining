function partitionOn(pred, items) {
  var trueitemsOnPredicate = items.filter(pred);
  var falseitemsOnPredicate = items.filter(function (a) {return !pred(a)});
  items.length = 0;
  items.push.apply(items, falseitemsOnPredicate.concat(trueitemsOnPredicate ));
  return falseitemsOnPredicate.length;
}
var items = [1,2,3,4,5,6];
function isEven(n) {return n % 2 == 0}
var i = partitionOn(isEven, items);