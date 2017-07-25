function rentalCarCost(d) {

    // d is the number of days
    if (d >= 3 && d < 7) {
        return (d * 40) - 20;
    }

    else if (d >= 7) {
        return (d * 40) - 50;
    }
    else
        return d * 40;
}