function animateTexts(selector) {
  const texts = document.querySelectorAll(selector);

  //   splits the text into invidual spans for each letter
  texts.forEach((text) => {
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

    // targets each span that was created
    const spans = text.querySelectorAll("span");

    anime
      // stops the animation from looping
      .timeline({
        loop: false,
      })
      .add({
        targets: spans,
        translateY: [-600, 0],
        scale: [10, 1],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
        delay: anime.stagger(100),
      });
  });
}

// Call the function for different classes or id's
animateTexts(".introductionName");
animateTexts("#profileChoice");
animateTexts("#slogan");

const arrowDown = document.getElementById("downArrow");
const introSection = document.getElementById("header");

// simple animation to make the arrow head move down and up on a loop
function down() {
  anime({
    targets: arrowDown,
    translateY: 25,
    duration: 800,
    direction: "alternate",
    loop: true,
    easing: "linear",
  });
}
down();

// makes a variable to store the scroll position for the top of the page
let lastScrollTop = 0;

// an event that checks the current scroll position
window.addEventListener("scroll", () => {
  const currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop) {
    // the the scroll position is not at the top of the page, it does not display the icon
    arrowDown.style.display = "none"; // Hide the icon
  } else {
    // The opposite
    arrowDown.style.display = "block"; // Show the icon
  }
});

function scrollOmMig() {
  const element = document.getElementById("aboutMe");
  element.scrollIntoView();
}

function scrollPortfolio() {
  const element = document.getElementById("portfolio");
  element.scrollIntoView();
}

function scrollKompetencer() {
    const element = document.getElementById("Skills");
    element.scrollIntoView();
  }

  function scrollKontaktMig() {
    const element = document.getElementById("footer");
    element.scrollIntoView();
  }