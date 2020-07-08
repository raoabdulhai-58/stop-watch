var mm = 0;
var ss = 0;
var ms = 0;
var interval ;
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var msec = document.getElementById('msec');

function timer() {
     ms++;
     msec.innerHTML = '0' + ms
    if (ms >= 10) {
      msec.innerHTML =  ms
    }
    if (ms >=100 ) {
      ss++;
      if (ss < 10) {
         sec.innerHTML = '0' + ss
      } else {
       sec.innerHTML =  ss
      }
      ms = 0;
    }
    else if (ss >= 59) {
       mm++
       if (mm < 10) {
        min.innerHTML = '0' + mm
     } else {
      min.innerHTML =  mm
     }
       ss = 0;
    }
}

function start() {
  interval = setInterval(timer,10)
  document.getElementById('startbtn').style.pointerEvents = 'none';
  document.getElementById('stopbtn').style.pointerEvents = 'visible';

   
}

function stop() {
  clearInterval(interval);
  document.getElementById('startbtn').style.pointerEvents = 'visible';
  document.getElementById('stopbtn').style.pointerEvents = 'none';
}

function reset() {
   ms = 0;
   ss = 0;
   mm = 0;
   msec.innerHTML = '0' + ms;
   sec.innerHTML = '0' + ss;
   min.innerHTML = '0' + mm;
   clearInterval(interval);
   document.getElementById('startbtn').style.pointerEvents = 'visible';
   document.getElementById('stopbtn').style.pointerEvents = 'visible';
}
 