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
     let timer_on = 0;

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
          let switchStdy = study;
          let switchBrk = brk;

          var top = document.getElementById("top-section");
          var hrCount = document.getElementById("count3");
          var minCount = document.getElementById("count4");
          var secCount = document.getElementById("count5");
          var hour = 4;
          console.log("study: " + study + " brk: " + brk + " timer_on: " + timer_on); 

          //each second
          let seconds = 6;//61;
          let oneHour = 60 * 60;//one hour
          interval = setInterval(function() {
               seconds--;
               oneHour--;
               let brkCounter = brk * seconds;
               let stdCounter = study * seconds;//the minutes in hour
               if(timer_on){
                    if(oneHour != -1){
                         /*After 1 hour, decrement this number*/
                         if(study != -1){
                              hrCount.innerHTML = hour;
                              minCount.innerHTML = study;
                              secCount.innerHTML = brkCounter/brk;
                              seconds.innerHTML = secCount;
                              //top.appendChild(secCount);
                              if(!seconds){
                                   clearInterval(interval);
                                   study -= 1;
                                   console.log(hour + " " + brk + " " + " " + seconds + " oneHour: " + oneHour);
                                   //alert("You made it through the timer! Now go make one for breaks!")
                                   pomodoro(study, brk);
                              }
                         }else{
                              clearInterval(interval);
                              //do something with the frame, and/or switch the frame image. 
                              //document.getElementsByTagName("body").setAttribute("background-color", magenta);
                              console.log("switch to break timer");
                              console.log(switchStdy + " " + switchBrk);
                              getSwitch();
                         }

                    } else {
                         hour -= 1;
                         hrCount.innerHTML = hour;
                    }
          /*} else{
               if(oneHour != -1){
                    /*After 1 hour, decrement this number
                    if(study != -1){
                         hrCount.innerHTML = hour;
                         minCount.innerHTML = study;
                         secCount.innerHTML = brkCounter/brk;
                         seconds.innerHTML = secCount;
                         //top.appendChild(secCount);
                         if(!seconds){
                              clearInterval(interval);
                              study -= 1;
                              //do something with the frame, and/or switch the frame image. 
                              //document.getElementsByTagName("body").setAttribute("background-color", magenta);
                              console.log(hour + " " + brk + " " + " " + seconds + " oneHour: " + oneHour);
                              //alert("You made it through the timer! Now go make one for breaks!")
                              pomodoro(study, brk);
                         }
                    }else{
                         console.log("switch to break timer");
                         console.log(switchStdy + " " + switchBrk);
                         thingie = false;
                         getStart();
                    }

               } else {
                    hour -= 1;
                    hrCount.innerHTML = hour;
               } */

          }          
          }, 1000)
     }

     function getStart(){
          var stdMin = 0;
          var brkMin = 0;
          var std = document.getElementById("study").childNodes;
          var brk = document.getElementById("break").childNodes;
          var opt = document.getElementsByTagName("option");

          console.log("IN START: \n" + timer_on);// + " " + brkMin);

          if(timer_on == 0){
               timer_on = 1;   
               console.log("brkMin: " + brkMin + " brk: " + brk);  
               if(brkMin == brk){
                    //These would be defualt times of 25 stdy and 5 brk
                    console.log("selected length: " + std.length);
                    for(i = 0; i < std.length; i++){
                         if(!(std[i].selected)){
                              console.log("NOT SELECTED")
                         }else{
                              stdMin = std[i].value;
                              console.log("study SELECTED: " + stdMin);
                              for(j = 0; j < brk.length; j++){
                                   brkMin = brk[j].value;
                                   console.log("break SELECTED: " + brkMin);
                              }
                         }
                    }
                    pomodoro(stdMin, brkMin);
               }/*else if(timer_on == 1){
                    //timer_on = 0;
                    console.log("TIMER_ON: " + timer_on);
                    stdMin = document.getElementById("count4").innerHTML;
                    brkMin = document.getElementById("count5").innerHTML;
                    pomodoro(stdMin, brkMin);
               }*/else {
                    getSwitch();
               }
          }
     }

     function getSwitch() {
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
                         brkMin = brk[j].value;
                         console.log("break SELECTED: " + brkMin);
                    }
               }
          }
          pomodoro(brkMin, stdMin);
     }

     function getStop() {
          console.log("STOP clicked");
          timer_on = 0;
          var std = document.getElementById("study").childNodes;
          var brk = document.getElementById("break").childNodes;
          var opt = document.getElementsByTagName("option");
          var stdMin = 0;
          var brkMin = 0;
          
          stdMin = document.getElementById("count4").innerHTML;
          brkMin = document.getElementById("count5").innerHTML;
          console.log(stdMin + " " + brkMin);
          pomodoro(stdMin, brkMin);
     }
 //});