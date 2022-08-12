// var startDateTime = new Date(2020,7,13,2,1,0,0); // YYYY (M-1) D H m s (start time and date from DB)
// var startStamp = startDateTime.getTime();

// var newDate = new Date();
// var newStamp = newDate.getTime();

// var timer;

// function updateClock() {
//     newDate = new Date();
//     newStamp = newDate.getTime();
//     var diff = Math.round((newStamp-startStamp)/1000);
//     // var y = Math.floor(diff/(24*60*60*30*365)); 
//     // diff = diff-(y*24*60*60*30*365); 
//     // var m1 = Math.floor(diff/(24*60*60*30)); 
//     // diff = diff-(m1*24*60*60*30);
//     var d = Math.floor(diff/(24*60*60));
//     diff = diff-(d*24*60*60);
//     var h = Math.floor(diff/(60*60));
//     diff = diff-(h*60*60);
//     var m = Math.floor(diff/(60));
//     diff = diff-(m*60);
//     var s = diff;
    
//     document.getElementById("time-elapsed").innerHTML =d+" ngày, "+h+" giờ, "+m+" phút, "+s+" giây";
// }

// setInterval(updateClock, 1000);