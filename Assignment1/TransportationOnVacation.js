function rentalCarCost(d) {
    // d is the number of days
    var totalCost;
    if (d >= 3 && d < 7) {
        totalCost = (d * 40) - 20;
    }
    else if (d >= 7) {
        totalCost = (d * 40) - 50;
    }
    else
        totalCost = d * 40;
    return totalCost;
}