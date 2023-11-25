const buttons = document.querySelectorAll('.month');
const eventsWrapper = document.querySelector('.event-wrapper');

let monthChange = false;

const eventsData = [
    {
        date: 26,
        city: "Denver, CO, US",
        center: "Pepsi Center",
        sold: false,
    },

    {
        date: 28,
        city: "Omaha, CO, US",
        center: "BOK Center",
        sold: true,
    },
    {
        date: 29,
        city: "Tulsa, OK, US",
        center: "Century Center",
        sold: false,
    },
    {
        date: 30,
        city: "St. Paul, MN, US",
        center: "Xcel Center",
        sold: false,
    },
]
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(button => button.classList.remove('active'));
        button.classList.add('active');
        const { textContent } = button;
        if (textContent === 'december') {
            monthChange = true;
        }
        else {
            monthChange = false;
        }
        populateEvents();
    })
})


function populateEvents() {
    eventsWrapper.innerHTML = eventsData.map((event) => {
        let { date, city, center, sold } = event;
        return (
            `
            <div class="event">
                <div class="event-info">
                    <h2>${monthChange ? "DEC" : "NOV"} ${date} <br> <span>${city}</span></h2>
                    <div class="event-timings">
                        <span><i class="fas fa-location-dot"></i> ${center}</span>
                        <span><i class="fas fa-clock"></i> 20:00</span>
                    </div>
                </div>
                <button disabled=${sold} class=${sold ? "sold" : "buy-btn"} ><i class="fas fa-ticket"></i> Buy Ticket</button>
            </div>
            `
        )
    }).join('');
}


populateEvents();


