const carousel = document.getElementById('carousel');
const totalSlides = carousel.children.length
let currentIndex = 0

function slideShow(){
    const offset = -currentIndex * 100
    carousel.style.transform = `translateX(${offset}%)`

}

setInterval(()=>{
    currentIndex = (currentIndex + 1) % totalSlides
    slideShow()
}, 4000)





// Feb 28 2020
const targetDate = new Date (2020, 1, 28);


function calculateElapsedTime(target, current){
    let years = current.getFullYear() - target.getFullYear();
    let months = current.getMonth() - target.getMonth();
    let days = current.getDate() - target.getDate();



    if (days < 0) {
        months -= 1;
        // Get the last day of the previous month
        const lastDayOfMonth = new Date(current.getFullYear(), current.getMonth(), 0).getDate();
        days += lastDayOfMonth;
    }

    if (months < 0) {
        years -= 1;
        months += 12;
      }

    return { years, months, days};

}



function updateTimer(){
    const currentTime = new Date();
    const {years, months, days} = calculateElapsedTime(targetDate, currentTime);

    console.log(years, months, days)

    const container = document.getElementById('timerContainer')
    let timerHTML = 
    
    `
        <div class=" p-8 bg-white rounded-lg shadow-lg mt-4">
            <h1 class="md:text-8xl  text-5xl font-bold text-[#C2185B]">0${years}</h1>
            <p class="md:text-4xl text-2xl text-[#D8A7B1]">years</p>
        </div>

        <div class=" p-8 bg-white rounded-lg shadow-lg mt-4">
            <h1 class="md:text-8xl text-5xl  font-bold text-[#C2185B]">${months}</h1>
            <p class="md:text-4xl text-2xl text-[#D8A7B1]">months</p>
        </div>

        <div class="p-8 bg-white rounded-lg shadow-lg mt-4">
            <h1 class="md:text-8xl text-5xl  font-bold text-[#C2185B]">${days}</h1>
            <p class="md:text-4xl text-2xl text-[#D8A7B1]">days</p>
        </div>
    
    `

    container.innerHTML = timerHTML;

}


setInterval(updateTimer, 1000)

updateTimer();



const cards = [
    
    
    {
        type: 'love',
        text: 'I just want you to know that I will always love you no matter what. I love you even when we are in bad terms and even when we are fighting.'
    },
    {
        type: 'love',
        text: 'Just so you know that you are everything I asked for and I thank God for giving me the most careful, sweet, and loving girl a man could have. luv u!'
    },
    {
        type: 'love',
        text: 'IIIIIII LOVEEEEEEEE YOUUUUU SOOOOO MUCHHHHHH!!!!!!!!! 💗💗💗💗💗💗💗💗💗💗💗'
    },
    {
        type: 'love',
        text: 'I always cherish everymoment with you, because its a chapter in my favorite love story.'
    },
    {
        type: 'love',
        text: 'Thank you for being the light in my life. Without you, I\'ve prolly eaten by the sadness already. I loveee youu!'
    },
    {
        type: 'health',
        text: 'hey! char eme just a reminder to take care of your health. like my mama said, health is your overall foundation asya always take care omki?! you should always eat, drink plenty of water bis dika makitubig, take vitamins and more!'
    },
    {
        type: 'health',
        text: 'You should always eat atleast 3x a day and drink at least 6-8 glasses of water omki!?!'
    },
    {
        type: 'health',
        text: 'Always remember, your well-being matters. Don\'t push yourself too much sometimes and remember to give yourself the rest and care you deserve omkie?!'
    },
    {
        type: 'motivation',
        text: 'I know there are days na you feel lazy or unmotivated. Its normal to feel like that, after all mga tao manla kita but the thing is that we should never give up para haat dreams so yeah ehehe laban la tayuu! I\'m always here for you bb!'
    },
    {
        type: 'motivation',
        text: 'I always believe in you beh, I know na this college is very makuri kakaibang level unlike shs pero I know that even tho sugad maaram aq na makakaya mo in na mga challenges so yeah never back down never give up!'
    },
    {
        type: 'motivation',
        text: ' I always admire everything you do. I believe that right now, I am witnessing every step you take toward achieving your dream, and I’m very optimistic that you’ll achieve it. 😉'
    }
    
]


function renderCards(filteredCard = cards){
    const cardContainer  = document.getElementById('cardContaier')
    let cardsHTML = ''

    filteredCard.forEach((card)=>{
        
        cardsHTML += 
        `
            <div class="max-w-sm rounded-xl shadow-md mt-4  p-4 bg-white relative pt-6">
                <span class="bg-pink-200 p-2 rounded-md text-white absolute -top-4 -left-2 shadow-md ${card.type}">${card.type}</span>
                <p class="text-[#75485e]">
                   ${card.text}
                </p>
            </div>
        `

    })

    cardContainer.innerHTML = cardsHTML;
}


renderCards()

const filterButtons = document.querySelectorAll('.filter-btn')
filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const data = button.dataset.filterType
        applyFilter(data);

    })
})


function applyFilter(filter){
    
    const filteredCard  = cards.filter((card)=> card.type === filter)
    
    if(filteredCard.length === 0){
        renderCards(cards)
    }else{
        renderCards(filteredCard)
    }
 
}


const acceptBtn = document.getElementById('acceptBtn');
const flowerContainer = document.getElementById('flowerContainer');

// Show the container when the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    flowerContainer.classList.add('active');
});

// Hide the container when the button is clicked
acceptBtn.addEventListener('click', () => {
    flowerContainer.classList.remove('active');
});