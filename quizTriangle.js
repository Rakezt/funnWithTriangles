var quizForm=document.querySelector(".quiz-form")
var submitButton=document.querySelector("#submit-btn")
var quizScore=document.querySelector("#quizScore")

var correctAnswer=["90°", "Right-angled"]

submitButton.addEventListener("click", checkAnswer)

function checkAnswer(){
    var score=0;
    var index=0;
    var formResults= new FormData(quizForm);
    for (var value of formResults.values()){
        if (value===correctAnswer[index]){
            score=score+1;
        }index=index+1
    }       quizScore.innerText="Your total score is " + score
}
