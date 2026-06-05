// Engagement Rate calculations with half-life decay function
function calculateDecayedEngagement(views, interactions, hoursAgo) {
    if (views <= 0) return 0.0;
    const baseRate = (interactions / views) * 100;
    // Halflife decay: Rate * (0.5 ^ (hours / 24))
    const decayFactor = Math.pow(0.5, hoursAgo / 24);
    return baseRate * decayFactor;
}
module.exports = { calculateDecayedEngagement };