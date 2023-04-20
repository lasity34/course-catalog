

function tutorOvertimeWageCalculator(level){
    
    let hourlyRate = 0

    if (level === 1) {
        hourlyRate += 75
    } else if (level === 2) {
        hourlyRate += 90
    } else if (level === 3) {
        hourlyRate += 105
    }


    return hourlyRate
}