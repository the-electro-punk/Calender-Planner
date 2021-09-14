var today = new Date()
console.log(today)
var hour = today.getHours()+':'+today.getMinutes()
console.log("current hours is " + hour)
let currentDate = document.getElementById("currentDate")

// function getCurrentDate() {
//     currentDate.innerHTML = ((today.getMonth()+1)+'/'+today.getDay()+'/'+today.getFullYear)
// }
// getCurrentDate()


// https://tecadmin.net/get-current-date-time-javascript/