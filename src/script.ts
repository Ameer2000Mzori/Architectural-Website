// selecting elements
const aElements = document.querySelectorAll("a");
const burgerMenuBtn = document.getElementsByClassName("burger-Menu-Wrap")[0];

// gelobal varibales
let elementsCount = 0;

// functions

// event linsters
const runEffect = () => {
  const giveClassInt = setInterval(() => {
    if (elementsCount < aElements.length) {
      aElements[elementsCount].classList.add("acitve");
    } else {
      console.log("finished");
      setTimeout(() => {
        clearInterval(giveClassInt);
      }, 0);
    }
  }, 1000);

  const increaseNum = setInterval(() => {
    if (elementsCount <= aElements.length) {
      elementsCount++;
      console.log(elementsCount);
    } else {
      setTimeout(() => {
        clearInterval(increaseNum);
      }, 0);
    }
  }, 1500);
  console.log(elementsCount);
};

// aElements.forEach((aElement) => {});
// const giveClassInt = setInterval(runEffect, 10000);
burgerMenuBtn.addEventListener("click", runEffect);
