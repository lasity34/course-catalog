
function tutorWageCalculator(payPerHour, level) {
    const hourlyRates = payPerHour.split("-");
    const calculatedPay = [];

    for (let i = 0; i < hourlyRates.length; i++) {
        const hourlyRate = parseFloat(hourlyRates[i]);

        if (level === 1) {
            calculatedPay.push(75 * hourlyRate);
        } else if (level === 2) {
            calculatedPay.push(90 * hourlyRate);
        } else if (level === 3) {
            calculatedPay.push(105 * hourlyRate);
        }
    }

    return calculatedPay;
}