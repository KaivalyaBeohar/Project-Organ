const express = require('express');
const router = express.Router();

const questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris"], answer: "Paris" }
];

router.get('/', (req, res) => {
    res.json(questions);
});

module.exports = router;