
  var random, result;
  var findDifference = function(answer, guess) {
    if (answer > guess) {
      return answer - guess;
    }
    else {
      return guess - answer;
    }
  }
 
  var guessingApocalypse = function(solution) {
    var predict, difference;
    predict = prompt("The zombie apocalypse will occurr on day: ");
    difference = findDifference(predict, solution );
 
    if (parseInt(predict) === solution) {
      console.log("It's happening...");
      return "You're right! - WARN humanity!";
    }
    else {
      return difference + " zombies will attack you, predict again";
    }
  }
 
  random = Math.floor(Math.random() * 365)
  for (tries = 1; tries < 4; tries++) {
    result = guessingApocalypse(random)
    alert(result);
  }
