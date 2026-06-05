const { splitIntoTweets } = require('../skills/thread-building/composer');
test('splits text correctly', () => {
    const text = 'a '.repeat(150);
    const threads = splitIntoTweets(text);
    expect(threads.length).toBeGreaterThan(1);
});