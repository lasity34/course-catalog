

function tutorOvertimeWageCalculator(payPerHour, level) {
    const hours = payPerHour.split("-");
    let calculatedPay = 0;
    let totalHours = 0
    for (let i = 0; i < hours.length; i++) {
        const hoursLooped = hours[i];

        if (level === 1 ) {
            calculatedPay += 75 * hoursLooped ;
            totalHours +=  hoursLooped
        } else if (level === 2) {
            calculatedPay += 90 *  hoursLooped;
            totalHours +=  hoursLooped
        } else if (level === 3) {
            calculatedPay += 105 *  hoursLooped;
            totalHours +=  hoursLooped
        } 

       


    
        if (hours.length > 7 || hours.length < 5) {
            calculatedPay = 0
        }
        
    }

    if (totalHours > 40 ) {
       let overtimeHours = totalHours - 40;
       const overtimePay = overtimeHours * hours
       if (level === 1) {
        calculatedPay += overtimePay * 1.07;
    } else if (level === 2) {
        calculatedPay += overtimePay * 1.09;
    } else if (level === 3) {
        calculatedPay += overtimePay * 1.12;
    }
    }


    return calculatedPay;
}