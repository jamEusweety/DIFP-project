// Contact Us
//  nav  bar effect on scroll

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
});

//  nav  bar effect on scroll end


//  click hamburger to open nav-links

const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

//  click hamburger to open nav-links end

// hamburger animation on click

hamburger.addEventListener('click', () => {
  hamburger.querySelectorAll('span').forEach(
    (span) => span.classList.toggle('open'));
});

// hamburger animation on click end

// contact flip form

var card = document.getElementById("card");
function openRegister(){
card.style.transform = "rotateY(-180deg)"
}
function openLogin(){
card.style.transform = "rotateY(0deg)"
}

// contact flip form end

// slide-in section
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
// slide-in section end