const { analyzeSentimentAndTone } = require('../skills/nlp-analytics/sentiment');

test('classifies dialectical Hegel-themed posts correctly', () => {
    const res = analyzeSentimentAndTone("Hegelean dialectics represents Sota Sota!");
    expect(res.tone).toBe("tech-heavy");
});