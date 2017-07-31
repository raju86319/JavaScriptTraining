function rentalCarCost(totalDays) {
    var totalCost;
    if (totalDays >= 3 && totalDays < 7) {
        totalCost = (totalDays * 40) - 20;
    }
    else if (totalDays >= 7) {
        totalCost = (totalDays * 40) - 50;
    }
    else
        totalCost = totalDays * 40;
    return totalCost;
}