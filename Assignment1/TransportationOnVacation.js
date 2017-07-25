function TotalRentalCarCost(d) {
 
  // d is the number of days
    if (d >= 3 && d < 7)
    {
      console.log((d*40)-20);
    }
  
    else if(d>=7){
      console.log((d*40)-50);
      }
    else
      console.log(d*40);
 }
