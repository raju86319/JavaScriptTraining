function partitionOn(pred, items) {
    var filterTrueitems = [];
    var filterFalseitems = [];
    items.forEach(function (value) {
        if (pred(value)) {
            filterTrue.push(value);
        } else {
            filterFalse.push(value);
        }
    });
    items.length=0;
    items.push.apply(items, filterFalse.concat(filterTrue));
    return filterFalseitems.length;
}  