var currentDayEl = $("#currentDay");//select day element on jumbotron
var today = moment();
var timeEl = $(".time");
var currentHour = today.format("H");
var rowEl = $("textarea");
var saveBtn = $("button");
var input = $("textarea");
var input9am = $("#9am");
var input10am = $("#10am");
var input11am = $("#11am");
var input12pm = $("#12pm");
var input13pm = $("#13pm");
var input14pm = $("#14pm");
var input15pm = $("#15pm");
var input16pm = $("#16pm");
var input17pm = $("#17pm");






//set current day element to preferred date format 
currentDayEl.text(today.format("dddd, MMMM Do"));

$(document).ready(function () {
    for (var i = 0; i < 9; i++) {
        var intCurrentHour = parseInt(currentHour); //change to an hour to do comparisons 
        var intTime = (moment(($(".time").eq(i).text()), "Ha").format("H"));

        if (intCurrentHour > intTime) {//if the current time in hour format is greater than the time on the planner, it is a past time
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


    saveBtn.on("click", function (event) {
       
        var savedData = {
            am9: jQuery.trim(input9am.val()),
            am10: jQuery.trim(input10am.val()),
            am11: jQuery.trim(input11am.val()),
            pm12: jQuery.trim(input12pm.val()),
            pm13: jQuery.trim(input13pm.val()),
            pm14: jQuery.trim(input14pm.val()),
            pm15: jQuery.trim(input15pm.val()),
            pm16: jQuery.trim(input16pm.val()),
            pm17: jQuery.trim(input17pm.val())


        }; 
        event.preventDefault();
        var stringData = JSON.stringify(savedData);  
        console.log(stringData);

        localStorage.setItem("savedData", stringData);
    })
    var storedData = JSON.parse(localStorage.getItem("savedData")); 
    input9am.val(storedData.am9); //put these outside click function, appears to be resetting storage after every refresh when it was inside the function
    input10am.val(storedData.am10);
    input11am.val(storedData.am11);
    input12pm.val(storedData.pm12);
    input13pm.val(storedData.pm13);
    input14pm.val(storedData.pm14);
    input15pm.val(storedData.pm15);
    input16pm.val(storedData.pm16);
    input17pm.val(storedData.pm17);
    console.log("9am: " + storedData.am9);

})


