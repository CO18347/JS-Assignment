var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");
var dayname = document.getElementById("dayname");
var month = document.getElementById("month");
var daynum =document.getElementById("daynum");
var year = document.getElementById("year");

var clock = setInterval(
    function startTime(){
      var date_now = new Date();
      var hr = date_now.getHours();
      var min = date_now.getMinutes();
      var sec = date_now.getSeconds();
      var yr = date_now.getFullYear();
      var date = date_now.getDate();
      var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
      var day = week[date_now.getDay()];
      var months = new Array('January', 'February' , 'March' , 'April' , 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
      var mn = months[date_now.getMonth()];
      
      if(hr < 10){
          hr = "0" + hr;
      } 
      if(min < 10){
          min = "0" + min;
      } 
      if(sec < 10){
          sec = "0" + sec;
      }

      hour.textContent = hr;
      minute.textContent = min;
      seconds.textContent = sec;
      year.textContent = yr;
      daynum.textContent = date;
      dayname.textContent = day;
      month.textContent = mn;



    },1000
);

