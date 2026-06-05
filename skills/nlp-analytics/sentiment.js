// Advanced Sentiment and Emotional Sub-tone Dictionary Analysis
const DICTIONARY = {
    "excelente": { score: 1.0, tone: "positive" },
    "sota": { score: 1.2, tone: "tech-heavy" },
    "error": { score: -1.0, tone: "negative" },
    "lento": { score: -0.8, tone: "negative" },
    "hegel": { score: 0.5, tone: "dialectical" }
};

function analyzeSentimentAndTone(text) {
    const words = text.toLowerCase().split(/\W+/);
    let totalScore = 0;
    let dominantTone = "neutral";
    let counts = { positive: 0, tech_heavy: 0, negative: 0, dialectical: 0 };
    
    words.forEach(w => {
        if (DICTIONARY[w]) {
            totalScore += DICTIONARY[w].score;
            counts[DICTIONARY[w].tone] = (counts[DICTIONARY[w].tone] || 0) + 1;
        }
    });
    
    // Find dominant tone
    let maxCount = 0;
    Object.entries(counts).forEach(([k, v]) => {
        if (v > maxCount) {
            maxCount = v;
            dominantTone = k;
        }
    });
    
    return { score: totalScore, tone: dominantTone };
}
module.exports = { analyzeSentimentAndTone };