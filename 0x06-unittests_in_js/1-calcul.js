// 1-calcul.js

function calculateNumber(type, a, b) {
    // Round both numbers
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    // Perform operation based on 'type'
    if (type === 'SUM') {
        return roundedA + roundedB;
    } else if (type === 'SUBTRACT') {
        return roundedA - roundedB;
    } else if (type === 'DIVIDE') {
        // Check for division by zero
        if (roundedB === 0) {
            return 'Error';
        } else {
            // Perform division and round the result
            return Math.round(roundedA / roundedB * 10) / 10; // Round the result to one decimal place
        }
    }
}

module.exports = calculateNumber;
