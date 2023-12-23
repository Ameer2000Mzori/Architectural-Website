// selecting elements
var aElements = document.querySelectorAll("a");
var burgerMenuBtn = document.getElementsByClassName("burger-Menu-Wrap")[0];
var navlinkEl = document.getElementsByClassName("navlinks")[0];
// gelobal varibales
var elementsCount = 0;
// functions
// event linsters
var runEffect = function () {
    if (navlinkEl.classList.contains("active")) {
        navlinkEl.classList.remove("active");
        var giveClassInt_1 = setInterval(function () {
            if (elementsCount < aElements.length) {
                aElements[elementsCount].classList.add("active");
            }
            else {
                console.log("finished");
                setTimeout(function () {
                    clearInterval(giveClassInt_1);
                }, 0);
            }
        }, 300);
        var increaseNum_1 = setInterval(function () {
            if (elementsCount < aElements.length) {
                elementsCount++;
                console.log(elementsCount);
            }
            else {
                setTimeout(function () {
                    clearInterval(increaseNum_1);
                }, 0);
            }
        }, 400);
        console.log(elementsCount);
    }
    else {
        navlinkEl.classList.add("active");
        elementsCount = 0;
        aElements.forEach(function (aElement) {
            if (aElement.classList.contains("active")) {
                aElement.classList.remove("active");
            }
        });
    }
};
burgerMenuBtn.addEventListener("click", runEffect);
