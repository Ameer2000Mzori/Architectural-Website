// selecting elements
var aElements = document.querySelectorAll("a");
var burgerMenuBtn = document.getElementsByClassName("burger-Menu-Wrap")[0];
var navlinkEl = document.getElementsByClassName("navlinks")[0];
// gelobal varibales
var elementsCount = 0;
// functions
// run effect function, navbar, navlinks, animation burgermenu
var runEffect = function () {
    if (navlinkEl.classList.contains("active")) {
        navlinkEl.classList.remove("active");
        burgerMenuBtn.classList.add("active");
        burgerMenuBtn.style.pointerEvents = "none";
        var giveClassInt_1 = setInterval(function () {
            if (elementsCount < aElements.length) {
                aElements[elementsCount].classList.add("active");
            }
            else {
                console.log("finished");
                setTimeout(function () {
                    clearInterval(giveClassInt_1);
                    burgerMenuBtn.style.pointerEvents = "";
                }, 0);
            }
        }, 100);
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
        }, 150);
        console.log(elementsCount);
    }
    else {
        aElements.forEach(function (aElement) {
            if (aElement.classList.contains("active")) {
                aElement.classList.remove("active");
            }
        });
        elementsCount = 0;
        navlinkEl.classList.add("active");
        burgerMenuBtn.classList.remove("active");
    }
};
// event linsters
burgerMenuBtn.addEventListener("click", runEffect);
