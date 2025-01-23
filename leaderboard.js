const express = require('express');
const User = require('./models/User');
const router = express.Router();

router.get('/', async (req, res) => {
    const leaderboard = await User.find().sort({ score: -1 }).limit(10);
    res.json(leaderboard);
});

router.post('/', async (req, res) => {
    const { name, score } = req.body;
    const user = new User({ name, score });
    await user.save();
    res.json(user);
});

module.exports = router;