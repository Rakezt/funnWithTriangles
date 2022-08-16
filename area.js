var arealength = document.querySelectorAll(".arealength")
var areaButton = document.querySelector("#area-btn")
var outputArea = document.querySelector("#output-area")

areaButton.addEventListener("click", calculateArea)

function calculateArea() {
    var area = multipleOfLength(Number(arealength[0].value), Number(arealength[1].value))
    var finalArea = area / 2;
    outputArea.innerText = "The area of the triangle is " + finalArea
}

function multipleOfLength(a, b) {
    var multiply = a * b;
    return multiply;

}