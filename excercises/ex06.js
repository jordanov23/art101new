function checkMood(score) {
If (score <= 1) return (mood: devestated; color:blue);
If (score <=2) return (mood);
If (score <=3) return (mood);
  }

  function showMood(color) {
    let randomScore = Math.floor(Math.random() * 10) + 1;
    let moodResult = checkMood(randomScore);

    $("#mood-display").html(
      "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
    );
  }

  $("#mood-button").click(function () {
    showMood(color);
  });