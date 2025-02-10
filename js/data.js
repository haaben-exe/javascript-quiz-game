// =================Brainstorming Jeopardy Game==================== \\
  


/*  

    User Stories:
        1) I want to see a landing page to know if either the game is beginning a new game. ✔️

        2) I want to be able to click on an answer to see if my choice was correct. ✔️

        3) I want to see visual feedback after each question in order to know if I made a mistake or got the question right. ✔️
            
        4) I want to track my progress in-game in order to see how many questions I got right and wrong so that I can know what how many more mistakes I have left before I can't continue the quiz. ✔️

        5) At the end of my game, I want to be presented with a clear message indicating whether or not I won or loss. ✔️


    Pseudocode:
        1) Define the required variables used to track the game state
            -Player Choice
            -Set initial score at 0
            -Store accuracy percentage (% of ?'s answered correctly)
                and display it at all times throughout the game
                    --Clearly indicate that the user needs 9 in order
                        to pass the quiz
                    --When a question is answered correctly
                            ---Display "Correct"
                            ---Display why answer is correct
                            ---Tally correct answer to score as accurate
                    --When a question is answered incorrectly
                            ---Display "Incorrect"
                            ---Display why answer is incorrect
                            ---Tally incorrect answer to score as miss     
            -Define questions:
                    --The question itself
                    --The answer choices
                    --The correct answer(s)
            
        2) Store cached element variables
            -Buttons for answers, submit answer, and next/prev question
            -Add click event to select answer
            -Add a help "?" button to provide explanation for correct 
                and incorrect answer on each question

        3) Render a win/lose message to the player
            -Win/lose message displaying if you won or not
                    --If 9 and less than 12 answers were correct
                            ---Display "Congratulations! You got 
                            (answers correct) out of (total questions)
                            correct! Would you like to try and get all
                            the answers this time?"
                            ---Add click event for yes or no
                                ----If yes, restart the game
                                ----If no, take user back to landing
                                        page
                    --If less than 9 answers were correct
                            ---Display "Unfortunately you only got
                            (answers correct) out of (total questions)
                            correct. At least 9 out of 12 questions 
                            are required to pass. Would you like to 
                            retake the quiz?"
                            ---Add click event for yes or no
                                ----If yes, restart the game
                                ----If no, take user back to landing
                                        page
                    --If ALL 12 questions are answered correctly
                            ---Display "Incredible! You successfully
                            answered every question on the quiz! You're
                            on your way to becoming a great Javascript
                            programmer. Would you like to retake the
                            quiz again?"
                            ---Add click event for yes or no
                                ----If yes, restart the game
                                ----If no, take user back to landing
                                        page



    6 categories:
        1. Functions
        2. Arrays
        /// MVP Requirement \\\
        
        3. Objects
        4. Control Flow (Loops)
        5. DOM Events
        6. Array Iterator Methods


    Point-System 
        1. 100, 200, 300, 400, 500
        2. 150, 250, 350, 450, 600
        /// MVP Requirement \\\

        3. 200, 300, 400, 500, 700
        4. 250, 350, 450, 550, 800
        5. 300, 400, 500, 600, 900
        6. 350, 450, 550, 650, 1000
                
            -13,500 total points
                -9,000 without each category's last question
                -10,000 required for final round
                -22 questions out of 30 is 74% completion (target)

      FINAL Round: i, ii, iii, iv, v, vi

      SECRET CHALLENGE: a, b, c, d, e, f (5 questions but only one given
        per playthrough)

    Question styles:
        -Multiple select
            -Choose any of the following type questions
            -None of the above or all of the above on EVERY question
        True/False || Yes/No
            -"Is this console.log correct?"
            -"Are there any bugs in this line of code?"
        Single select
            -One of five options
            -Only used when applicable (former 3 styles take precedence)
        
    
    
        Win-Condition
        Solo: 
            -MVP win/loss condition is 9/12 (75% accuracy)
            -tally high score after 3 mistakes for loss condition
            -10,000 minimum score for final round
                -Complete final round for win condition
            -Complete entire board for flawless victory & secret 
                challenge


    Categorical Questions
        1. 100, 200, 300, 400, 500
        2. 150, 250, 350, 450, 600
        3. 200, 300, 400, 500, 700
        4. 250, 350, 450, 550, 800
        5. 300, 400, 500, 600, 900
        6. 400, 500, 600, 700, 1000
    
    
      * Placeholder examples for questions indicated by asterisk *

    
        1. Functions
            100) What is a Function? (Single Select)
                + A reusable block of code designed to perform a
                    specific task

            200) Why are Functions used? (Multiple Select)
                + To make code more reusable
                + To make code more modular
                + Easier to debug

            300) Is there a bug in this Function? (Boolean)
                + Yes or No

            400) What is the output of this console.log();? (SS)
                + Pick one of five

            500) *Please identify each part of the Function*: (MS)
                Example:
                function greet() {
                    console.log("Hello, world!");
                }
                greet();

                + console.log(); =
                + 
        
        2. Arrays
            150) What is an Array? (SS)
                + Used to store multiple items in one variable

            250) Why are Arrays Used? (MS)
                + Store lists of data efficiently
                + Allow for easy manipulation

            350) Is there a bug in this Array? (Boolean)
                + Yes or No

            450) What is the output of this console.log();? (SS)
                + Pick one of five

            600) *Please identify each part of the Array*. (MS)
                Example:
                let colors = ["red", "blue", "green"];
                    console.log(colors[0]); // Outputs "red"
                
                + let = 
                + colors =
                + "green" =
                + colors[0] =

        3. Objects
            200) What is an Object? (SS)
                + A collection of key-value pairs used to store
                    data & methods

            300)

            400)

            500)

            700)
        
        4. Control Flow (Loops)
            250) What is a Loop? (SS)
                + Allows you to execute a block of code multiple times

            350) When will you need to use a Loop? (Multiple Select)
                +When you need to go through an array
                +Repeat an action
                +Process data

            450)

            550)

            800)

        5. DOM Events
            300) What is a DOM Event? (SS)
                + An interaction that that occurs on a webpage

            400)

            500)

            600)

            900)

        6. Array Iterator Methods
            400) What are Array Iterators? (SS)
                +Built-in methods for looping through arrays

            500)

            600)

            700)

            1000)



    
    Final Round Questions:
            i.

            ii.

            iii.

            iv.

            v.

            vi.



    Secret Challenges:
            a.

            b.

            c.

            d.

            e.

            f.










*/