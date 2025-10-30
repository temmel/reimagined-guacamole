// Game State
const gameState = {
    numPlayers: 1,
    players: [], // Array of {playerNumber, hippoId, name}
    currentPlayerIndex: 0,
    playerAnswers: [], // Stores answers for current turn
    currentTurn: 1,
    raceDistance: 100,
    hippos: [],
    currentQuestionIndex: 0,
    usedEasyQuestions: [],
    usedHardQuestions: [],
    isHardQuestion: false,
    currentSelectionPlayer: 1,
    takenHippos: []
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

// Easy Trivia Questions (Ages 6-9)
const easyQuestions = [
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
    },
    {
        question: "What color is a flamingo?",
        answers: ["Pink", "Blue", "Green", "Yellow"],
        correct: 0
    },
    {
        question: "What sound does a cow make?",
        answers: ["Moo", "Meow", "Woof", "Oink"],
        correct: 0
    },
    {
        question: "Which animal loves to eat carrots?",
        answers: ["Rabbit", "Lion", "Snake", "Shark"],
        correct: 0
    },
    {
        question: "What is a baby dog called?",
        answers: ["Puppy", "Kitten", "Calf", "Chick"],
        correct: 0
    },
    {
        question: "Which animal has a trunk?",
        answers: ["Elephant", "Giraffe", "Zebra", "Tiger"],
        correct: 0
    },
    {
        question: "What do bees make?",
        answers: ["Honey", "Milk", "Eggs", "Silk"],
        correct: 0
    },
    {
        question: "Which animal says 'meow'?",
        answers: ["Cat", "Dog", "Cow", "Duck"],
        correct: 0
    },
    {
        question: "What do chickens lay?",
        answers: ["Eggs", "Milk", "Honey", "Seeds"],
        correct: 0
    },
    {
        question: "Which animal can hop?",
        answers: ["Kangaroo", "Snake", "Fish", "Worm"],
        correct: 0
    },
    {
        question: "What color is a polar bear?",
        answers: ["White", "Brown", "Black", "Gray"],
        correct: 0
    },
    {
        question: "Which animal lives in a hive?",
        answers: ["Bee", "Dog", "Cat", "Horse"],
        correct: 0
    },
    {
        question: "What do caterpillars turn into?",
        answers: ["Butterflies", "Bees", "Birds", "Spiders"],
        correct: 0
    },
    {
        question: "Which animal has stripes?",
        answers: ["Zebra", "Elephant", "Hippo", "Rhino"],
        correct: 0
    },
    {
        question: "What do fish use to breathe underwater?",
        answers: ["Gills", "Lungs", "Nose", "Mouth"],
        correct: 0
    },
    {
        question: "Which animal is the tallest?",
        answers: ["Giraffe", "Elephant", "Bear", "Lion"],
        correct: 0
    },
    {
        question: "What do tadpoles grow up to be?",
        answers: ["Frogs", "Fish", "Turtles", "Snakes"],
        correct: 0
    },
    {
        question: "Which bird cannot fly?",
        answers: ["Penguin", "Robin", "Eagle", "Parrot"],
        correct: 0
    },
    {
        question: "What does a squirrel like to eat?",
        answers: ["Nuts", "Meat", "Fish", "Grass"],
        correct: 0
    },
    {
        question: "Which animal has a long neck?",
        answers: ["Giraffe", "Dog", "Cat", "Pig"],
        correct: 0
    },
    {
        question: "What is a baby cat called?",
        answers: ["Kitten", "Puppy", "Calf", "Foal"],
        correct: 0
    },
    {
        question: "Which animal lives in the ocean?",
        answers: ["Whale", "Lion", "Elephant", "Tiger"],
        correct: 0
    },
    {
        question: "What do cows give us to drink?",
        answers: ["Milk", "Juice", "Water", "Soda"],
        correct: 0
    },
    {
        question: "Which animal has a shell?",
        answers: ["Turtle", "Dog", "Cat", "Rabbit"],
        correct: 0
    },
    {
        question: "What color is a ladybug?",
        answers: ["Red with black spots", "Blue", "Green", "Yellow"],
        correct: 0
    },
    {
        question: "Which animal loves to eat bananas?",
        answers: ["Monkey", "Lion", "Wolf", "Bear"],
        correct: 0
    }
];

