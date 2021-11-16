const navbar = document.getElementById("navbar");
const intro = document.getElementById("intro");
const about = document.getElementById("about-section");
const experience = document.getElementById("experience-section");
const sections = document.querySelectorAll(".section");
const landingViewSection = document.querySelector(".landing-view-section");

//--------Navbar Effects-----------//

document.addEventListener("scroll", (e) => {
  let distanceFromTopOfIntroHeader = intro.getBoundingClientRect();

  if (distanceFromTopOfIntroHeader.y < 300) {
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("navbar").style.zIndex = 100;
    document.getElementById("navbar").style.paddingBottom = "1rem";
    document.getElementById("navbar").style.borderBottom =
      "2px solid rgb(243, 226, 226)";
  } else {
    document.getElementById("navbar").style.backgroundColor = "";
    document.getElementById("navbar").style.zIndex = 1;
    document.getElementById("navbar").style.paddingBottom = "0";
    document.getElementById("navbar").style.borderBottom = "none";
  }

  let distanceFromTopOfAboutSection = about.getBoundingClientRect();

  if (distanceFromTopOfAboutSection.y < 1000) {
    document.getElementById("about-image-container").style.justifyContent =
      "center";
  }
});

//-----------scroll effect on all elements, move upwards-----//

const options = {
  root: null,
  threshold: 0.15,
  rootMargin: "10px",
};

let observer1 = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (
      entry.isIntersecting &&
      !entry.target.classList.contains("landing-view-section")
    ) {
      console.log(entry);
      entry.target.style.transition = "transform 2s";
      entry.target.style.transform = "translateY(0)";
      // console.log('hi');

      observer.unobserve(entry.target);
    }

    if (entry.target.querySelector(".intro") && entry.isIntersecting) {
      console.log("hi");
      document.querySelector("#intro").style.transition = "transform 1.5s";
      document.querySelector("#intro").style.transform = "translateY(-50px)";

      console.log(entry.target);
    } else {
      console.log("bye");
    }

    if (entry.target.querySelector(".image-border") && entry.isIntersecting) {
      document.querySelector(".image-border").style.transform =
        "translate(0,0)";
    }
  });
}, options);

sections.forEach((section) => {
  observer1.observe(section);
});
