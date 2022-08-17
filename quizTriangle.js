var quizForm=document.querySelector(".quiz-form")
var submitButton=document.querySelector("#submit-btn")
var quizScore=document.querySelector("#quizScore")

var correctAnswer=[ "90°",
"right angled",
"one right angle",
"12, 16, 20",
"Equilateral triangle",
"100°",
"30°",
"a + b + c"]

submitButton.addEventListener("click", checkAnswer)

function checkAnswer(){
    var score=0;
    var index=0;
    var formResults= new FormData(quizForm);
    for (var value of formResults.values()){
        if (value===correctAnswer[index]){
            score++
        }index++
    }       quizScore.innerText="Your total score is " + score
}
