const menuBtn = document.querySelector('.menu--btn');
const menuIcon = document.querySelector('.menu--btn i');
const navbar = document.querySelector('nav');
const reviewWrapper = document.querySelector('.review--wrapper');
const mainHeading = document.querySelector('h1');
const desc = document.querySelector('.desc');
const trialBtn = document.querySelector('.trial--btn');
let navShow = false;


const reviewData = [
    {
        image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        title: "Redesigning my site increased sales by over 400% in one week",
    },
    {
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "Design handoff: What engineers really want to see",
    },
    {
        image: "https://images.unsplash.com/photo-1587038787166-becd08a156f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        title: "A Comprehensive list of human-computer interactions",
    },
    {
        image: "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        title: "Why do people hate redesigns?",
    },
]


menuBtn.addEventListener('click', () => {
    if (!navShow) {
        navbar.classList.add('show');
        menuIcon.classList.add('fa-times');
    }

    else {
        navbar.classList.remove('show');
        menuIcon.classList.remove('fa-times');
    }
    navShow = !navShow;
})


reviewWrapper.innerHTML = reviewData.map((data) => {
    let { image, title } = data;
    return (
        `
        <div class="review">
        <img
        src=${image}
        alt=${title}
        />
        <h2>
        ${title}
        </h2>
        <p>Jul 1, 2020</p>
        </div>
        `
    )
}).join('');


const reviews = document.querySelectorAll('.review');
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        reviews.forEach((review, index) => {
            gsap.fromTo(review, { ease: "poweri.out", x: -500, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, delay: index * 0.7 });
        })
    }, 3000);
})

gsap.fromTo(mainHeading, { ease: "poweri.out", x: -500, opacity: 0 }, { x: 0, opacity: 1, duration: 2 });
gsap.fromTo(desc, { ease: "poweri.out", x: -500, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5, delay: 0.5 });
gsap.fromTo(trialBtn, { ease: "poweri.out", x: -500, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5, delay: 0.8 });





