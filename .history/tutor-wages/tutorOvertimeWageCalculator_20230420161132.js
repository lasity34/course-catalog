

function tutorOvertimeWageCalculator(payPerHour, level) {
    const hours = payPerHour.split("-");
    let calculatedPay = 0;
    let totalHours = 0
    for (let i = 0; i < hourlyRates.length; i++) {
        const hoursLooped = hours[i];

        if (level === 1 ) {
            calculatedPay += 75 * hourlyRate ;
            totalHours += hourlyRate
        } else if (level === 2) {
            calculatedPay += 90 * hourlyRate;
            totalHours += hourlyRate
        } else if (level === 3) {
            calculatedPay += 105 * hourlyRate;
            totalHours += hourlyRate
        } 

       



            console.log(totalHours)
       


    
        if (hourlyRates.length > 7 || hourlyRates.length < 5) {
            calculatedPay = 0
        }
        
    }

    if (totalHours > 40 ) {
       let overtimeHours = totalHours - 40;
       const overtimePay = overtimeHours * 
    }


    return calculatedPay;
}