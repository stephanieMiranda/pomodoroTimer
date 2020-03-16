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
     var timerSwitch = false;

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
          let switchStdyTo = brk;
          let switchBrkTo = study;

          var top = document.getElementById("top-section");
          var hrCount = document.getElementById("count3");
          var minCount = document.getElementById("count4");
          var secCount = document.getElementById("count5");
          var hour = 4;
          console.log("1 In POMODORO: ")
          console.log("2 study: " + study + " brk: " + brk + " timer_on: " + timer_on + " timerSwitch: " + timerSwitch); 

          //each second
          let seconds = 4;//6;//61;
          let oneHour = 60 * 60;//one hour
          if(timerSwitch == false){
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
                              //seconds.innerHTML = secCount;
                              //top.appendChild(secCount);
                              if(!seconds){
                                   clearInterval(interval);
                                   study -= 1;
                                   console.log("3 " + hour + " " + brk + " " + " " + seconds + " oneHour: " + oneHour);
                                   //alert("You made it through the timer! Now go make one for breaks!")
                                   pomodoro(study, brk);
                              }
                         }else{
                              clearInterval(interval);
                              //do something with the frame, and/or switch the frame image. 
                              console.log("POMODORO switch to break timer");
                              console.log("Swithing to these: " + switchStdyTo + " " + switchBrkTo);
                              //timerSwitch = true;
                              timerSwitch = false;
                              //pomodoro(switchStdyTo, switchBrkTo);
                              getSwitch();
                         }

                    } else {
                         hour -= 1;
                         hrCount.innerHTML = hour;
                    }

               }else {
                    if(secCount.innerHTML <= -1){
                         //getStart();
                         console.log("IN POMODORO ELSE: " + minCount.innerHTML + " " + secCount.innerHTML + " " + brk);
                         if(brk != secCount.innerHTML){
                              console.log("ALMOST THERE!");
                              //timerSwitch = false;
                              timerSwitch = true;
                              //pomodoro(minCount.innerHTML, secCount.innerHTML);
                              getSwitch();
                         }
                    }
               }       
          }, 1000)
