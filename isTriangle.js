var angle = document.querySelectorAll(".angle")
var checkButton = document.querySelector(".check-btn")
var output = document.querySelector("#isTriangleOutput")

checkButton.addEventListener("click", isTriangle)

function isTriangle() {
    var sumOfAngles = calculateAngle(Number(angle[0].value), Number(angle[1].value), Number(angle[2].value))
    if (angle[0].value <= 0 || angle[1].value <= 0 || angle[2].value <= 0) {
        output.innerText = "Input should be greater than 0"
    } else if (sumOfAngles === 180) {
        output.innerText = "We can form triangle from your input"
    } else {
        output.innerText = "Sorry, total sum of 3 angles of triangle is 180, please try again"
    }
}

function calculateAngle(angle1, angle2, angle3) {
    var sum = angle1 + angle2 + angle3;
    return sum;
}