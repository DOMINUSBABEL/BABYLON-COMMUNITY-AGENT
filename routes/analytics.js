const express = require('express');
const router = express.Router();
router.get('/followers', (req, res) => res.json({ count: 1240 }));
module.exports = router;