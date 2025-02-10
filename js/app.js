//=====================Store Code Here=========================\\




/*------------------------ Constants ------------------------------*/

// Storing the questions/options/answers in an object for reference later in code
const jsQuiz = [
    {
        question: [
            "What is a JavaScript Function?", 
            "Why are JavaScript Functions used?",
            "When will you need to use a JavaScript Function?",

            "What is a variable in JavaScript?",
            "Why are variables used in JavaScript?",
            "When will you need to use a variable in JavaScript?",

            "What is an Array?",
            "Why are Arrays used in JavaScript?",
            "When will you need to use an Array in JavaScript?",

            "What is an Object in JavaScript?",
            "Why are Objects in JavaScript used?",
            "When will I need to use an Object in JavaScript?"

        ],
        
        options: [
            "A reusable block of code designed to perform a specific task.",
            "A built-in JavaScript object that holds key-value pairs.",
            "A special kind of loop that runs forever.",
            "A method used only to declare variables.",
            
            "To style HTML elements like CSS.",
            "They make your code reusable, modular, and easier to debug.",
            "To replace the need for variables.",
            "To automatically run all JavaScript code at once.",

            "When you want to change the color of text using only HTML.",
            "When you want to execute the same logic multiple times or organize your code better.",
            "When you need to store data permanently like a database.",
            "When you need to loop through an array without repeating code.",


            "A Container used to store data values.",
            "A fixed value that cannot change.",
            "A function that performs a specific task.",
            "A CSS property used to style web pages dynamically.",

            "To create new functions dynamically.",
            "To replace the need for loops and conditional statements.",
            "To run code automatically without user input.",
            "Allows you to store, retrieve, and manipulate data within your program.",

            "Whenever you need to store values like user input, calculations, or temporary data.",
            "When you need to create a new HTML element.",
            "When you want to define a function but not store any data.",
            "When you want to permanently store data without using storage methods.",


            "A variable that can only store a single number.",
            "A JavaScript keyword used to declare a function.",
            "A built-in method for styling web pages.",
            "Used to store multiple items in one variable.",

            "To create new functions dynamically.",
            "To store only one value at a time.",
            "Arrays store lists of data efficiently and allow for easy manipulation.",
            "To execute code in a loop without using a loop.",

            "When handling multiple related pieces of data, like a list of names or numbers.",
            "When you need to add event listeners to a button.",
            "When you want to define a function that performs a task.",
            "When you want to create a loop without using loop syntax.",


            "A special type of function that runs automatically.",
            "A built-in method used to loop through arrays.",
            "A single variable that can only store one value at a time.",
            "A collection of key-value pairs used to store related data and methods.",

            "To store only numeric values.",
            "To define functions that execute on page load.",
            "Objects allow us to structure data logically and efficiently.",
            "To create loops that run a set number of times.",

            "When you want to store a single number.",
            "When you need to store multiple values without using variables.",
            "When you need to store multiple key-value pairs.",
        ],
        
        answer: [
            "A reusable block of code designed to perform a specific task.", 
            
            "They make your code reusable, modular, and easier to debug.",
            
            "When you want to execute the same logic multiple times or organize your code better.",


            "A Container used to store data values.",
            
            "Allows you to store, retrieve, and manipulate data within your program.",
            
            "Whenever you need to store values like user input, calculations, or temporary data.",


            "Used to store multiple items in one variable.",
            
            "Arrays store lists of data efficiently and allow for easy manipulation.",
            
            "When handling multiple related pieces of data, like a list of names or numbers.",


            "A collection of key-value pairs used to store related data and methods.",

            "Objects allow us to structure data logically and efficiently.",

            "When you need to store multiple key-value pairs."
        ]
    },
];

/*--------------------- Variables (state) -------------------------*/

// Declaring the variable here to visually confirm user choice has been recorded via event listener
let clickedButton = null;


let message = ""


// Defining the user accuracy percentage which will be used for tracking score
let userAccuracy = {
    correct: 0,
    incorrect: 0,
    total: 0,
};


/*------------------------- Functions -----------------------------*/

// Proof of concept for comparison statement that will be adjusted for event listeners
function checkAnswer() {

    if (jsQuiz[0].options[0] === jsQuiz[0].answer) {
        console.log("Correct!");
    }
    else {
        console.log("Incorrect!");
    }
}

