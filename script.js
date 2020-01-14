var wakeup =7;
var noon=12;
var lunch= 1;
var dinner=8;
var partytime;
var evening = 18;


//for the current time on the page
function showtime(){
	var clock=document.getElementById('clock');
	var currenttime=new Date();
	var hours =currenttime.getHours();
	var minutes = currenttime.getMinutes();
	var seconds = currenttime.getSeconds();
	var meridian = "AM";

    if(hours>= noon){
		meridian="PM";
	}
	if(hours > noon)//set hours
	{
		hours=hours-12;
	}
	if(minutes < 10)//set minutes
	{
		minutes="0"+minutes;
	}
    if(seconds < 10)//set seconds
    {
         seconds= "0"+seconds;
	}
  
    //getting the string that display time
    var clockTime = hours+':'+minutes+':'+seconds+':'+meridian+'!';
    clock.innerText= clockTime;
}
showtime();

//clock to increment on its own and change out msg
function updateClock() {
	var time=new Date().getHours();
	var message ;
	var image= "images/normalTime.jpg";
	var timeEventsjs= document.getElementById("timeEvent");
	var lolcat =document.getElementById("catimage");
	if (time == partytime) {
		message ="Let's Party !!!";
	}
	else if(time== wakeup){
			message="Wake Up..Its morning..!";
		}
	else if(time== lunch){
		message="Let's have lunch";
	}
	else if(time== dinner){
		message="Let's have dinner";
	}
	else if(time < noon){
		message="Good morning!!";
	}
	else if(time >= evening){
		message = "Good evening!";
	}
	else {
		message= "Good Afternoon";
	}
	console.log(message);
	timeEventsjs.innerText=message;
	catimage.src = image;
	showtime();
}
updateClock();

//getting clock to increment once a second
var oneSec =1000;
setInterval(updateClock,oneSec);

var partyButton = document.getElementById(partyTimeButton);

//getting the party time button to work
// function partyEvent()
// {
// 	if(partytime<0){
// 		partytime=new Date().getHours();
// 		partyTimeButton.innerText="Party Over!";
// 		partyTimeButton.style.backgroundcolor="#0A8DAB";
// 	    }
// 	else{
// 		partytime=-1;
// 		partyTimeButton.innerText="Party Time !";
// 		partyTimeButton.style.backgroundcolor="#222";
	 
// 	    }
// }

// partyEvent();
// partyButton.addEventListener("click",partyEvent);


// activate wake up selector
//  var wakeuptimeselection = document.getElementById("wakeuptimeselection");
//  function wakeupEvent()
//  {
//  	wakeup = wakeuptimeselection.value;
//  }
//  wakeuptimeselection.addEventListener("change", wakeUpEvent);
//  wakeupEvent();

// activate lunch time
var Lunchtimeselection = document.getElementById("Lunchtimeselection");
function lunchEvent(){
	lunch=Lunchtimeselection.value;
}
Lunchtimeselection.addEventListener("change",lunchEvent);
lunchEvent();

var dinnertimeselection=document.getElementById("dinnertimeselection");
function dinnerEvent(){
	dinner=dinnertimeselection.value;
}
dinnerEvent();
dinnertimeselection.addEventListener("change",dinnerEvent);
