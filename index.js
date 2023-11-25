const buttonBackground = document.querySelector('.button-background');
const emailButton = document.querySelector('.email');
const linkButton = document.querySelector('.link');
const buttonContainer = document.querySelector('.invite-toggler');
const copyBtn = document.querySelector('.copy');

const dropdown = document.querySelector('.drop-down');
const dropdownBtn = document.querySelector('.dropdown-btn');

const buttons = document.querySelectorAll('.invite');

const form = document.querySelector('form');
form.onsubmit = (e) => {
    e.preventDefault();
}

function positionBackground(target, flag) {
    const buttonCoords = target.getBoundingClientRect();
    const inviteCoords = buttonContainer.getBoundingClientRect();
    const coords = {
        width: buttonCoords.width,
        height: buttonCoords.height,
        left: buttonCoords.left - inviteCoords.left,
        top: buttonCoords.top - inviteCoords.top,
    }


    if (flag && !target.classList.contains('active')) {
        target.classList.add('active');
    }

    buttonBackground.style.setProperty("height", `${coords.height}px`)
    buttonBackground.style.setProperty("width", `${coords.width}px`)
    buttonBackground.style.setProperty("transform", `translate(${coords.left - 5}px, ${coords.top - 5}px)`)
    buttonBackground.style.setProperty("opacity", "1")
}


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        positionBackground(linkButton);
    }, 500)
})



// buttons.forEach(button => {
//     button.addEventListener('mouseenter', () => {
//         if (button.classList.contains('active')) return;
//         positionBackground(button, false);
//     })
// })

// buttons.forEach(button => {
//     button.addEventListener('mouseleave', () => {
//         if (button.classList.contains('active')) return;
//         buttonBackground.style.setProperty("opacity", "0")
//         const activeButton = document.querySelector('.active');
//         if (activeButton) {
//             positionBackground(activeButton, true);
//         }
//     })
// })



buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('active')) return;
        buttons.forEach(button => button.classList.remove('active'));
        positionBackground(button, true);
    })
})






dropdownBtn.addEventListener('click', (e) => {
    const arrow = e.currentTarget.querySelector('i');
    dropdown.classList.toggle('show');
    if (dropdown.classList.contains('show')) {
        arrow.classList.add('fa-chevron-up');
        arrow.classList.remove('fa-chevron-down');
    }
    else {
        arrow.classList.remove('fa-chevron-up');
        arrow.classList.add('fa-chevron-down');
    }
})


copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('https://examplelinktoshare/my-team/jid98490032')
    copyBtn.innerText = "Copied to Clipboard";
    setTimeout(() => {
        copyBtn.innerText = "Copy Link";
    }, 2500)
})











