

function tutorWageCalculator(payPerHour, level){
    
    const hourlyPay  = payPerHour.split("-")
   
    for (let i = 0; i < hourlyPay.length; i++) {

        const loopedPay = hourlyPay[i];

        if (level === 1) {
            hourlyRate += 75 * loopedPay
        } else if (level === 2) {
            hourlyRate += 90 * loopedPay
        } else if (level === 3) {
            hourlyRate += 105 * loopedPay
        }
    }

   


    return hourlyRate
}