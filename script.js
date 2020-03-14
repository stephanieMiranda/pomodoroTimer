/**
 * This file contains funtions and methods that help control the timer. 
 * @author Stephanie Miranda
 * @license MIT
 * @version 1.0
 * 
 * March 14,, 2020
 */

 //document.addEventListener('DOMContentLoaded', () => {
     //These times are the Study/Break times "built in"
     var twentyFive = 25;//25 min
     var fifTeen =  15;//15 min
     var ten =  10;//10 min
     var five=  5;//5 min
     var three =  3;//3 min
     //var timeNow =  (new Date.getTime()/ 1000);//current time
     let times = [twentyFive, fifTeen, ten, five, three];//, timeNow];
     document = "index.html";

     /** Onclick action, if STUDY chosen */
     function getStudy(){
          console.log(times + "\n" + times.length);
          var option = "";
          /*var work = stdy;
          var chill = brk;
          var timer = work + chill;*/
          //get the pomodoro counting in seconds
          //pomodoro(timer);

          //This is the DOM manipulation
          var dropDown = document.getElementById("study");
          for (i = 0; i < times.length-2; i++) {
               option += "<option id=\"time" + i + "\" value=\"" + times[i] + "\" onclick=\'pomodoro()\'>" + times[i] + "</option>";
               //option.setAttribute("value", times[i]);
               //console.log(fullRepos[i].name);
           }
           dropDown.innerHTML = option;

           //get the pomodoro counting in seconds
           var timer = document.getElementById("study").innerHTML.valueOf(option);
           console.log("In getStudy: " + timer);
           //pomodoro(timer);
     }

     /** Onclick action, if BREAK chosen */
     function getBreak(){
          console.log(times + "\n" + times.length);
          var option = "";

          //This is the DOM manipulation
          var dropDown = document.getElementById("break");
          for (i = 3; i < times.length; i++) {
               option += "<option id=\"time" + i + "\" value=\"" + times[i] + "\" onclick=\'pomodoro()\'>" + times[i] + "</option>";
               //option.setAttribute("value", times[i]);
               //console.log(fullRepos[i].name);
           }
           dropDown.innerHTML = option;

           //get the pomodoro counting in seconds
           var timer = document.getElementById("break").innerHTML.valueOf(option);
           console.log("In getBreak: " + timer)
           //pomodoro(timer);
     }

     /*A funciton that counts to the seconds with a minute for each minute passed*/
     function pomodoro(mins) {
          //the selected item
          var std = document.getElementById("study").innerHTML;
          var brk = document.getElementById("break").innerHTML;
          console.log("In pomodoro stdy: " + std);
          console.log("break: " + brk);
          console.log("mins: " + Object.keys(mins));

          //each second
          let seconds = mins * 60 || 0;
          interval = setInterval(function() {
               seconds--;
               if(!seconds){
                    clearInterval(interval);
                    //do something with the frame, and/or switch the frame image. 
                    document.getElementById("frame").setAttribute("clock", );
               }
          }, 1000)
     }

     function getStart(){
          var std = document.getElementById("study").childNodes;
          var brk = document.getElementById("break").childNodes;
          var opt = document.getElementsByTagName("option");

          //These would be defualt times of 25 stdy and 5 brk
          //console.log("IN START \nstdy: " + std[0].value);
          //console.log("break: " + brk[0].value);
          console.log("opt: " + Object.values(mins));
          pomodoro(std);
     }


     

 //});