/*This is the switch*/
          }else{
               console.log("PMODORO (else) TIMERSWITCH == " + timerSwitch);
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
                              //seconds.innerHTML = secCount;
                              //top.appendChild(secCount);
                              if(!seconds){
                                   clearInterval(interval);
                                   study -= 1;
                                   console.log("3 " + hour + " " + brk + " " + " " + seconds + " oneHour: " + oneHour);
                                   //alert("You made it through the timer! Now go make one for breaks!")
                                   pomodoro(study, brk);
                              }
                         }else{
                              clearInterval(interval);
                              //do something with the frame, and/or switch the frame image. 
                              console.log("POMODORO switch to break timer");
                              console.log("Swithing to these: " + switchStdyTo + " " + switchBrkTo);
                              timerSwitch = true;
                              //timerSwitch = false;
                              //pomodoro(switchStdyTo, switchBrkTo);
                              getSwitch();
                         }

                    } else {
                         hour -= 1;
                         hrCount.innerHTML = hour;
                    }

               }else {
                    if(secCount.innerHTML <= -1){
                         //getStart();
                         console.log("IN POMODORO ELSE: " + minCount.innerHTML + " " + secCount.innerHTML + " " + brk);
                         if(brk != secCount.innerHTML){
                              console.log("ALMOST THERE!");
                              timerSwitch = false;
                              //timerSwitch = true;
                              //pomodoro(minCount.innerHTML, secCount.innerHTML);
                              getSwitch();
                         }
                    }
               }       
          }, 1000)

          }
          
     }

     function getStart(){
          var stdMin = 0;
          var brkMin = 0;
          var std = document.getElementById("study").childNodes;
          var brk = document.getElementById("break").childNodes;
          var opt = document.getElementsByTagName("option");

          minutesNum = document.getElementById("count4").innerHTML;
          secondsdNum = document.getElementById("count5").innerHTML;

          console.log("1 IN START: " + timer_on);// + " " + brkMin);

          if(timer_on === 0){
               timer_on = 1;
               console.log("2 timer_on: " + timer_on + " now look at brkMin and brk");
                    //These would be defualt times of 25 stdy and 5 brk
                    console.log("3 selected length: " + std.length);
                    for(i = 0; i < std.length; i++){
                         if(!(std[i].selected)){
                              //console.log("NOT SELECTED")
                         }else{
                              stdMin = std[i].value;
                              console.log("4 study SELECTED: " + stdMin);
                              for(j = 0; j < brk.length; j++){
                                   brkMin = brk[j].value;
                                   if(!(brk[j].selected)){
                                        //console.log("NOT SELECTED")
                                   }else{
                                        console.log("5 break SELECTED: " + brkMin);
                                   }
                              }
                         }
                    }
                    /**TODO: 3/15 fix logic here. */
                    if(minutesNum === '00' || minutesNum === '0'){
                         console.log(stdMin + " " + brkMin);
                         console.log("TIMER_ON: " + timer_on);
                         pomodoro(stdMin, brkMin);
                    }else if(seconds <= -1){
                         console.log("6 MINUTES NUM: " + minutesNum + " SECONDS NUM: " + secondsdNum);
                         seconds = 60;
                         stdMin = document.getElementById("count4").innerHTML;
                         brkMin = document.getElementById("count5").innerHTML;
                         pomodoro(secondsdNum, minutesNum);
                    }
                    else{
                         console.log("6 MINUTES NUM: " + minutesNum + " SECONDS NUM: " + secondsdNum);
                         stdMin = document.getElementById("count4").innerHTML;
                         brkMin = document.getElementById("count5").innerHTML;
                         pomodoro(secondsdNum, minutesNum);
                    }
          }else {
               console.log("TIMER_ON else in getStart: " + timer_on);for(i = 0; i < std.length; i++){
                    if(!(std[i].selected)){
                         //console.log("NOT SELECTED")
                    }else{
                         stdMin = std[i].value;
                         console.log("4 study SELECTED: " + stdMin);
                         for(j = 0; j < brk.length; j++){
                              brkMin = brk[j].value;
                              if(!(brk[j].selected)){
                                   //console.log("NOT SELECTED")
                              }else{
                                   console.log("5 break SELECTED: " + brkMin);
                              }
                         }
                    }
               }
               console.log("stdMin: " + stdMin + " brkMin: " + brkMin + "secondsNum: " + secondsdNum + " minutesNum: " + minutesNum);
               timerSwitch = false;
               pomodoro(stdMin, brkMin);
          }
     }

     function getSwitch() {
          console.log("SWITCH: " + timer_on + " " + timerSwitch);
          var std = document.getElementById("study").childNodes;
          var brk = document.getElementById("break").childNodes;
          var opt = document.getElementsByTagName("option");
          var stdMin = 0;
          var brkMin = 0;
          //timerSwitch = false;

          /*These two liines pull the data showing on the timer itself*/
          //stdMin = document.getElementById("count4").innerHTML;
          //brkMin = document.getElementById("count5").innerHTML;


          //These would be defualt times of 25 stdy and 5 brk
          //console.log("IN START \nstdy: " + std[0].value);
          //console.log("break: " + brk[0].value);
          if(timerSwitch === false){
               //document.body.style.background("magenta");
          //stdMin = document.getElementById("count4").innerHTML;
          //brkMin = document.getElementById("count5").innerHTML;
               //if()
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
               console.log("stdMin: " + stdMin + " brkMin: " + brkMin);
               timerSwitch = true;
               pomodoro(brkMin, stdMin);
          }else {
              // document.body.style.background("lightgrey");
               getStart();
          }
     }

     function getStop() {
          console.log("1 STOP clicked");
          timer_on = 0;
          var std = document.getElementById("study").childNodes;
          var brk = document.getElementById("break").childNodes;
          var opt = document.getElementsByTagName("option");
          var stdMin = 0;
          var brkMin = 0;
          
          stdMin = document.getElementById("count4").innerHTML;
          brkMin = document.getElementById("count5").innerHTML;
          console.log("2 " + stdMin + " " + brkMin);
          //pomodoro(stdMin, brkMin);
     }
 //});