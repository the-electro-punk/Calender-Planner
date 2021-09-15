var today = new Date()
// for some reason, the day was 12 days behind so I added 12 to correct it
var date = (today.getMonth()+1)+'/'+(today.getDay()+12)+'/'+today.getFullYear()
console.log(date)

var hour = today.getHours()
// +':'+today.getMinutes()
console.log("current hours is " + hour)

let currentDate = document.getElementById("currentDate")

const addEvent = document.getElementById('add-event')
const deleteEvent = document.getElementById('delete-event')

addEvent.addEventListener('click', oneMoreEvent)

function oneMoreEvent() {
    let inputForm = document.createElement('form')
    inputForm.setAttribute()
}

// I created seperate IDs for each timeblock so I could more easily alter their colors
const sevenAM = document.getElementById("7AM") 
const eightAM = document.getElementById("8AM") 
const nineAM = document.getElementById("9AM")
const tenAM = document.getElementById("10AM")
const elevenAM = document.getElementById("11AM")

// this fills the current date at the top
// it also ensures each timeblock starts as the right color
function getCurrentDate() {
    currentDate.textContent = date
    sevenAM.style.background = "aqua"
    eightAM.style.background = "aqua"
    nineAM.style.background = "aqua"
    tenAM.style.background = "aqua"
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
    if (hour >= 10) {
        nineAM.style.background = "darkgray"
    }
    if (hour >= 11) {
        tenAM.style.background = "darkgray"
    }
    if (hour >= 12) {
        elevenAM.style.background = "darkgray"
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