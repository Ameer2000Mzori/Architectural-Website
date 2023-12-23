// selecting elements
var aElements = document.querySelectorAll("a");
var burgerMenuBtn = document.getElementsByClassName("burger-Menu-Wrap")[0];
// gelobal varibales
var elementsCount = 0;
// functions
// event linsters
var runEffect = function () {
    var giveClassInt = setInterval(function () {
        if (elementsCount < aElements.length) {
            aElements[elementsCount].classList.add("acitve");
        }
        else {
            console.log("finished");
            setTimeout(function () {
                clearInterval(giveClassInt);
            }, 0);
        }
    }, 1000);
    var increaseNum = setInterval(function () {
        if (elementsCount <= aElements.length) {
            elementsCount++;
            console.log(elementsCount);
        }
        else {
            setTimeout(function () {
                clearInterval(increaseNum);
            }, 0);
        }
    }, 1500);
    console.log(elementsCount);
};
// aElements.forEach((aElement) => {});
// const giveClassInt = setInterval(runEffect, 10000);
burgerMenuBtn.addEventListener("click", runEffect);
