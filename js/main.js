// ***** animate landing transition *****
const LANDING_BTN = document.querySelector(".view-portfolio-text");
LANDING_BTN.addEventListener(
  "click",
  () => {
    const BLOCK_TL = document.querySelector(".block-top-left");
    const BLOCK_TR = document.querySelector(".block-top-right");
    const BLOCK_BT = document.querySelector(".block-bottom");
    function flyIn() {
      BLOCK_TL.style.opacity = "1";
      BLOCK_TR.style.opacity = "1";
      BLOCK_TL.style.left = "0";
      setTimeout(() => {
        BLOCK_TR.style.top = "0";
        ``;
      }, 200);
      setTimeout(() => {
        BLOCK_BT.style.top = "40.75vh";
      }, 400);
      setTimeout(() => {
        window.scrollTo({ top: window.innerHeight + 1, behavior: "auto" });
      }, 800);
      setTimeout(() => {
        flyOut();
        setTimeout(() => {
          resetBlocks();
        }, 450);
      }, 1000);
    }

    function flyOut() {
      BLOCK_TL.style.top = "-50vh";
      BLOCK_TR.style.left = "100%";
      BLOCK_BT.style.top = "100vh";
    }

    function resetBlocks() {
      BLOCK_TL.style.opacity = "0";
      BLOCK_TR.style.opacity = "0";
      BLOCK_TL.style.top = "0";
      BLOCK_TL.style.left = "-50%";
      BLOCK_TR.style.top = "-50vh";
      BLOCK_TR.style.left = "50%";
    }
    flyIn();
  },
  false
);

// ***** set nav open state *****
let navOpen = false;

// ***** dropdown on hamburger click *****
const navDropdown = (bool) => {
  const DROPDOWN = document.querySelector(".dropdown-back");
  bool ? (DROPDOWN.style.top = "0px") : (DROPDOWN.style.top = "-450px");
};

// ***** animate dropdown elements *****
const animateDropdownElements = (bool) => {
  // dropdown shape
  const SHAPE = document.querySelector(".dropdown-shape");
  if (bool) {
    SHAPE.style.bottom = "0";
  } else {
    setTimeout(() => {
      SHAPE.style.bottom = "-380px";
    }, 50);
  }
  // dropdown list
  const LIST_ITEMS = document.querySelectorAll(".mobile-li");
  if (bool) {
    let i = 0;
    function flyIn() {
      setTimeout(() => {
        if (i < LIST_ITEMS.length) {
          LIST_ITEMS[i].style.transform = "translateX(-50%)";
          i++;
          flyIn();
        }
      }, 100);
    }
    flyIn();
  } else {
    LIST_ITEMS.forEach((item) => (item.style.transform = "translateX(-300%)"));
  }
};

// ***** add event listener to hamburger *****
const NAV_BUTTON = document.querySelector(".nav-hamburger");
NAV_BUTTON.addEventListener(
  "click",
  () => {
    navOpen = !navOpen;
    if (navOpen) {
      document
        .querySelectorAll(".bar")
        .forEach((bar) => bar.classList.add("open"));
    } else {
      document
        .querySelectorAll(".bar")
        .forEach((bar) => bar.classList.remove("open"));
    }
    navDropdown(navOpen);
    animateDropdownElements(navOpen);
  },
  false
);

// ***** hide nav on scroll *****
window.addEventListener(
  "scroll",
  () => {
    navOpen
      ? ((navOpen = !navOpen),
        navDropdown(navOpen),
        document
          .querySelectorAll(".bar")
          .forEach((bar) => bar.classList.remove("open")))
      : null;
  },
  false
);

// ***** shrink navbar on scroll *****
document.addEventListener("scroll", () => {
  const WINDOW_HEIGHT = window.innerHeight;
  const NAVBAR = document.querySelector(".nav-background");
  const SMALL_LOGO = document.querySelector(".small-logo-container");
  if (window.scrollY > WINDOW_HEIGHT) {
    SMALL_LOGO.style.opacity = "1";
    NAVBAR.style.top = "0";
    NAV_BUTTON.style.opacity = "1";
  } else {
    SMALL_LOGO.style.opacity = "0";
    NAVBAR.style.top = "-70px";
    NAV_BUTTON.style.opacity = "0";
  }
});

// ***** scroll to top button *****
document.querySelector(".back-to-top").addEventListener(
  "click",
  () => {
    window.scrollTo({ top: window.innerHeight + 1, behavior: "smooth" });
  },
  false
);

// ***** animate gauges on scroll *****
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY >= 1000) {
      setTimeout(() => {
        document.querySelector(".lang-html").style.transform = "rotate(144deg)";
      }, 300);
      setTimeout(() => {
        document.querySelector(".lang-css").style.transform = "rotate(144deg)";
      }, 600);
      setTimeout(() => {
        document.querySelector(".lang-js").style.transform = "rotate(108deg)";
      }, 900);
      setTimeout(() => {
        document.querySelector(".lang-react").style.transform = "rotate(90deg)";
      }, 1200);
      setTimeout(() => {
        document.querySelector(".lang-node").style.transform = "rotate(36deg)";
      }, 1500);
      setTimeout(() => {
        document.querySelector(".lang-inkscape").style.transform =
          "rotate(126deg)";
      }, 1800);
      setTimeout(() => {
        document.querySelector(".lang-figma").style.transform = "rotate(90deg)";
      }, 2100);
    }
  },
  false
);
