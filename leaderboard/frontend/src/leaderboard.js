async function loadLeaderboard() {
    const response = await fetch('http://localhost:5000/api/leaderboard');
    const leaderboard = await response.json();

    const leaderboardContainer = document.getElementById('leaderboard-container');
    leaderboardContainer.innerHTML = '<h2>Leaderboard</h2>';
    leaderboard.forEach((user, index) => {
        const entry = document.createElement('p');
        entry.textContent = `${index + 1}. ${user.name} - ${user.score}`;
        leaderboardContainer.appendChild(entry);
    });
}

loadLeaderboard();