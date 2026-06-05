const express = require('express');
const router = express.Router();

router.post('/webhook/published', (req, res) => {
    const { postId, url } = req.body;
    console.log(`Webhook triggered: Post ${postId} successfully published at ${url}`);
    res.status(200).json({ success: true });
});

module.exports = router;