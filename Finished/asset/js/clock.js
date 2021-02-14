const deg = 6;
const hr = document.querySelector("#hr")
const mint = document.querySelector("#mnt")
const sec = document.querySelector("#sc")

setInterval(() =>{
    let day = new Date();
    let hh = day.getHours()*30;
    let mn = day.getMinutes()*deg;
    let sco = day.getSeconds()*deg;

    hr.style.transform = `rotateZ(${(hh) + (mn/12)}deg)`;
    mint.style.transform = `rotateZ(${(mn)}deg)`;
    sec.style.transform = `rotateZ(${(sco)}deg)`;
})