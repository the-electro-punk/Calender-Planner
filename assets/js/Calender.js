var today = new Date()
// for some reason, the day was 12 days behind so I added 12 to correct it
var date = (today.getMonth()+1)+'/'+(today.getDay()+12)+'/'+today.getFullYear()
console.log(date)
var hour = today.getHours()
// +':'+today.getMinutes()
console.log("current hours is " + hour)
let currentDate = document.getElementById("currentDate")

let sevenAM = document.getElementById("7AM") 
let eightAM = document.getElementById("8AM") 

// this fills the current date at the top
function getCurrentDate() {
    currentDate.textContent = date
    sevenAM.classList.remove("timelineDone")
    eightAM.classList.remove("timelineDone")
}
getCurrentDate()

// this function allows each timeblock to be colored red once that hour has passed
// example: fomr 7:00-8:00, the 7:00 timeblock is blue but once 8:00 hits, it turns red
function timeColors() {
    sevenAM = 7
    eightAM = 8
    console.log("sevenAM = 7")
    if (sevenAM < hour + 1) {
        sevenAM.classList.remove("timeline")
        sevenAM.classList.add("timelineDone")
        console.log("we are past seven AM")
    }
    if (eightAM < hour + 1) {
        eightAM.classList.remove("timeline")
        sevenAM.classList.add("timelineDone")
    }
}
timeColors()


// https://tecadmin.net/get-current-date-time-javascript/
// https://careerkarma.com/blog/javascript-cannot-set-property-innerhtml-of-null/