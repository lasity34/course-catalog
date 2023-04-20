

function tutorWageCalculator(payPerHour, level){
    
    let hourlyPay  = payPerHour.split("-")
   
     let totalPay = 0
    for (let i = 0; i < hourlyPay.length; i++) {

        const loopedPay = hourlyPay[i];

        if (level === 1) {
            totalPay += 75 * loopedPay
        } else if (level === 2) {
            totalPay += 90 * loopedPay
        } else if (level === 3) {
            totalPay += 105 * loopedPay
        }
    }

   
    return totalPay

    
}