// Hard Trivia Questions (Ages 10-13)
const hardQuestions = [
    {
        question: "What is the only mammal capable of true flight?",
        answers: ["Bat", "Flying Squirrel", "Sugar Glider", "Flying Lemur"],
        correct: 0
    },
    {
        question: "How many species of venomous snakes are there approximately?",
        answers: ["600", "200", "400", "800"],
        correct: 0
    },
    {
        question: "What percentage of their body weight can ants lift?",
        answers: ["50-100 times", "10-20 times", "30-40 times", "100-150 times"],
        correct: 0
    },
    {
        question: "Which animal has the most powerful bite force?",
        answers: ["Saltwater Crocodile", "Great White Shark", "Hippopotamus", "Nile Crocodile"],
        correct: 0
    },
    {
        question: "How many chambers does a cow's stomach have?",
        answers: ["Four", "Two", "Three", "Five"],
        correct: 0
    },
    {
        question: "What is the gestation period of an African elephant?",
        answers: ["22 months", "12 months", "18 months", "28 months"],
        correct: 0
    },
    {
        question: "Which bird has the largest wingspan?",
        answers: ["Wandering Albatross", "Andean Condor", "California Condor", "Bald Eagle"],
        correct: 0
    },
    {
        question: "How fast can a peregrine falcon dive?",
        answers: ["240 mph", "150 mph", "200 mph", "300 mph"],
        correct: 0
    },
    {
        question: "What color is a polar bear's skin?",
        answers: ["Black", "White", "Pink", "Gray"],
        correct: 0
    },
    {
        question: "How many neurons does an octopus have approximately?",
        answers: ["500 million", "100 million", "300 million", "1 billion"],
        correct: 0
    },
    {
        question: "What is the only continent without native reptiles?",
        answers: ["Antarctica", "Europe", "Australia", "North America"],
        correct: 0
    },
    {
        question: "How long can a Galapagos tortoise live?",
        answers: ["Over 175 years", "50 years", "100 years", "150 years"],
        correct: 0
    },
    {
        question: "What is the only bird that can fly backwards?",
        answers: ["Hummingbird", "Eagle", "Sparrow", "Parrot"],
        correct: 0
    },
    {
        question: "How many bones does a shark have?",
        answers: ["Zero (cartilage)", "50", "100", "200"],
        correct: 0
    },
    {
        question: "What percentage of a jellyfish is water?",
        answers: ["95%", "50%", "75%", "100%"],
        correct: 0
    },
    {
        question: "How many eyes does a bee have?",
        answers: ["Five", "Two", "Four", "Six"],
        correct: 0
    },
    {
        question: "What is the fastest marine animal?",
        answers: ["Sailfish", "Dolphin", "Shark", "Tuna"],
        correct: 0
    },
    {
        question: "How long can a snail sleep?",
        answers: ["Up to 3 years", "1 month", "1 year", "6 months"],
        correct: 0
    },
    {
        question: "Which animal has the largest brain?",
        answers: ["Sperm Whale", "Elephant", "Human", "Dolphin"],
        correct: 0
    },
    {
        question: "How many teeth does a mosquito have?",
        answers: ["47", "0", "10", "25"],
        correct: 0
    },
    {
        question: "What is the lifespan of a dragonfly?",
        answers: ["6 months", "1 year", "2 weeks", "1 month"],
        correct: 0
    },
    {
        question: "How many hearts does a worm have?",
        answers: ["5", "1", "2", "3"],
        correct: 0
    },
    {
        question: "What temperature do Arctic foxes survive?",
        answers: ["-70°C (-94°F)", "-20°C (-4°F)", "-40°C (-40°F)", "-50°C (-58°F)"],
        correct: 0
    },
    {
        question: "How far can an owl turn its head?",
        answers: ["270 degrees", "180 degrees", "360 degrees", "90 degrees"],
        correct: 0
    },
    {
        question: "What is the smallest bird in the world?",
        answers: ["Bee Hummingbird", "Sparrow", "Finch", "Wren"],
        correct: 0
    },
    {
        question: "How many species of ants exist worldwide?",
        answers: ["12,000+", "1,000", "5,000", "20,000"],
        correct: 0
    },
    {
        question: "What is the only mammal that lays eggs?",
        answers: ["Platypus", "Echidna", "Both A and B", "Kangaroo"],
        correct: 2
    },
    {
        question: "How loud can a lion's roar be heard?",
        answers: ["5 miles away", "1 mile away", "2 miles away", "10 miles away"],
        correct: 0
    },
    {
        question: "How many stomachs does a dolphin have?",
        answers: ["Two", "One", "Three", "Four"],
        correct: 0
    },
    {
        question: "What is the lifespan of a mayfly?",
        answers: ["24 hours", "1 week", "1 month", "3 days"],
        correct: 0
    }
];

