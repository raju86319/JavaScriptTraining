function partitionOn(predicate, items) {
    var filterTrueitems = [];
    var filterFalseitems = [];
    items.forEach(function (value) {
         predicate(value) ? filterTrueitems.push(value) : filterFalseitems.push(value);
    });
    items.length = 0;
    items.push.apply(items, filterFalseitems.concat(filterTrueitems));
    return filterFalseitems.length;
}