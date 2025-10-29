// Game State
const gameState = {
    selectedHippo: null,
    currentTurn: 1,
    raceDistance: 100,
    hippos: [],
    currentQuestionIndex: 0,
    usedQuestions: []
};

// Hippo Data
const hippoData = [
    {
        id: 1,
        name: "Thunder",
        icon: "🦛",
        color: "#8B4513",
        baseSpeed: 8,
        bonus: 1.5,
        description: "Fast and steady",
        stats: {
            speed: 85,
            acceleration: 70,
            bonusMultiplier: 75
        }
    },
    {
        id: 2,
        name: "Lightning",
        icon: "🦛",
        color: "#4169E1",
        baseSpeed: 6,
        bonus: 2.0,
        description: "High risk, high reward",
        stats: {
            speed: 60,
            acceleration: 80,
            bonusMultiplier: 95
        }
    },
    {
        id: 3,
        name: "Splash",
        icon: "🦛",
        color: "#20B2AA",
        baseSpeed: 10,
        bonus: 1.2,
        description: "Consistent performer",
        stats: {
            speed: 95,
            acceleration: 85,
            bonusMultiplier: 60
        }
    },
    {
        id: 4,
        name: "Bubbles",
        icon: "🦛",
        color: "#FF69B4",
        baseSpeed: 7,
        bonus: 1.8,
        description: "Balanced all-arounder",
        stats: {
            speed: 70,
            acceleration: 75,
            bonusMultiplier: 85
        }
    }
];

// Trivia Questions
const triviaQuestions = [
    {
        question: "What is the largest land animal?",
        answers: ["Elephant", "Giraffe", "Hippopotamus", "Rhinoceros"],
        correct: 0
    },
    {
        question: "How many hearts does an octopus have?",
        answers: ["One", "Two", "Three", "Four"],
        correct: 2
    },
    {
        question: "What is the fastest land animal?",
        answers: ["Lion", "Cheetah", "Leopard", "Tiger"],
        correct: 1
    },
    {
        question: "Which animal can sleep standing up?",
        answers: ["Cow", "Horse", "Elephant", "All of the above"],
        correct: 3
    },
    {
        question: "What do pandas primarily eat?",
        answers: ["Fish", "Bamboo", "Insects", "Meat"],
        correct: 1
    },
    {
        question: "Which bird cannot fly?",
        answers: ["Eagle", "Penguin", "Sparrow", "Parrot"],
        correct: 1
    },
    {
        question: "How long can a dolphin hold its breath?",
        answers: ["2 minutes", "5 minutes", "15 minutes", "30 minutes"],
        correct: 2
    },
    {
        question: "What is a group of lions called?",
        answers: ["Pack", "Herd", "Pride", "Flock"],
        correct: 2
    },
    {
        question: "Which animal has the longest lifespan?",
        answers: ["Elephant", "Blue Whale", "Tortoise", "Parrot"],
        correct: 2
    },
    {
        question: "What do koalas primarily eat?",
        answers: ["Eucalyptus leaves", "Bamboo", "Berries", "Insects"],
        correct: 0
    },
    {
        question: "How many legs does a spider have?",
        answers: ["Six", "Eight", "Ten", "Twelve"],
        correct: 1
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        answers: ["Tiger", "Lion", "Elephant", "Gorilla"],
        correct: 1
    },
    {
        question: "What is the smallest mammal in the world?",
        answers: ["Mouse", "Shrew", "Bumblebee Bat", "Hamster"],
        correct: 2
    },
    {
        question: "Which animal can regenerate its limbs?",
        answers: ["Frog", "Starfish", "Lizard", "Snake"],
        correct: 1
    },
    {
        question: "What is the national animal of Australia?",
        answers: ["Koala", "Kangaroo", "Emu", "Platypus"],
        correct: 1
    }
];

// Initialize game
function initGame() {
    renderHippoSelection();
    setupEventListeners();
}

// Render hippo selection screen
function renderHippoSelection() {
    const container = document.getElementById('hippo-selection');
    container.innerHTML = '';

    hippoData.forEach(hippo => {
        const card = document.createElement('div');
        card.className = 'hippo-card';
        card.dataset.hippoId = hippo.id;

        card.innerHTML = `
            <div class="hippo-icon" style="color: ${hippo.color}">${hippo.icon}</div>
            <div class="hippo-name">${hippo.name}</div>
            <p style="color: #666; font-size: 0.9em; margin: 10px 0;">${hippo.description}</p>
            <div class="hippo-stats">
                <div class="stat">
                    <span>Speed</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${hippo.stats.speed}%"></div>
                    </div>
                </div>
                <div class="stat">
                    <span>Acceleration</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${hippo.stats.acceleration}%"></div>
                    </div>
                </div>
                <div class="stat">
                    <span>Bonus Power</span>
                    <div class="stat-bar">
                        <div class="stat-fill" style="width: ${hippo.stats.bonusMultiplier}%"></div>
                    </div>
                </div>
            </div>
        `;

        card.addEventListener('click', () => selectHippo(hippo.id));
        container.appendChild(card);
    });
}

// Select a hippo
function selectHippo(hippoId) {
    gameState.selectedHippo = hippoData.find(h => h.id === hippoId);

    // Update UI
    document.querySelectorAll('.hippo-card').forEach(card => {
        card.classList.remove('selected');
        if (card.dataset.hippoId == hippoId) {
            card.classList.add('selected');
        }
    });

    document.getElementById('start-race-btn').disabled = false;
}

