$(function() {

  //Hide other screens
  $("#questionsScreen").hide();

  $("#startBtn").click(function (){
    var diff = getDifficulty();
    var questions = getQuestions(diff);
    $("#titleScreen").hide();
    $("#questionsScreen").show();
  })

  function getDifficulty() {
    return $('.diffBtns:checked').val();
  }

  function getQuestions(difficulty) {
    switch (difficulty) {

      case "easy":
        $.get("https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple", function(data){
          return data;
        })
        break;
      case "medium":
        $.get("https://opentdb.com/api.php?amount=50&category=9&difficulty=medium&type=multiple", function(data){
          return data;

        })
        break;
      case "hard":
        $.get("https://opentdb.com/api.php?amount=50&category=9&difficulty=hard&type=multiple", function(data){
          return data;
        })
        break;
    }
  }
})
