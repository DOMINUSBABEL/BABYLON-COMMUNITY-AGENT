const { extractRestId } = require('../skills/x-response-interceptor/interceptor');
test('extracts rest id', () => {
    const mock = { data: { create_tweet: { tweet_results: { result: { rest_id: '123' } } } } };
    expect(extractRestId(mock)).toBe('123');
});