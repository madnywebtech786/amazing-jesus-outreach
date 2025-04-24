
  setInterval(autoScroll, 3000); // scroll every 3 seconds
  const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  });
  const scrollWrapper = document.getElementById('gallery-wrapper');
  const scrollLeftBtn = document.getElementById('scroll-left');
  const scrollRightBtn = document.getElementById('scroll-right');

  const scrollStep = 1; // Speed of scroll
  let autoScrollInterval;

  function autoScroll() {
    autoScrollInterval = setInterval(() => {
      scrollWrapper.scrollLeft += scrollStep;
      // Loop to start when reach end
      if (
        scrollWrapper.scrollLeft + scrollWrapper.clientWidth >=
        scrollWrapper.scrollWidth
      ) {
        scrollWrapper.scrollLeft = 0;
      }
    }, 20); // lower = faster
  }

  // Start auto scroll on page load
  window.addEventListener('load', autoScroll);

  // Arrow buttons
  scrollLeftBtn.addEventListener('click', () => {
    scrollWrapper.scrollBy({ left: -300, behavior: 'smooth' });
  });

  scrollRightBtn.addEventListener('click', () => {
    scrollWrapper.scrollBy({ left: 300, behavior: 'smooth' });
  });

  // Pause on hover
  scrollWrapper.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
  scrollWrapper.addEventListener('mouseleave', autoScroll);