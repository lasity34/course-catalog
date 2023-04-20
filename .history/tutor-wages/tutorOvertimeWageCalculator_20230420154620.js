

function tutorWageCalculator(payPerHour, level) {
    const hourlyRates = payPerHour.split("-");
    let calculatedPay = 0;
    let totalHours = 0
    for (let i = 0; i < hourlyRates.length; i++) {
        const hourlyRate = hourlyRates[i];

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

        if (hourlyRate > 40 && level === 1) {
            calculatedPay = calculatedPay * 1.07
        } else if (hourlyRate > 40 && level === 2) {
            calculatedPay = calculatedPay * 1.09
        } else if (hourlyRate > 40 && level === 3) {
            calculatedPay = calculatedPay * 1.12
        }




        if (hourlyRates.length > 7 || hourlyRates.length < 5) {
            calculatedPay = 0
        }

        
    }

    return calculatedPay;
}