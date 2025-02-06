//=====================Store Objects Here=========================\\




/*------------------------ Constants ------------------------------*/
// let playerChoice
let score = 0;
let answerAccuracy = 0;

const jsQuiz = [
    { question: "What is a Javascript Function?", 
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



/*------------------------- Functions -----------------------------*/


function checkAnswer() {

    if (jsQuiz[0].options[0] === jsQuiz[0].answer) {
        console.log("Correct!");
        return "Correct!"
    }    
    else {
        console.log("Incorrect!");
        return "Incorrect!"
    }
}

console.log(jsQuiz[0].answer);
checkAnswer();


 // answer === same location in each object/index in jsquiz array
    // the option a user selects by clickEvent should be compared to the correct answer
    // each button should have a clickEvent that will make the comparison for the specific question
        // Add clickEvent to the buttons and console.log the event.target
        // Inside clickEvent do the if statement to make the comparison (like done within this very function)
        // Make it dynamic so that each click makes the comparison for each respective object

/*----------------------- Event Listeners -------------------------*/
const nextQuestion = document.querySelectorAll("#next-button")



const answerButtons = document.querySelectorAll(".answer-button")
console.log(answerButtons)
const firstButton = document.getElementById("question-1-answer-a")
console.log(firstButton);
firstButton.addEventListener("click", (event) => {
console.log(event.target, "This button was clicked");

});

const buttonStart = document.querySelector("#start")
buttonStart.addEventListener("click", () => {
    document.querySelector(".quiz-container").classList.remove("hidden")
    console.log("Button click confirmed");
})

const submitResult = document.querySelector("#submit-results")

const answerChoices = document.querySelectorAll(".quiz-container")






// create a forEach loop to add the event listener to every button with a class of answer-button ()
// the event listener should compare user's input to correct answer
// comparison needs to be precise in order to check question for its right answer