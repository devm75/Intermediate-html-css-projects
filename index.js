const navbar = document.getElementById("navbar");
const intro = document.getElementById("intro");
const about = document.getElementById("about-section");
const experience = document.getElementById("experience-section");
const sections = document.querySelectorAll(".section");
const landingViewSection = document.querySelector(".landing-view-section");
const elementsToAnimate = document.querySelectorAll("[data-animate_upwards]");
const navItems = navbar.querySelectorAll('#nav-item');
//---scroll based navbar modifications--//
navItems.forEach((element) => element.addEventListener('click', (e) => {
  e.preventDefault();
  const idOfElementToScrollTo = e.target.getAttribute('href');

   document.querySelector(idOfElementToScrollTo).scrollIntoView({behavior:'smooth'})
}
))
// navbar.querySelector()


document.addEventListener("scroll", (e) => {
  if (scrollY > 80) {
    navbar.style.backgroundColor = "white";
    const navItemArray = navbar.children;
    for (let element of navItemArray) {
      element.style.transform = "translateY(-20px)";
    }
  } else {
    navbar.style.backgroundColor = "";
    const navItemArray = navbar.children;
    for (let element of navItemArray) {
      element.style.transform = "translateY(0)";
    }
  }
});

//-----------scroll effect on all elements, move upwards-----Intersection Observer API--//

const options = {
  root: null,
  threshold: 0.1,
  rootMargin: "10px",
};

let observer1 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transform = "translateY(0)";
      observer1.unobserve(entry.target);
    }
  });
}, options);

elementsToAnimate.forEach((element) => {
  observer1.observe(element);
});
