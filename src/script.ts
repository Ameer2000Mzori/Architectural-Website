//    NAVBAR AND NAVLINKS LOGIC //
// selecting elements
const aElements = document.querySelectorAll("a");
const burgerMenuBtn = document.getElementsByClassName("burger-Menu-Wrap")[0];
const navlinkEl = document.getElementsByClassName("navlinks")[0];

// gelobal varibales
let elementsCount = 0;

// functions

// run effect function, navbar, navlinks, animation burgermenu
const runEffect = () => {
  if (navlinkEl.classList.contains("active")) {
    navlinkEl.classList.remove("active");
    burgerMenuBtn.classList.add("active");
    burgerMenuBtn.style.pointerEvents = "none";
    let giveClassInt = setInterval(() => {
      if (elementsCount < aElements.length) {
        aElements[elementsCount].classList.add("active");
      } else {
        console.log("finished");
        setTimeout(() => {
          clearInterval(giveClassInt);
          burgerMenuBtn.style.pointerEvents = "";
        }, 0);
      }
    }, 100);

    let increaseNum: any = setInterval(() => {
      if (elementsCount < aElements.length) {
        elementsCount++;
        console.log(elementsCount);
      } else {
        setTimeout(() => {
          clearInterval(increaseNum);
        }, 0);
      }
    }, 150);
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

// event linsters
burgerMenuBtn.addEventListener("click", runEffect);
//
//    Projects Cards Logic //
//

// selecting our elements
const projectsCardsWrap = document.getElementsByClassName(
  "projects-Cards-Wrap"
)[0];

// global varibales
const projectData = [
  {
    img: "./assets/card1.jpg",
    title: "Your Dream House is here",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit.Unde, vero?",
  },
  {
    img: "./assets/card2.jpg",
    title: "Your Dream House is here",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit.Unde, vero?",
  },
  {
    img: "./assets/card3.jpg",
    title: "Your Dream House is here",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit.Unde, vero?",
  },
  {
    img: "./assets/card4.jpg",
    title: "Your Dream House is here",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit.Unde, vero?",
  },
  {
    img: "./assets/card5.jpg",
    title: "Your Dream House is here",
    description:
      "  Lorem ipsum dolor, sit amet consectetur adipisicing elit.Unde, vero?",
  },
];

// functions
const listData = () => {
  // for each func to loop and get data from arry of object
  projectData.forEach((data) => {
    // creating our data dynamiclly + giving data
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-Card");

    const ProjectImg = document.createElement("div");
    ProjectImg.classList.add("Project-Img");
    projectCard.appendChild(ProjectImg);

    const hiddenInfoBox = document.createElement("div");
    hiddenInfoBox.classList.add("project-Hiden-Ifo-Box");
    projectCard.appendChild(hiddenInfoBox);

    const projectTextWrap = document.createElement("div");
    projectTextWrap.classList.add("project-Text-Wrap");
    hiddenInfoBox.appendChild(projectTextWrap);

    const pTitleText1 = document.createElement("h3");
    pTitleText1.classList.add("project-Title-Text-1");
    projectTextWrap.appendChild(pTitleText1);

    const pTitleText2 = document.createElement("p");
    pTitleText2.classList.add("project-Title-Text-2");
    projectTextWrap.appendChild(pTitleText2);

    const lineLeft = document.createElement("div");
    lineLeft.classList.add("line-Left");

    const lineTop = document.createElement("div");
    lineTop.classList.add("line-Top");
  });
};

// event lisnters
// window.addEventListener("load", listData);

// look up html tree concept

// <div class="project-Card">
//   <div class="Project-Img"></div>
//   <div class="project-Hiden-Ifo-Box">
//     <div class="project-Text-Wrap">
//       <h3 class="project-Title-Text-1">Your Dream House is here</h3>
//       <p class="project-Title-Text-2">
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, vero?
//       </p>
//     </div>
//     <div class="line-Left"></div>
//     <div class="line-Top"></div>
//   </div>
// </div>;
