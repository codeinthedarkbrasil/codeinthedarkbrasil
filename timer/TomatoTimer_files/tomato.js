/* 	 
 * 		tomato.js  -	 timer / keyboard shortcuts
 * 		Copyright (c) 2010 Pratik Desai (desai@pratyk.com)
 */
$(function () {
  loadSettings();
  pom1 = localStorage.getItem("pomodoro") * 60;
  shrtbrk = localStorage.getItem("shortbreak") * 60;
  lngbrk = localStorage.getItem("longbreak") * 60;
  timer_local = false;
  if (pom1 == 3600) {
    pom = 3599;
  } else {
    pom = pom1
  }
  var paramet = pom;
  $("#timer_default").createTimer({
    time_in_seconds: pom
  });

  $("#pomodoro").click(function () {
    paramet = pom;
    $("#timer_default").createTimer({
      time_in_seconds: paramet,
      autostart: true
    });
  });
  $("#short_break").click(function () {
    paramet = shrtbrk;
    $("#timer_default").createTimer({
      time_in_seconds: paramet,
      autostart: true
    });
  });
  $("#long_break").click(function () {
    paramet = lngbrk;
    $("#timer_default").createTimer({
      time_in_seconds: paramet,
      autostart: true
    });
  });
  $("#timer_start").click(function () {
    $("#timer_default").startTimer();
  });
  $("#timer_pause").click(function () {
    if ($("#timer_default").data('countdown.state') == 'running') {
      $("#timer_default").pauseTimer();
    }
  });
  $("#timer_reset").click(function () {
    $("#timer_default").resetTimer({
      time_in_seconds: paramet
    });
  });
});
var isAlt = false;
$(document).keyup(function (e) {
  if (e.which == 18) isAlt = false;
}).keydown(function (e) {
  var paramet = pom;
  if (e.which == 18) isAlt = true;
  if (e.which == 80 && isAlt == true) {
    //ALT+P -- Pomodoro
    paramet = pom;
    $("#timer_default").createTimer({
      time_in_seconds: paramet,
      autostart: true
    });
    return false;
  }
  if (e.which == 83 && isAlt == true) {
    //ALT+S -- Short Break
    paramet = shrtbrk;
    $("#timer_default").createTimer({
      time_in_seconds: paramet,
      autostart: true
    });
    return false;
  }
  if (e.which == 76 && isAlt == true) {
    //ALT+L -- Long Break
    paramet = lngbrk;
    $("#timer_default").createTimer({
      time_in_seconds: paramet,
      autostart: true
    });
    return false;
  }
  if (e.which == 82 && isAlt == true) {
    //ALT+R -- Reset Timer
    $("#timer_default").resetTimer({
      time_in_seconds: paramet
    });
    return false;
    }
  if (e.which == 32) {
    //SPACE -- Start/Stop Timer
    if (timer_local) {$("#timer_default").pauseTimer(); timer_local=false;}
    else {$("#timer_default").startTimer(); timer_local=true;}
    return false;
  }
});

function loadSettings() {
  if (localStorage["pomflag"] != 1) {
    localStorage.setItem("pomodoro", 15);
    localStorage.setItem("shortbreak", 5);
    localStorage.setItem("longbreak", 10);
    localStorage.setItem("pomflag", 1);
    localStorage.setItem("alertoption","alarmwatch");
    localStorage.setItem("volumeoption",0.5);
  }
  $("#alertoption").val(localStorage.getItem("alertoption"));
  $("#volume").val(localStorage.getItem("volumeoption"));
}

