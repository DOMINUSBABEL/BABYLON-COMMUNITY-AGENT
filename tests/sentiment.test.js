const { analyzeSentiment } = require('../skills/nlp-analytics/sentiment');
test('detects positive words', () => {
    expect(analyzeSentiment('IA local y seguro')).toBe('Positive');
});