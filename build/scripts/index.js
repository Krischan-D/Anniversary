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