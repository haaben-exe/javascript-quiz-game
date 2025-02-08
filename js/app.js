//=====================Store Objects Here=========================\\




/*------------------------ Constants ------------------------------*/
// let playerChoice
let userAccuracy = {
    correct: 0,
    incorrect: 0,
    total: 0,
};

const jsQuiz = [
    {
        question: "What is a Javascript Function?",
        options: [
            "A reusable block of code designed to perform a specific task.",
            "question-1-answer-b",
            "question-1-answer-c",
            "question-1-answer-d"
        ],
        answer: "A reusable block of code designed to perform a specific task."
    },
];


/*--------------------- Variables (state) -------------------------*/



/*------------------ Cached Element References --------------------*/

let clickedButton = null;
const correctAnswerOne = jsQuiz[0].answer;



/*------------------------- Functions -----------------------------*/


function checkAnswer() {

    if (jsQuiz[0].options[0] === jsQuiz[0].answer) {
        console.log("Correct!");
    }
    else {
        console.log("Incorrect!");
    }
}



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


/*----------------------- Event Listeners -------------------------*/

console.log(`${userAccuracy.correct}`)


const correctButtonElement = document.createElement("button");
correctButtonElement.textContent = "Correct!";
correctButtonElement.disabled = true;


const incorrectButtonElement = document.createElement("button");
incorrectButtonElement.textContent = "Incorrect!";
incorrectButtonElement.disabled = true;


const answerResults = document.querySelector("#answer-result-1")

const userTracker = document.createElement("div")
userTracker.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;

const accuracyTracker = document.querySelector("#accuracy-tracker")


const buttonStart = document.querySelector("#start");
buttonStart.addEventListener("click", () => {
    document.querySelector(".quiz-container").classList.remove("hidden-question-1");
    document.querySelector(".landing-page").classList.remove("visible-landing-page");
    console.log("Button click confirmed");
})


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

        if (event.target.innerText === correctAnswerOne) {
            answerResults.appendChild(correctButtonElement);

            userAccuracy.correct = userAccuracy.correct + 1;
            userAccuracy.total = userAccuracy.total + 1;
            
            console.log(`Current progress is ${userAccuracy.correct}/${userAccuracy.total}`);
            
            accuracyTracker.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;

        } else if (event.target.innerText !== correctAnswerOne) {
            answerResults.appendChild(incorrectButtonElement);

            userAccuracy.incorrect = userAccuracy.incorrect + 1;
            userAccuracy.total = userAccuracy.total + 1;
            console.log(`Current progress is ${userAccuracy.correct}/${userAccuracy.total}`)

            accuracyTracker.textContent = `Current progress is ${userAccuracy.correct}/${userAccuracy.total}`;

        } else {

        }

    });

});








const nextQuestion = document.querySelectorAll("#next-button")



// const firstButton = document.getElementById("question-1-answer-a")
// console.log(firstButton);
// firstButton.addEventListener("click", (event) => {
// console.log(event.target.textContent, "This button was clicked");

// });



const answerChoices = document.querySelectorAll(".quiz-container")






// create a forEach loop to add the event listener to every button with a class of answer-button ()
// the event listener should compare user's input to correct answer
// comparison needs to be precise in order to check question for its right answer