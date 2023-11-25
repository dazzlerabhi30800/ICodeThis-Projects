const btns = document.querySelectorAll('.btn');
const quantity = document.querySelector('.quantity');


let counter = 0;
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.textContent == '+') {
            counter += 1;
        }
        else {
            counter = counter - 1 >= 0 ? counter - 1 : 0;
        }
        quantity.textContent = counter;
    })
})