function extractRestId(jsonResponse) {
    try {
        return jsonResponse.data.create_tweet.tweet_results.result.rest_id;
    } catch(e) { return null; }
}
module.exports = { extractRestId };