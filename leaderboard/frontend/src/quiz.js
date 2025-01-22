async function loadQuiz() {
    const response = await fetch('http://localhost:5000/api/quiz');
    const questions = await response.json();

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    let score = 0;

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map((option, i) => `
                <label>
                    <input type="radio" name="question-${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', () => {
        questions.forEach((q, index) => {
            const selected = document.querySelector(`input[name="question-${index}"]:checked`);
            if (selected && selected.value === q.answer) {
                score++;
            }
        });

        const name = prompt("Enter your name:");
        saveScore(name, score);
    });

    quizContainer.appendChild(submitButton);
}

async function saveScore(name, score) {
    await fetch('http://localhost:5000/api/leaderboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, score })
    });

    loadLeaderboard();
}

loadQuiz();