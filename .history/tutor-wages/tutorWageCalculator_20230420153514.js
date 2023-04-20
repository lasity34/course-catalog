

// function tutorWageCalculator(payPerHour, level){
    
//     let hourlyPay  = payPerHour.split("-")
        
//      let totalPay = 0
//     for (let i = 0; i < hourlyPay.length; i++) {

//         const loopedPay = hourlyPay[i];

//         if (level === 1) {
//             totalPay += 75 * loopedPay
//         } else if (level === 2) {
//             totalPay += 90 * loopedPay
//         } else if (level === 3) {
//             totalPay += 105 * loopedPay
//         }
//     }

   
//     return tot

    
// }

function tutorWageCalculator(payPerHour, level) {
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

        if (hourlyRates.length >= 7 || hourlyRates.length <= 5) {
            calculatedPay = 0
        }
    }

    return calculatedPay;
}