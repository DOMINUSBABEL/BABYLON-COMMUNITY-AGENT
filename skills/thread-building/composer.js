function splitIntoTweets(text) {
    const limit = 280;
    // Simple word-safe splitting
    let words = text.split(' ');
    let threads = [];
    let current = '';
    words.forEach(w => {
        if ((current + ' ' + w).length <= limit) {
            current += (current ? ' ' : '') + w;
        } else {
            threads.push(current);
            current = w;
        }
    });
    if (current) threads.push(current);
    return threads;
}
module.exports = { splitIntoTweets };