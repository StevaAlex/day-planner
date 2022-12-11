var currentDayEl = $("#currentDay");//select day element on jumbotron
var today = moment();
var timeEl = $(".time")
var currentHour = today.format("H")
var rowEl = $(".row")

var timeBlockEl = $("input")



//set current day element to preferred date format 
currentDayEl.text(today.format("dddd, MMMM Do"));


for (var i = 0; i < 9; i++) { 
    var intCurrentHour = parseInt(currentHour); //change to an hour to do comparisons 
    var intTime = (moment(($(".time").eq(i).text()), "Ha").format("H"));
    
    if (intCurrentHour > intTime ) {//if the current time in hour format is greater than the time on the planner, it is a past time
        //Past event
        rowEl.eq(i).addClass("past");//so add class of past so it changes to grey
    }
    else if (intCurrentHour < intTime) {//if current time is less than time in planner, it is a future time
        //future event  
        rowEl.eq(i).addClass("future");//so add a class of past to change it to green
      
    }
    else {
        //present event 
        rowEl.eq(i).addClass("present"); //else if the two comparisons above does not fit the time on the planner, it is a present time
    }//so change the colour to red
}




