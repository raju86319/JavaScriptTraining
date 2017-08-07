Object.prototype.hash = function (string) {
    return string.split('.').reduce(function (p, n) {
        return p && p[n];
    }, this);
};
