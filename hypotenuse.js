var length = document.querySelectorAll(".length")
var calculateButton = document.querySelector("#calculate-btn")
var hypotenuseOutput = document.querySelector("#hypotenuse-output")

calculateButton.addEventListener("click", calulatehypo)

function calulatehypo() {
    if (length[0].value <= 0 || length[1].value <= 0) {
        hypotenuseOutput.innerText = "Input should be greater than 0"
    } else {
        var sum = calculateSumofSquare(Number(length[0].value), Number(length[1].value))
        var lengthOfHypo = Math.sqrt(sum);
        hypotenuseOutput.innerText = " The length of the hypotenuse is " + lengthOfHypo;
    }
}

function calculateSumofSquare(a, b) {
    var sumOfSquare = a * a + b * b
    return sumOfSquare;

}