// Declaring displayAccuracy to invoke comparison statement
function displayAccuracy(quizAnswer) {
    if (quizAnswer) {
        userAccuracy.correct = userAccuracy.correct + 1;
    } else {
        userAccuracy.incorrect = userAccuracy.incorrect + 1;
    } {
        userAccuracy.total = userAccuracy.total + 1;
    }
    displayAccuracy.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`
}

let correctAnswers = userAccuracy.correct;
let totalQuestions = userAccuracy.total;
let incorrectAnswers = userAccuracy.incorrect

function displayResults(correctAnswers, totalQuestions) {
    if (correctAnswers >= 9 && correctAnswers <= 12) {
        message = `Congratulations! You got ${correctAnswers} out of ${totalQuestions} correct! You are ready to code!`
    } else {
        message = `Unfortunately, you only got ${correctAnswers} out of ${totalQuestions} correct. At least 9 out of 12 questions are required to pass.`;
    }
}



/*------------------ Cached Element References --------------------*/

// Declaring the correct as its own variable for reusability & readability
const correctAnswerOne = jsQuiz[0].answer[0];
const correctAnswerTwo = jsQuiz[0].answer[1];
const correctAnswerThree = jsQuiz[0].answer[2];

const correctAnswerFour = jsQuiz[0].answer[3];
const correctAnswerFive = jsQuiz[0].answer[4];
const correctAnswerSix = jsQuiz[0].answer[5];

const correctAnswerSeven = jsQuiz[0].answer[6];
const correctAnswerEight = jsQuiz[0].answer[7];
const correctAnswerNine = jsQuiz[0].answer[8];

const correctAnswerTen = jsQuiz[0].answer[9];
const correctAnswerEleven = jsQuiz[0].answer[10];
const correctAnswerTwelve = jsQuiz[0].answer[11];

// Creating the answerChoices just incase (might delete later)
const answerChoices = document.querySelectorAll(".quiz-container")

// Creating correctButton button element
const correctButtonElement = document.createElement("button");
correctButtonElement.textContent = "Correct!";
correctButtonElement.disabled = true;

// Creating incorrectButton button element
const incorrectButtonElement = document.createElement("button");
incorrectButtonElement.textContent = "Incorrect!";
incorrectButtonElement.disabled = true;

// Visible tracker on browser for user answers
const userTracker = document.createElement("div")
userTracker.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;


// Calling the empty HTML element to invoke the correctButton & incorrectButton after answer is submitted
const answerResultsOne = document.querySelector("#answer-result-1");
const answerResultsTwo = document.querySelector("#answer-result-2");
const answerResultsThree = document.querySelector("#answer-result-3");

const answerResultsFour = document.querySelector("#answer-result-4");
const answerResultsFive = document.querySelector("#answer-result-5");
const answerResultsSix = document.querySelector("#answer-result-6");

const answerResultsSeven = document.querySelector("#answer-result-7");
const answerResultsEight = document.querySelector("#answer-result-8");
const answerResultsNine = document.querySelector("#answer-result-9");

const answerResultsTen = document.querySelector("#answer-result-10");
const answerResultsEleven = document.querySelector("#answer-result-11");
const answerResultsTwelve = document.querySelector("#answer-result-12");



// Calling another empty HTML element to invoke correct/incorrect message with user accuracy tracker
const accuracyTrackerOne = document.querySelector("#accuracy-tracker-1");
const accuracyTrackerTwo = document.querySelector("#accuracy-tracker-2");
const accuracyTrackerThree = document.querySelector("#accuracy-tracker-3");

const accuracyTrackerFour = document.querySelector("#accuracy-tracker-4");
const accuracyTrackerFive = document.querySelector("#accuracy-tracker-5");
const accuracyTrackerSix = document.querySelector("#accuracy-tracker-6");

const accuracyTrackerSeven = document.querySelector("#accuracy-tracker-7");
const accuracyTrackerEight = document.querySelector("#accuracy-tracker-8");
const accuracyTrackerNine = document.querySelector("#accuracy-tracker-9");

const accuracyTrackerTen = document.querySelector("#accuracy-tracker-10");
const accuracyTrackerEleven = document.querySelector("#accuracy-tracker-11");
const accuracyTrackerTwelve = document.querySelector("#accuracy-tracker-12");


const themeMusic = new Audio("food-show-163665.mp3");


/*----------------------- Event Listeners -------------------------*/


// Hiding the landing page once "Play Now" has been clicked then showing the  questions after
const buttonStart = document.querySelector("#start");
buttonStart.addEventListener("click", () => {
    document.querySelector("#start").classList.remove("visible-start");
    
    document.querySelector(".quiz-container-1").classList.remove("hidden-question-1");
    document.querySelector(".quiz-container-2").classList.remove("hidden-question-2");
    document.querySelector(".quiz-container-3").classList.remove("hidden-question-3");

    document.querySelector(".quiz-container-4").classList.remove("hidden-question-4");
    document.querySelector(".quiz-container-5").classList.remove("hidden-question-5");
    document.querySelector(".quiz-container-6").classList.remove("hidden-question-6");

    document.querySelector(".quiz-container-7").classList.remove("hidden-question-7");
    document.querySelector(".quiz-container-8").classList.remove("hidden-question-8");
    document.querySelector(".quiz-container-9").classList.remove("hidden-question-9");

    document.querySelector(".quiz-container-10").classList.remove("hidden-question-10");
    document.querySelector(".quiz-container-11").classList.remove("hidden-question-11");
    document.querySelector(".quiz-container-12").classList.remove("hidden-question-12");
    
})
buttonStart.addEventListener("click", (event) => {
    themeMusic.volume = .007
    themeMusic.play()
    themeMusic.addEventListener("ended", () => {
        themeMusic.currentTime = 0;
        themeMusic.play();
    })
})





// Declaring event listeners for the 1st question answer buttons
const answerButtonsOne = document.querySelectorAll(".answer-buttons-1")
answerButtonsOne.forEach((answerButtonOne) => {
    answerButtonOne.addEventListener("click", (event) => {
        if (event.target) {
            answerButtonsOne.forEach((btn) => {
                btn.classList.remove("blue");
                answerButtonsOne.forEach(btn => btn.disabled = true);
            })
            clickedButton = event.target;
            clickedButton.classList.add("blue");
        }

        // Invoking correctAnswer/incorrectAnswer buttons AND tracking userAccuracy by using comparison statement
        if (event.target.innerText === correctAnswerOne) {
            answerResultsOne.appendChild(correctButtonElement);

            userAccuracy.correct = userAccuracy.correct + 1;
            userAccuracy.total = userAccuracy.total + 1;
            
            accuracyTrackerOne.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;

        } else if (event.target.innerText !== correctAnswerOne) {
            answerResultsOne.appendChild(incorrectButtonElement);

            userAccuracy.incorrect = userAccuracy.incorrect + 1;
            userAccuracy.total = userAccuracy.total + 1;

            accuracyTrackerOne.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;

        } else {

        }

    });

});


// Declaring event listeners for the 2nd question answer buttons
const answerButtonsTwo = document.querySelectorAll(".answer-buttons-2")
answerButtonsTwo.forEach((answerButtonTwo) => {
    answerButtonTwo.addEventListener("click", (event) => {
        if (event.target) {
            answerButtonsTwo.forEach((btn) => {
                btn.classList.remove("blue");
                answerButtonsTwo.forEach(btn => btn.disabled = true);
            })
            clickedButton = event.target;
            clickedButton.classList.add("blue");
        }

        // Invoking correctAnswer/incorrectAnswer buttons AND tracking userAccuracy by using comparison statement
        if (event.target.innerText === correctAnswerTwo) {
            answerResultsTwo.appendChild(correctButtonElement);

            userAccuracy.correct = userAccuracy.correct + 1;
            userAccuracy.total = userAccuracy.total + 1;
            
            accuracyTrackerTwo.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;

        } else if (event.target.innerText !== correctAnswerTwo) {
            answerResultsTwo.appendChild(incorrectButtonElement);

            userAccuracy.incorrect = userAccuracy.incorrect + 1;
            userAccuracy.total = userAccuracy.total + 1;

            accuracyTrackerTwo.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;

        } else {

        }

    });

});


// Declaring event listeners for the 3rd question answer buttons
const answerButtonsThree = document.querySelectorAll(".answer-buttons-3")
answerButtonsThree.forEach((answerButtonThree) => {
    answerButtonThree.addEventListener("click", (event) => {
        if (event.target) {
            answerButtonsThree.forEach((btn) => {
                btn.classList.remove("blue");
                answerButtonsThree.forEach(btn => btn.disabled = true);
            })
            clickedButton = event.target;
            clickedButton.classList.add("blue");
        }

        // Invoking correctAnswer/incorrectAnswer buttons AND tracking userAccuracy by using comparison statement
        if (event.target.innerText === correctAnswerThree) {
            answerResultsThree.appendChild(correctButtonElement);

            userAccuracy.correct = userAccuracy.correct + 1;
            userAccuracy.total = userAccuracy.total + 1;
            
            accuracyTrackerThree.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;

        } else if (event.target.innerText !== correctAnswerThree) {
            answerResultsThree.appendChild(incorrectButtonElement);

            userAccuracy.incorrect = userAccuracy.incorrect + 1;
            userAccuracy.total = userAccuracy.total + 1;

            accuracyTrackerThree.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;
            
        } else {

        }

    });

});


// Declaring event listeners for the 4th question answer buttons
const answerButtonsFour = document.querySelectorAll(".answer-buttons-4")
answerButtonsFour.forEach((answerButtonFour) => {
    answerButtonFour.addEventListener("click", (event) => {
        if (event.target) {
            answerButtonsFour.forEach((btn) => {
                btn.classList.remove("blue");
                answerButtonsFour.forEach(btn => btn.disabled = true);
            })
            clickedButton = event.target;
            clickedButton.classList.add("blue");
        }

        // Invoking correctAnswer/incorrectAnswer buttons AND tracking userAccuracy by using comparison statement
        if (event.target.innerText === correctAnswerFour) {
            answerResultsFour.appendChild(correctButtonElement);

            userAccuracy.correct = userAccuracy.correct + 1;
            userAccuracy.total = userAccuracy.total + 1;
            
            accuracyTrackerFour.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;

        } else if (event.target.innerText !== correctAnswerFour) {
            answerResultsFour.appendChild(incorrectButtonElement);

            userAccuracy.incorrect = userAccuracy.incorrect + 1;
            userAccuracy.total = userAccuracy.total + 1;

            accuracyTrackerFour.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;
            
        } else {

        }

    });

});


// Declaring event listeners for the 5th question answer buttons
const answerButtonsFive = document.querySelectorAll(".answer-buttons-5")
answerButtonsFive.forEach((answerButtonFive) => {
    answerButtonFive.addEventListener("click", (event) => {
        if (event.target) {
            answerButtonsFive.forEach((btn) => {
                btn.classList.remove("blue");
                answerButtonsFive.forEach(btn => btn.disabled = true);
            })
            clickedButton = event.target;
            clickedButton.classList.add("blue");
        }

        // Invoking correctAnswer/incorrectAnswer buttons AND tracking userAccuracy by using comparison statement
        if (event.target.innerText === correctAnswerFive) {
            answerResultsFive.appendChild(correctButtonElement);

            userAccuracy.correct = userAccuracy.correct + 1;
            userAccuracy.total = userAccuracy.total + 1;
            
            accuracyTrackerFive.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;

        } else if (event.target.innerText !== correctAnswerFive) {
            answerResultsFive.appendChild(incorrectButtonElement);

            userAccuracy.incorrect = userAccuracy.incorrect + 1;
            userAccuracy.total = userAccuracy.total + 1;

            accuracyTrackerFive.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;
            
        } else {

        }

    });

});


// Declaring event listeners for the 6th question answer buttons
const answerButtonsSix = document.querySelectorAll(".answer-buttons-6")
answerButtonsSix.forEach((answerButtonSix) => {
    answerButtonSix.addEventListener("click", (event) => {
        if (event.target) {
            answerButtonsSix.forEach((btn) => {
                btn.classList.remove("blue");
                answerButtonsSix.forEach(btn => btn.disabled = true);
            })
            clickedButton = event.target;
            clickedButton.classList.add("blue");
        }

        // Invoking correctAnswer/incorrectAnswer buttons AND tracking userAccuracy by using comparison statement
        if (event.target.innerText === correctAnswerSix) {
            answerResultsSix.appendChild(correctButtonElement);

            userAccuracy.correct = userAccuracy.correct + 1;
            userAccuracy.total = userAccuracy.total + 1;
            
            accuracyTrackerSix.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;

        } else if (event.target.innerText !== correctAnswerSix) {
            answerResultsSix.appendChild(incorrectButtonElement);

            userAccuracy.incorrect = userAccuracy.incorrect + 1;
            userAccuracy.total = userAccuracy.total + 1;

            accuracyTrackerSix.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;
            
        } else {

        }

    });

});


// Declaring event listeners for the 7th question answer buttons
const answerButtonsSeven = document.querySelectorAll(".answer-buttons-7")
answerButtonsSeven.forEach((answerButtonSeven) => {
    answerButtonSeven.addEventListener("click", (event) => {
        if (event.target) {
            answerButtonsSeven.forEach((btn) => {
                btn.classList.remove("blue");
                answerButtonsSeven.forEach(btn => btn.disabled = true);
            })
            clickedButton = event.target;
            clickedButton.classList.add("blue");
        }

        // Invoking correctAnswer/incorrectAnswer buttons AND tracking userAccuracy by using comparison statement
        if (event.target.innerText === correctAnswerSeven) {
            answerResultsSeven.appendChild(correctButtonElement);

            userAccuracy.correct = userAccuracy.correct + 1;
            userAccuracy.total = userAccuracy.total + 1;
            
            accuracyTrackerSeven.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;

        } else if (event.target.innerText !== correctAnswerSeven) {
            answerResultsSeven.appendChild(incorrectButtonElement);

            userAccuracy.incorrect = userAccuracy.incorrect + 1;
            userAccuracy.total = userAccuracy.total + 1;

            accuracyTrackerSeven.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;
            
        } else {

        }

    });

});


// Declaring event listeners for the 8th question answer buttons
const answerButtonsEight = document.querySelectorAll(".answer-buttons-8")
answerButtonsEight.forEach((answerButtonEight) => {
    answerButtonEight.addEventListener("click", (event) => {
        if (event.target) {
            answerButtonsEight.forEach((btn) => {
                btn.classList.remove("blue");
                answerButtonsEight.forEach(btn => btn.disabled = true);
            })
            clickedButton = event.target;
            clickedButton.classList.add("blue");
        }

        // Invoking correctAnswer/incorrectAnswer buttons AND tracking userAccuracy by using comparison statement
        if (event.target.innerText === correctAnswerEight) {
            answerResultsEight.appendChild(correctButtonElement);

            userAccuracy.correct = userAccuracy.correct + 1;
            userAccuracy.total = userAccuracy.total + 1;
            
            accuracyTrackerEight.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;

        } else if (event.target.innerText !== correctAnswerEight) {
            answerResultsEight.appendChild(incorrectButtonElement);

            userAccuracy.incorrect = userAccuracy.incorrect + 1;
            userAccuracy.total = userAccuracy.total + 1;

            accuracyTrackerEight.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;
            
        } else {

        }

    });

});


// Declaring event listeners for the 9th question answer buttons
const answerButtonsNine = document.querySelectorAll(".answer-buttons-9")
answerButtonsNine.forEach((answerButtonNine) => {
    answerButtonNine.addEventListener("click", (event) => {
        if (event.target) {
            answerButtonsNine.forEach((btn) => {
                btn.classList.remove("blue");
                answerButtonsNine.forEach(btn => btn.disabled = true);
            })
            clickedButton = event.target;
            clickedButton.classList.add("blue");
        }

        // Invoking correctAnswer/incorrectAnswer buttons AND tracking userAccuracy by using comparison statement
        if (event.target.innerText === correctAnswerNine) {
            answerResultsNine.appendChild(correctButtonElement);

            userAccuracy.correct = userAccuracy.correct + 1;
            userAccuracy.total = userAccuracy.total + 1;
            
            accuracyTrackerNine.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;

        } else if (event.target.innerText !== correctAnswerNine) {
            answerResultsNine.appendChild(incorrectButtonElement);

            userAccuracy.incorrect = userAccuracy.incorrect + 1;
            userAccuracy.total = userAccuracy.total + 1;

            accuracyTrackerNine.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;
            
        } else {

        }

    });

});


// Declaring event listeners for the 10th question answer buttons
const answerButtonsTen = document.querySelectorAll(".answer-buttons-10")
answerButtonsTen.forEach((answerButtonTen) => {
    answerButtonTen.addEventListener("click", (event) => {
        if (event.target) {
            answerButtonsTen.forEach((btn) => {
                btn.classList.remove("blue");
                answerButtonsTen.forEach(btn => btn.disabled = true);
            })
            clickedButton = event.target;
            clickedButton.classList.add("blue");
        }

        // Invoking correctAnswer/incorrectAnswer buttons AND tracking userAccuracy by using comparison statement
        if (event.target.innerText === correctAnswerTen) {
            answerResultsTen.appendChild(correctButtonElement);

            userAccuracy.correct = userAccuracy.correct + 1;
            userAccuracy.total = userAccuracy.total + 1;
            
            accuracyTrackerTen.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;

        } else if (event.target.innerText !== correctAnswerTen) {
            answerResultsTen.appendChild(incorrectButtonElement);

            userAccuracy.incorrect = userAccuracy.incorrect + 1;
            userAccuracy.total = userAccuracy.total + 1;

            accuracyTrackerTen.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;
            
        } else {

        }

    });

});


// Declaring event listeners for the 11th question answer buttons
const answerButtonsEleven = document.querySelectorAll(".answer-buttons-11")
answerButtonsEleven.forEach((answerButtonEleven) => {
    answerButtonEleven.addEventListener("click", (event) => {
        if (event.target) {
            answerButtonsEleven.forEach((btn) => {
                btn.classList.remove("blue");
                answerButtonsEleven.forEach(btn => btn.disabled = true);
            })
            clickedButton = event.target;
            clickedButton.classList.add("blue");
        }

        // Invoking correctAnswer/incorrectAnswer buttons AND tracking userAccuracy by using comparison statement
        if (event.target.innerText === correctAnswerEleven) {
            answerResultsEleven.appendChild(correctButtonElement);

            userAccuracy.correct = userAccuracy.correct + 1;
            userAccuracy.total = userAccuracy.total + 1;
            
            accuracyTrackerEleven.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;

        } else if (event.target.innerText !== correctAnswerEleven) {
            answerResultsEleven.appendChild(incorrectButtonElement);

            userAccuracy.incorrect = userAccuracy.incorrect + 1;
            userAccuracy.total = userAccuracy.total + 1;

            accuracyTrackerEleven.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;
            
        } else {

        }

    });

});


// Declaring event listeners for the 12th question answer buttons
const answerButtonsTwelve = document.querySelectorAll(".answer-buttons-12")
answerButtonsTwelve.forEach((answerButtonTwelve) => {
    answerButtonTwelve.addEventListener("click", (event) => {
        if (event.target) {
            answerButtonsTwelve.forEach((btn) => {
                btn.classList.remove("blue");
                answerButtonsTwelve.forEach(btn => btn.disabled = true);
            })
            clickedButton = event.target;
            clickedButton.classList.add("blue");
        }

        // Invoking correctAnswer/incorrectAnswer buttons AND tracking userAccuracy by using comparison statement
        if (event.target.innerText === correctAnswerTwelve) {
            answerResultsTwelve.appendChild(correctButtonElement);

            userAccuracy.correct = userAccuracy.correct + 1;
            userAccuracy.total = userAccuracy.total + 1;
            
            userAccuracy.correct >= userAccuracy.correct + 9;
            userAccuracy.total <= userAccuracy.total + 12;
            
            accuracyTrackerTwelve.textContent = `Congratulations! You got ${userAccuracy.correct} out of ${userAccuracy.total} correct! You are ready to code!`;

        } else if (event.target.innerText !== correctAnswerTwelve) {
            answerResultsTwelve.appendChild(incorrectButtonElement);

            userAccuracy.correct = userAccuracy.incorrect + 1;
            userAccuracy.total = userAccuracy.total + 1;

            userAccuracy.incorrect > userAccuracy.incorrect + 9;
            userAccuracy.total <= userAccuracy.total + 12;

            accuracyTrackerTwelve.textContent = `Unfortunately, you only got ${userAccuracy.correct} out of ${userAccuracy.total} correct. At least 9 out of 12 questions are required to pass.`;

        } else {

        }

    });

});


gameResultsDisplay = document.querySelector("#win-loss-message")
