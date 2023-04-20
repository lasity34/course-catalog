function tutorOvertimeWageCalculator(payPerHour, level) {
    const hours = payPerHour.split("-");
    let calculatedPay = 0;
    let totalHours = 0;

    if (hours.length > 7 || hours.length < 5) {
        return 0;
    }

    for (let i = 0; i < hours.length; i++) {
        const hoursLooped = parseInt(hours[i], 10);

        if (level === 1) {
            calculatedPay += 75 * hoursLooped;
        } else if (level === 2) {
            calculatedPay += 90 * hoursLooped;
        } else if (level === 3) {
            calculatedPay += 105 * hoursLooped;
        }

        totalHours += hoursLooped;
    }

    if (totalHours > 40) {
        let overtimeHours = totalHours - 40;

        if (level === 1) {
            calculatedPay = overtimeHours * 1.07 * 75;
        } else if (level === 2) {
            calculatedPay = overtimeHours * 1.09 * 90;
        } else if (level === 3) {
            calculatedPay = overtimeHours * 1.12 * 105;
        }
    }

 

    return calculatedPay;
}