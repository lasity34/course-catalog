
function tutorOvertimeWageCalculator(payPerHour, level) {
    const hourlyRates = payPerHour.split("-");
    let calculatedPay = 0;

    for (let i = 0; i < hourlyRates.length; i++) {
        const hourlyRate = hourlyRates[i];

        if (level === 1) {
            calculatedPay += 75 * hourlyRate;
        } else if (level === 2) {
            calculatedPay += 90 * hourlyRate;
        } else if (level === 3) {
            calculatedPay += 105 * hourlyRate;
        } 

        if (hourlyRates.length > 7 || hourlyRates.length < 5) {
            calculatedPay = 0
        }
    }

    return calculatedPay;
}