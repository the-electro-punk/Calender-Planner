var today = new Date()
// for some reason, the day was 12 days behind so I added 12 to correct it
var date = (today.getMonth()+1)+'/'+(today.getDay()+12)+'/'+today.getFullYear()
console.log(date)


// var inputTime = document.getElementsById("inputTime")

var hour = today.getHours()
// +':'+today.getMinutes()
console.log("current hours is " + hour)

let currentDate = document.getElementById("currentDate")
let selectTime = document.getElementById('inputTime')

const addEvent = document.getElementById("add-event")
const deleteEvent = document.getElementsByName("delete-event")

addEvent.addEventListener('click', formInput)
// const addEvent = document.getElementById('add-event')
// const deleteEvent = document.getElementById('delete-event')
const submitEvent = document.getElementById('submitEvent')

// submitEvent.addEventListener('click', oneMoreEvent)


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

timeColors()

function formInput() {
    window.location = "C:\Users\Ben\Desktop\_Coding BootCamp\_weeks lessons\week 5\Calender-Planner\inputForm.html"
}
// this functions takes the inputs and appends it to the specific timeblock
function oneMoreEvent(event) {
    event.preventDefault()
    var inputEvent = document.getElementById("inputEvent").value
    console.log(inputEvent)
    var inputTime = document.getElementById("inputTime").value
    console.log(inputTime)

    var selectOption = document.getElementById('classInfo').value
    console.log(selectOption)
    if (inputTime = null) {
        window.alert("you need to input a time")
    }
    else if (inputTime >= 7 && inputTime < 8 && selectOption === 'AM') {
        sevenAM.appendChild()
        console.log("event is " + inputEvent + "time " + inputTime + "AM")
    }

}
// querySelector is more general while getElementById is specific
// might use querySelector all on a checkbox to select all checkboxes

// always clean/condense the data being uploaded

// https://tecadmin.net/get-current-date-time-javascript/
// https://careerkarma.com/blog/javascript-cannot-set-property-innerhtml-of-null/