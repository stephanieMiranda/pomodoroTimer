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

     /*A funciton that counts to the seconds with a minute for each minute passed. typically a 4 hour study hall is open.*/
     function pomodoro(study, brk) {
          //the selected item
          var std = document.getElementById("study").innerHTML;
          var brake = document.getElementById("break").innerHTML;

          var minutes = document.getElementById("mins");
          var secs = document.getElementById("sec");

          var top = document.getElementById("top-section");
          var hrCount = document.getElementById("count3");
          var minCount = document.getElementById("count4");
          var secCount = document.getElementById("count5");
          var hour = 4;
          console.log("study: " + study + " brk: " + brk); 

          //each second
          let seconds = 6;//61;
          interval = setInterval(function() {
               seconds--;
               let brkCounter = brk * seconds;
               let stdCounter = study * seconds;//the minutes in hour
               let oneHour = 60 * 60;//one hour
               if(hour != 0){
                    //hour = hour - oneHour;
                    //hour -= 1;
                    /*After 1 hour, decrement this number*/
                    if(study != 0){
                         //minutes.innerHTML = study;
                         if(seconds == 0){
                              study -= 1;
                              //minCount.innerHTML = stdCounter/study;
                              //pomodoro(study, brk);
                         }else{
                              hrCount.innerHTML = hour;
                              minCount.innerHTML = study;
                              secCount.innerHTML = brkCounter/brk;
                              //pomodoro(study, brk);
                         }
                         //console.log(seconds);
                         //top.innerHTML = minCount;
                         //top.innerHTML = secCount;
                         seconds.innerHTML = secCount;
                         //top.appendChild(secCount);
                         if(!seconds){
                              clearInterval(interval);
                              //do something with the frame, and/or switch the frame image. 
                              //document.getElementById("frame").setAttribute("clock", );
                              console.log(hour + " " + brk + " " + " " + seconds + " oneHour: " + oneHour);
                              //alert("You made it through the timer! Now go make one for breaks!")
                              pomodoro(study, brk);
                         }
                    }else{
                         console.log("switch to break timer");
                    }

               }
               
          }, 1000)
     }

     function getStart(){
          var std = document.getElementById("study").childNodes;
          var brk = document.getElementById("break").childNodes;
          var opt = document.getElementsByTagName("option");
          var stdMin = 0;
          var brkMin = 0;

          //These would be defualt times of 25 stdy and 5 brk
          //console.log("IN START \nstdy: " + std[0].value);
          //console.log("break: " + brk[0].value);
          console.log("selected length: " + std.length);
          for(i = 0; i < std.length; i++){
               if(!(std[i].selected)){
                    console.log("NOT SELECTED")
               }else{
                    stdMin = std[i].value;
                    console.log("study SELECTED: " + stdMin);
                    for(j = 0; j < brk.length; j++){
                         brkMin = brk[i].value;
                         console.log("break SELECTED: " + brkMin);
                    }
               }
          }
          pomodoro(stdMin, brkMin);
     }


     

 //});