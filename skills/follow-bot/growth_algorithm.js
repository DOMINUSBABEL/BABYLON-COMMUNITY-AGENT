// Follow bot growth constraints with smart Jitter delay
function getRandomDelay(baseSeconds, jitterRange) {
    const min = baseSeconds - jitterRange;
    const max = baseSeconds + jitterRange;
    // Return random delay in milliseconds
    return Math.floor((Math.random() * (max - min) + min) * 1000);
}
module.exports = { getRandomDelay };