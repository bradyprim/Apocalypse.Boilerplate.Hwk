var random, result;
var findDifference = function(answer, guess) {
  if (answer > guess) {
    return answer - guess;
  }
  else {
    return guess - answer;
  }
}

$(document).ready(function() {

  $('#enterGuess').on('click', function(e) {
    e.preventDefault();
    var predict = $('#guess').val();
    guessingApocalypse(5,predict);
  });

});

var guessingApocalypse = function(solution, predict) {
  var predict, difference;
  //predict = ;
  difference = findDifference(predict, solution );

  if (parseInt(predict) === solution) {
    $('#answer').append('<p>You guessed correctly! Tell everyone!</p>');
  }
  else {
    $('#answer').append('<p>You will be attacked by several zomibies!</p>');
  }
}

// random = Math.floor(Math.random() * 365)
// for (tries = 1; tries < 4; tries++) {
//   result = guessingApocalypse(random)
//   alert(result);
// }
