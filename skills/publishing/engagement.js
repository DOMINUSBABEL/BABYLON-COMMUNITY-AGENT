function calculateEngagementRate(likes, views) {
    return views > 0 ? (likes / views) * 100 : 0;
}
module.exports = { calculateEngagementRate };