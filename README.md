




QUIZ CODE EXPLANATION:
The quizData array stores the questions, possible answers, and correct answer indices. The loadQuestion function displays the current question and creates answer buttons, but before doing so, it shuffles the answer choices using the .sort(() => Math.random() - 0.5) method. This ensures that every time a question loads, the order of choices is different, preventing users from memorizing answer placements. When a user selects an answer, the checkAnswer function validates it against the correct index and updates the button's appearance (green for correct, red for incorrect) while disabling all options to prevent multiple selections. The score increases if the answer is correct, and after a brief delay, the next question appears.
Once all questions have been answered, the showResults function displays the final score and provides a "Restart Quiz" button. Clicking this button triggers the restartQuiz function, resetting the score and reloading the first question, allowing users to retake the quiz. By using control statements (if-else, loops), the quiz ensures smooth question progression and answer validation. Additionally, the use of event handlers (addEventListener) allows for interactive button clicks that drive user engagement.
To enhance user experience, an event listener (DOMContentLoaded) initializes the quiz when the webpage loads.
