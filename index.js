const reviewData = [
  {
    name: "Forest Fruit Pie",
    rating: 3.5,
    reviews: 47,
  },

  {
    name: "Gluten-Free Persian Cake",
    rating: 3.9,
    reviews: 39,
  },

  {
    name: "Rel Velvet Cupcakes",
    rating: 4.6,
    reviews: 54,
  },
  {
    name: "Jenny's coffee cake",
    rating: 4.8,
    reviews: 70,
  },
];

const swiperWrapper = document.querySelector(".swiper-wrapper");

swiperWrapper.innerHTML = reviewData
  .map((data, index) => {
    return `
    <div class="swiper-slide slide_${index + 1}">
    <div class="innerSlide">
    <div class="ratingWrapper">
    <div class="stars">
    ${[...Array(5)]
        .map((star, index) => {
          return `
        <span class=${index + 1 <= Math.floor(data.rating) ? "active " : "star"
            } >&#x2605;</span>
        `;
        })
        .join("")}
    </div>
    <div class="ratingContainer">
    <h2 class="rating">${data.rating}</h2>
                  <p class="review">${data.reviews}</p>
                </div>
              </div>
              <div class="reviewWrapper">
                <h1>${data.name}</h1>
                <p class="reviewDesc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur ab nostrum dolore quaerat labore quod?
                </p>
              </div>
              <button class="read-more-btn">Read More</button>
            </div>
          </div>
    `;
  })
  .join("");

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.3,
  centeredSlides: true,
  speed: 500,
  mousewheel: true,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


