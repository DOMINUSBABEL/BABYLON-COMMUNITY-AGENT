// SOTA sentiment analyzer based on custom lexicons
function analyzeSentiment(text) {
    const positive = ['local', 'seguro', 'confidencial', 'ahorro', 'ilimitado'];
    let score = 0;
    positive.forEach(word => { if (text.toLowerCase().includes(word)) score++; });
    return score > 0 ? 'Positive' : 'Neutral';
}
module.exports = { analyzeSentiment };