// Start the race
function startRace() {
    // Initialize race state
    gameState.currentTurn = 1;
    gameState.usedQuestions = [];
    gameState.hippos = hippoData.map(hippo => ({
        ...hippo,
        position: 0,
        isPlayer: hippo.id === gameState.selectedHippo.id
    }));

    // Switch to race screen
    document.getElementById('selection-screen').classList.remove('active');
    document.getElementById('race-screen').classList.add('active');

    // Render race track
    renderRaceTrack();
    updatePlayerInfo();

    // Show first question
    showNextQuestion();
}

// Render race track
function renderRaceTrack() {
    const track = document.getElementById('race-track');
    track.innerHTML = '';

    gameState.hippos.forEach(hippo => {
        const lane = document.createElement('div');
        lane.className = 'race-lane';
        lane.id = `lane-${hippo.id}`;

        lane.innerHTML = `
            <div class="lane-background" style="width: 0%"></div>
            <div class="hippo-racer" style="color: ${hippo.color}">${hippo.icon}</div>
            <div class="hippo-label">${hippo.name}${hippo.isPlayer ? ' (You)' : ''}</div>
            <div class="finish-line"></div>
        `;

        track.appendChild(lane);
    });
}

// Update player info
function updatePlayerInfo() {
    document.querySelector('#turn-counter span').textContent = gameState.currentTurn;
    document.getElementById('player-info').innerHTML = `
        Playing as: <strong>${gameState.selectedHippo.name}</strong>
    `;
}

// Show next question
function showNextQuestion() {
    // Get unused question
    const availableQuestions = triviaQuestions.filter((_, index) =>
        !gameState.usedQuestions.includes(index)
    );

    if (availableQuestions.length === 0) {
        gameState.usedQuestions = [];
    }

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    const actualIndex = triviaQuestions.indexOf(availableQuestions[questionIndex]);
    gameState.currentQuestionIndex = actualIndex;
    gameState.usedQuestions.push(actualIndex);

    const question = triviaQuestions[actualIndex];

    // Render question
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = '';

    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer;
        btn.addEventListener('click', () => handleAnswer(index));
        answersContainer.appendChild(btn);
    });
}

// Handle answer
function handleAnswer(selectedIndex) {
    const question = triviaQuestions[gameState.currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;

    // Disable all buttons
    document.querySelectorAll('.answer-btn').forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Show feedback
    const feedback = document.getElementById('feedback');
    if (isCorrect) {
        feedback.textContent = '✓ Correct! Your hippo gets a speed boost!';
        feedback.className = 'correct';
    } else {
        feedback.textContent = '✗ Wrong answer. Your hippo moves normally.';
        feedback.className = 'incorrect';
    }

    // Process turn after short delay
    setTimeout(() => {
        processTurn(isCorrect);
    }, 1500);
}

// Process turn
function processTurn(playerAnsweredCorrect) {
    // Move all hippos
    gameState.hippos.forEach(hippo => {
        let movement;

        if (hippo.isPlayer) {
            // Player movement
            movement = hippo.baseSpeed;
            if (playerAnsweredCorrect) {
                movement += hippo.baseSpeed * hippo.bonus;
            }
        } else {
            // AI movement (random with some variance)
            movement = hippo.baseSpeed + Math.random() * 5;
        }

        hippo.position = Math.min(hippo.position + movement, gameState.raceDistance);
    });

    // Update visuals
    updateRacePositions();

    // Check for winner
    const winner = gameState.hippos.find(h => h.position >= gameState.raceDistance);

    if (winner) {
        setTimeout(() => endRace(winner), 1000);
    } else {
        // Continue race
        gameState.currentTurn++;
        updatePlayerInfo();
        setTimeout(() => showNextQuestion(), 2000);
    }
}

// Update race positions
function updateRacePositions() {
    gameState.hippos.forEach(hippo => {
        const lane = document.getElementById(`lane-${hippo.id}`);
        const hippoElement = lane.querySelector('.hippo-racer');
        const background = lane.querySelector('.lane-background');

        const percentage = (hippo.position / gameState.raceDistance) * 100;
        const maxLeft = lane.offsetWidth - 100; // Account for hippo width and padding
        const leftPosition = (percentage / 100) * maxLeft;

        hippoElement.style.left = `${leftPosition}px`;
        background.style.width = `${percentage}%`;
    });
}

// End race
function endRace(winner) {
    // Sort hippos by position
    const rankings = [...gameState.hippos].sort((a, b) => b.position - a.position);

    // Switch to end screen
    document.getElementById('race-screen').classList.remove('active');
    document.getElementById('end-screen').classList.add('active');

    // Show results
    const endTitle = document.getElementById('end-title');
    if (winner.isPlayer) {
        endTitle.textContent = '🏆 You Won! 🏆';
        endTitle.style.color = '#4caf50';
    } else {
        endTitle.textContent = `${winner.name} Won!`;
        endTitle.style.color = '#f44336';
    }

    const resultsContainer = document.getElementById('race-results');
    resultsContainer.innerHTML = '';

    rankings.forEach((hippo, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
            <span class="result-position">#${index + 1}</span>
            <span class="result-hippo" style="color: ${hippo.color}">
                ${hippo.icon} ${hippo.name}${hippo.isPlayer ? ' (You)' : ''}
            </span>
            <span>${hippo.position.toFixed(1)} / ${gameState.raceDistance}</span>
        `;
        resultsContainer.appendChild(resultItem);
    });
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('start-race-btn').addEventListener('click', startRace);
    document.getElementById('play-again-btn').addEventListener('click', resetGame);
}

// Reset game
function resetGame() {
    gameState.selectedHippo = null;
    gameState.currentTurn = 1;
    gameState.usedQuestions = [];

    document.getElementById('end-screen').classList.remove('active');
    document.getElementById('selection-screen').classList.add('active');
    document.getElementById('start-race-btn').disabled = true;

    renderHippoSelection();
}

// Start the game when page loads
window.addEventListener('DOMContentLoaded', initGame);
