//    NAVBAR AND NAVLINKS LOGIC //
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
//
//    Projects Cards Logic //
//
// selecting our elements
var projectsCardsWrap = document.getElementsByClassName("projects-Cards-Wrap")[0];
// global varibales
var projectData = [
    {
        img: "./assets/card1.jpg",
        title: "Your Dream House is here",
        description: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit.Unde, vero?",
    },
    {
        img: "./assets/card2.jpg",
        title: "Your Dream House is here",
        description: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit.Unde, vero?",
    },
    {
        img: "./assets/card3.jpg",
        title: "Your Dream House is here",
        description: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit.Unde, vero?",
    },
    {
        img: "./assets/card4.jpg",
        title: "Your Dream House is here",
        description: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit.Unde, vero?",
    },
    {
        img: "./assets/card5.jpg",
        title: "Your Dream House is here",
        description: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit.Unde, vero?",
    },
];
// functions
var listData = function () {
    // for each func to loop and get data from arry of object
};
// event lisnters
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
//     <div class="line-top"></div>
//   </div>
// </div>;