// Initialize game
function initGame() {
    setupEventListeners();
}

// Setup player count selection
function setupPlayerCountSelection() {
    document.querySelectorAll('.player-count-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            gameState.numPlayers = parseInt(e.target.dataset.players);
            gameState.currentSelectionPlayer = 1;
            gameState.takenHippos = [];
            gameState.players = [];

            // Switch to hippo selection
            document.getElementById('player-count-screen').classList.remove('active');
            document.getElementById('selection-screen').classList.add('active');

            renderHippoSelection();
        });
    });
}

// Render hippo selection screen
function renderHippoSelection() {
    const container = document.getElementById('hippo-selection');
    container.innerHTML = '';

    // Update title
    document.getElementById('selection-title').textContent =
        `Player ${gameState.currentSelectionPlayer}: Choose Your Hippo!`;

    hippoData.forEach(hippo => {
        const card = document.createElement('div');
        card.className = 'hippo-card';
        const isTaken = gameState.takenHippos.includes(hippo.id);

        if (isTaken) {
            card.classList.add('taken');
        }

        card.dataset.hippoId = hippo.id;

        const takenLabel = isTaken ? '<div style="color: #f44336; font-weight: bold; margin-top: 10px;">TAKEN</div>' : '';

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
            ${takenLabel}
        `;

        if (!isTaken) {
            card.addEventListener('click', () => selectHippo(hippo.id));
        }
        container.appendChild(card);
    });
}

// Select a hippo
function selectHippo(hippoId) {
    if (gameState.takenHippos.includes(hippoId)) return;

    const hippo = hippoData.find(h => h.id === hippoId);

    // Update UI
    document.querySelectorAll('.hippo-card').forEach(card => {
        card.classList.remove('selected');
        if (card.dataset.hippoId == hippoId && !card.classList.contains('taken')) {
            card.classList.add('selected');
        }
    });

    // Store temporarily
    gameState.tempSelectedHippo = hippo;
    document.getElementById('confirm-hippo-btn').disabled = false;
}

// Confirm hippo selection for current player
function confirmHippoSelection() {
    if (!gameState.tempSelectedHippo) return;

    // Add player
    gameState.players.push({
        playerNumber: gameState.currentSelectionPlayer,
        hippoId: gameState.tempSelectedHippo.id,
        name: gameState.tempSelectedHippo.name
    });

    gameState.takenHippos.push(gameState.tempSelectedHippo.id);
    gameState.currentSelectionPlayer++;

    // Check if all players have selected
    if (gameState.currentSelectionPlayer > gameState.numPlayers) {
        // All players selected, start race
        startRace();
    } else {
        // Next player selects
        gameState.tempSelectedHippo = null;
        document.getElementById('confirm-hippo-btn').disabled = true;
        renderHippoSelection();
    }
}

// Start the race
function startRace() {
    // Initialize race state
    gameState.currentTurn = 1;
    gameState.currentPlayerIndex = 0;
    gameState.playerAnswers = [];
    gameState.usedEasyQuestions = [];
    gameState.usedHardQuestions = [];
    gameState.isHardQuestion = false;

    // Create hippos - players + AI
    gameState.hippos = hippoData.map(hippo => {
        const player = gameState.players.find(p => p.hippoId === hippo.id);
        return {
            ...hippo,
            position: 0,
            isPlayer: !!player,
            playerNumber: player ? player.playerNumber : null
        };
    });

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

        const playerLabel = hippo.isPlayer ? ` (P${hippo.playerNumber})` : ' (AI)';

        lane.innerHTML = `
            <div class="lane-background" style="width: 0%"></div>
            <div class="hippo-racer" style="color: ${hippo.color}">${hippo.icon}</div>
            <div class="hippo-label">${hippo.name}${playerLabel}</div>
            <div class="finish-line"></div>
        `;

        track.appendChild(lane);
    });
}

// Update player info
function updatePlayerInfo() {
    document.querySelector('#turn-counter span').textContent = gameState.currentTurn;
    const difficulty = gameState.isHardQuestion ? ' | <span style="color: #ff9800; font-weight: bold;">HARD</span>' : ' | <span style="color: #4caf50; font-weight: bold;">EASY</span>';

    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    if (currentPlayer) {
        const currentHippo = hippoData.find(h => h.hippoId === currentPlayer.hippoId);
        document.getElementById('current-player-info').innerHTML = `
            Player ${currentPlayer.playerNumber}'s Turn: <span style="color: ${hippoData.find(h => h.id === currentPlayer.hippoId).color}">${currentPlayer.name}</span>
        `;
    }

    document.getElementById('player-info').innerHTML = `${difficulty}`;
}

// Shuffle array helper function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Show next question
function showNextQuestion() {
    // Alternate between easy and hard questions (turn 1 = easy, turn 2 = hard, etc.)
    const isHardQuestion = gameState.currentTurn % 2 === 0;
    gameState.isHardQuestion = isHardQuestion;

    let question, questionPool, usedList;

    if (isHardQuestion) {
        questionPool = hardQuestions;
        usedList = gameState.usedHardQuestions;
    } else {
        questionPool = easyQuestions;
        usedList = gameState.usedEasyQuestions;
    }

    // Get unused question
    const availableQuestions = questionPool.filter((_, index) => !usedList.includes(index));

    if (availableQuestions.length === 0) {
        // Reset used questions if all have been used
        if (isHardQuestion) {
            gameState.usedHardQuestions = [];
        } else {
            gameState.usedEasyQuestions = [];
        }
    }

    const questionIndex = Math.floor(Math.random() * (availableQuestions.length || questionPool.length));
    const actualIndex = questionPool.indexOf(availableQuestions[questionIndex] || questionPool[questionIndex]);
    gameState.currentQuestionIndex = actualIndex;

    if (isHardQuestion) {
        gameState.usedHardQuestions.push(actualIndex);
    } else {
        gameState.usedEasyQuestions.push(actualIndex);
    }

    question = questionPool[actualIndex];

    // Create shuffled answers with tracking
    const answersWithIndex = question.answers.map((answer, index) => ({
        text: answer,
        originalIndex: index
    }));
    const shuffledAnswers = shuffleArray(answersWithIndex);

    // Find the new position of the correct answer
    const correctAnswerPosition = shuffledAnswers.findIndex(
        item => item.originalIndex === question.correct
    );

    // Store for answer checking
    gameState.currentCorrectAnswer = correctAnswerPosition;

    // Render question with hard indicator if applicable
    const questionContainer = document.getElementById('question-container');
    if (isHardQuestion) {
        questionContainer.classList.add('hard-question');
    } else {
        questionContainer.classList.remove('hard-question');
    }

    const hardBanner = isHardQuestion
        ? '<div class="hard-question-banner">⚡ HARD QUESTION! ⚡<br><span style="font-size: 0.7em;">Answer correctly for 1.5x BONUS!</span></div>'
        : '';

    document.getElementById('question-text').innerHTML = hardBanner + question.question;
    document.getElementById('feedback').textContent = '';
    document.getElementById('feedback').className = '';

    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';

    shuffledAnswers.forEach((answerObj, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        if (isHardQuestion) {
            btn.classList.add('hard-mode');
        }
        btn.textContent = answerObj.text;
        btn.addEventListener('click', () => handleAnswer(index));
        answersContainer.appendChild(btn);
    });

    // Update player info to show difficulty
    updatePlayerInfo();
}

// Handle answer
function handleAnswer(selectedIndex) {
    const isCorrect = selectedIndex === gameState.currentCorrectAnswer;
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];

    // Store answer for this player
    gameState.playerAnswers.push({
        playerNumber: currentPlayer.playerNumber,
        hippoId: currentPlayer.hippoId,
        isCorrect: isCorrect
    });

    // Disable all buttons
    document.querySelectorAll('.answer-btn').forEach((btn, index) => {
        btn.disabled = true;
        if (index === gameState.currentCorrectAnswer) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Show feedback
    const feedback = document.getElementById('feedback');
    if (isCorrect) {
        if (gameState.isHardQuestion) {
            feedback.textContent = `✓ Player ${currentPlayer.playerNumber} - AMAZING! Hard question correct! MEGA BOOST!`;
            feedback.className = 'correct hard';
        } else {
            feedback.textContent = `✓ Player ${currentPlayer.playerNumber} - Correct! Your hippo gets a speed boost!`;
            feedback.className = 'correct';
        }
    } else {
        feedback.textContent = `✗ Player ${currentPlayer.playerNumber} - Wrong answer. Your hippo moves normally.`;
        feedback.className = 'incorrect';
    }

    // Check if all players have answered
    gameState.currentPlayerIndex++;

    if (gameState.currentPlayerIndex >= gameState.numPlayers) {
        // All players answered, process turn
        setTimeout(() => {
            processTurn();
        }, 1500);
    } else {
        // Next player's turn - show NEW question
        setTimeout(() => {
            showNextQuestion();
        }, 1500);
    }
}

// Process turn
function processTurn() {
    // Move all hippos
    gameState.hippos.forEach(hippo => {
        let movement;

        if (hippo.isPlayer) {
            // Find this player's answer
            const playerAnswer = gameState.playerAnswers.find(a => a.hippoId === hippo.id);
            movement = hippo.baseSpeed;

            if (playerAnswer && playerAnswer.isCorrect) {
                let bonusMultiplier = hippo.bonus;

                // Apply 1.5x multiplier for hard questions
                if (gameState.isHardQuestion) {
                    bonusMultiplier *= 1.5;
                }

                movement += hippo.baseSpeed * bonusMultiplier;
            }
        } else {
            // AI movement (random with some variance)
            const aiCorrect = Math.random() > 0.5; // 50% chance AI answers correctly
            movement = hippo.baseSpeed;

            if (aiCorrect) {
                let bonusMultiplier = hippo.bonus;
                if (gameState.isHardQuestion) {
                    bonusMultiplier *= 1.5;
                }
                movement += hippo.baseSpeed * bonusMultiplier;
            }
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
        // Continue race - reset for next turn
        gameState.currentTurn++;
        gameState.currentPlayerIndex = 0;
        gameState.playerAnswers = [];
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
        endTitle.textContent = `🏆 Player ${winner.playerNumber} (${winner.name}) Won! 🏆`;
        endTitle.style.color = '#4caf50';
    } else {
        endTitle.textContent = `${winner.name} (AI) Won!`;
        endTitle.style.color = '#f44336';
    }

    const resultsContainer = document.getElementById('race-results');
    resultsContainer.innerHTML = '';

    rankings.forEach((hippo, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        const label = hippo.isPlayer ? ` (P${hippo.playerNumber})` : ' (AI)';
        resultItem.innerHTML = `
            <span class="result-position">#${index + 1}</span>
            <span class="result-hippo" style="color: ${hippo.color}">
                ${hippo.icon} ${hippo.name}${label}
            </span>
            <span>${hippo.position.toFixed(1)} / ${gameState.raceDistance}</span>
        `;
        resultsContainer.appendChild(resultItem);
    });
}

// Setup event listeners
function setupEventListeners() {
    setupPlayerCountSelection();
    document.getElementById('confirm-hippo-btn').addEventListener('click', confirmHippoSelection);
    document.getElementById('play-again-btn').addEventListener('click', resetGame);
}

// Reset game
function resetGame() {
    gameState.numPlayers = 1;
    gameState.players = [];
    gameState.currentPlayerIndex = 0;
    gameState.playerAnswers = [];
    gameState.currentTurn = 1;
    gameState.usedEasyQuestions = [];
    gameState.usedHardQuestions = [];
    gameState.isHardQuestion = false;
    gameState.currentSelectionPlayer = 1;
    gameState.takenHippos = [];

    document.getElementById('end-screen').classList.remove('active');
    document.getElementById('player-count-screen').classList.add('active');
}

// Start the game when page loads
window.addEventListener('DOMContentLoaded', initGame);
