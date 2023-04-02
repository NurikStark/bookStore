export const dots = document.querySelectorAll(".dot");
export const slides = document.querySelectorAll(".slide");

let index = 0;
const intervalTime = 5000; 
let slideInterval;

export const activeSlide = (s) => {
    for (let i = 0; i < slides.length; i++) {
      if (i === s) {
        slides[i].classList.add("active");
      } else {
        slides[i].classList.remove("active");
      }
    }
  };
export const activeDot = (s) => {
    for (let i = 0; i < dots.length; i++) {
      if (i === s) {
        dots[i].classList.add("dot_active");
      } else {
        dots[i].classList.remove("dot_active");
      }
    }
};
  
export const prepareCurrentSlide = (ind) => {
    activeSlide(ind);
    activeDot(ind);
  };
  
export const nextSlide = () => {
    if (index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  };
  
export const prevSlide = () => {
    if (index == 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
    } else {
      index--;
      prepareCurrentSlide(index);
    }
  };
  
 dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
      index = indexDot;
      prepareCurrentSlide(index);
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    });
  });
slideInterval = setInterval(nextSlide, intervalTime);
