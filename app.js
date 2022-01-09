var dayspan = document.querySelector(".daySpan")
var hourspan = document.querySelector(".hoursSpan")
var minspan = document.querySelector(".minSpan")
var secspan = document.querySelector(".secSpan")

var firstSemester = new Date(2022,0,10,0,0).getTime();
function semester(){
    var today = new Date().getTime();
    var timeRemain = firstSemester - today


    var sec = 1000;
    var  min = sec * 60;
    var hours = min * 60 
    var day =  hours * 24;

    var renderDay = Math.floor(timeRemain / (day))
    var renderHour = Math.floor((timeRemain % (day)) / (hours))
    var renderMin= Math.floor((timeRemain % (hours)) / (min))
    var renderSec = Math.floor((timeRemain % (min)) / (sec))


    dayspan.innerHTML = renderDay 
    hourspan.innerHTML = renderHour  
    minspan.innerHTML = renderMin  
    secspan.innerHTML = renderSec

    if (timeRemain <= 0){
        dayspan.innerHTML = 0
        hourspan.innerHTML = 0 
        minspan.innerHTML = 0 
        secspan.innerHTML = 0
    }
}
setInterval( () => {
    semester()
},1000)

