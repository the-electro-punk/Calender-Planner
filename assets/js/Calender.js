var today = new Date()
// for some reason, the day was 12 days behind so I added 12 to correct it
var date = (today.getMonth()+1)+'/'+(today.getDay()+12)+'/'+today.getFullYear()
console.log(date)
var hour = today.getHours()
// +':'+today.getMinutes()
console.log("current hours is " + hour)
let currentDate = document.getElementById("currentDate")

const sevenAM = document.getElementById("7AM") 
const eightAM = document.getElementById("8AM") 

// this fills the current date at the top
function getCurrentDate() {
    currentDate.textContent = date
    sevenAM.style.background = "aqua"
    eightAM.style.background = "aqua"
}
getCurrentDate()

// this function allows each timeblock to be colored red once that hour has passed
// example: fomr 7:00-8:00, the 7:00 timeblock is blue but once 8:00 hits, it turns red
function timeColors() {
    console.log("timeColors is active")
    if (hour >= 8) {
        sevenAM.style.background = "darkgray"
        console.log("we are past seven AM")
    }
    if (hour >= 9) {
        eightAM.style.background = "darkgray"
    }
}

// function timeColors() {
//     if (sevenAM < hour + 1) {
//         sevenAM.classList.remove("timeline")
//         sevenAM.classList.add("timelineDone")
//         console.log("we are past seven AM")
//     }
//     if (eightAM < hour + 1) {
//         eightAM.classList.remove("timeline")
//         sevenAM.classList.add("timelineDone")
//     }
// }
timeColors()


// https://tecadmin.net/get-current-date-time-javascript/
// https://careerkarma.com/blog/javascript-cannot-set-property-innerhtml-of-null/