let days = document.querySelector(".day")
let hours = document.querySelector(".hour")
let minutes = document.querySelector(".mini")
let seconds = document.querySelector(".se")







const endDate = "20 June 2024  9:00 PM"



let clock = ()=>{
    const end = new Date(endDate);
    const now = new Date();
    console.log(end);
    console.log(now);


    let diff = (end - now) / 1000


    console.log(Math.floor(diff/3600/24));



    let daysleft = Math.floor(diff / 3600 / 24);
    days.innerHTML = daysleft



    let hoursleft = Math.floor(diff/3600)%24;
    hours.innerHTML = hoursleft

    let minleft = Math.floor(diff/60)%60;
    minutes.innerHTML = minleft

    let secleft = Math.floor(diff%60)
    seconds.innerHTML = secleft
}


clock()




setInterval(() => {
    clock()
}, 1000);