const next = document.querySelector(".next-arrow");
const prev = document.querySelector(".prev-arrow");

let index = 1;
showSlides(1);

function plusSlides(n) {
  showSlides(index += n);
}

function currentSlide(n) {
  showSlides(index = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slider__item");
  console.log(slides);
  const dots = document.getElementsByClassName("slider-nav__item");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[index-1].style.display = "block";
  dots[index-1].className += " active";
  // hideSliderNavItem(n);
}


next.addEventListener("click", (event)=> {
  plusSlides(1);
})

prev.addEventListener("click", (event) => {
  plusSlides(-1);
})

// function hideSliderNavItem(n) {
//   const dots = document.getElementsByClassName("slider-nav__item");
//   for (let i = 0; i < n; i++) {
//     console.log(n);
//     dots[i].style.display = "none";
//   }
//   for (let i = n; i < n + 2; i++) {
//     console.log(n);
//     dots[i].style.display = "block";
//   }
//   for (let i = n + 2; i < dots.length; i++) {
//     console.log(n);
//     dots[i].style.display = "none";
//   }
// }
