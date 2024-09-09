// Toggle Menu Functionality
function toggleMenu() {
  var sidePanel = document.getElementById("sidePanel");
  if (sidePanel.style.left === "-200px") {
    sidePanel.style.left = "0";
  } else {
    sidePanel.style.left = "-200px";
  }
}

// Close Menu when clicking outside
document.addEventListener("click", function (event) {
  var sidePanel = document.getElementById("sidePanel");
  var hamburger = document.querySelector(".hamburger");

  // Check if the side panel is open and if the click is outside the side panel and the hamburger button
  if (
    sidePanel.style.left === "0px" &&
    !sidePanel.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    sidePanel.style.left = "-200px";
  }
});

// Smooth scroll for in-page navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Carousel Functionality for Home Section
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".carousel .slides img");
const dots = document.querySelectorAll(".carousel .dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
  dots.forEach((dot, i) => {
    dot.className = dot.className.replace(" active", "");
    if (i === index) {
      dot.className += " active";
    }
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  currentSlideIndex = index - 1;
  showSlide(currentSlideIndex);
}

setInterval(nextSlide, 3000);

// Initial display
showSlide(currentSlideIndex);

// Toggle Community Sections
function toggleSection(section) {
  const sections = document.querySelectorAll(".community-content");
  sections.forEach((sec) => {
    if (sec.id === section) {
      sec.style.display = sec.style.display === "block" ? "none" : "block";
      if (sec.style.display === "block") {
        sec.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      sec.style.display = "none";
    }
  });
}

// Carousel Functionality for Testimonials
let currentTestimonialIndex = 0;
const testimonialSlides = document.querySelectorAll(
  ".carousel-testimonials .testimonial-card"
);
const testimonialDots = document.querySelectorAll(".testimonial-dot");

function showTestimonial(index) {
  testimonialSlides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
  testimonialDots.forEach((dot, i) => {
    dot.className = dot.className.replace(" active", "");
    if (i === index) {
      dot.className += " active";
    }
  });
}

function nextTestimonial() {
  currentTestimonialIndex =
    (currentTestimonialIndex + 1) % testimonialSlides.length;
  showTestimonial(currentTestimonialIndex);
}

function currentTestimonial(index) {
  currentTestimonialIndex = index - 1;
  showTestimonial(currentTestimonialIndex);
}

setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds

// Initial display
showTestimonial(currentTestimonialIndex);

// Load More Members
function loadMoreMembers() {
  const members = [
    "Radhikareddy Chintareddy",
    "Nishi Gondhiya",
    "Harini Bhuvaneswari Gunasekaran",
    "Thiru Vanitha Rani Veluchamy",
    "Ponsubha Sivabalan",
    "Ramya Muralidaran",
    "Murali Ramu",
    "Sreekesh Kookkal",
    "Sreya Madhavan",
    "Yogalakshmi Venkatesan",
    "Ankita Samanta",
    "Tayyab Adnan Habibur Rahman",
    "Pavan Yellathakota",
  ];
  const memberList = document.querySelector(".member-list");
  members.forEach((member) => {
    const memberElement = document.createElement("p");
    memberElement.textContent = member;
    memberList.insertBefore(memberElement, memberList.querySelector("button"));
  });
  memberList.querySelector("button").remove();
}

// Reveal sections on scroll
const revealElements = document.querySelectorAll(".reveal");
function checkReveal() {
  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkReveal);
checkReveal();
