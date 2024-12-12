function calculateNumber(a, b) {
    return Math.ceil(a) + Math.round(b);  // Round first number with Math.ceil() and second with Math.round()
}

module.exports = calculateNumber;
