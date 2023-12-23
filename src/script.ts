// selecting elements
const aElements = document.querySelectorAll("a");
const burgerMenuBtn = document.getElementsByClassName("burger-Menu-Wrap")[0];
const navlinkEl = document.getElementsByClassName("navlinks")[0];
// gelobal varibales
let elementsCount = 0;

// functions

// event linsters
const runEffect = () => {
  if (navlinkEl.classList.contains("active")) {
    navlinkEl.classList.remove("active");
    burgerMenuBtn.classList.add("active");
    let giveClassInt = setInterval(() => {
      if (elementsCount < aElements.length) {
        aElements[elementsCount].classList.add("active");
      } else {
        console.log("finished");
        setTimeout(() => {
          clearInterval(giveClassInt);
        }, 0);
      }
    }, 50);

    let increaseNum: any = setInterval(() => {
      if (elementsCount < aElements.length) {
        elementsCount++;
        console.log(elementsCount);
      } else {
        setTimeout(() => {
          clearInterval(increaseNum);
        }, 0);
      }
    }, 100);
    console.log(elementsCount);
  } else {
    aElements.forEach((aElement) => {
      if (aElement.classList.contains("active")) {
        aElement.classList.remove("active");
      }
    });
    elementsCount = 0;
    navlinkEl.classList.add("active");
    burgerMenuBtn.classList.remove("active");
  }
};

burgerMenuBtn.addEventListener("click", runEffect);
