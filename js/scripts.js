var board = {
  sq0: 0,
  sq1: 0,
  sq2: 0,
  sq3: 0,
  sq4: 0,
  sq5: 0,
  sq6: 0,
  sq7: 0,
  sq8: 0
}
var game = {
  turn: 0,
  score: 0
}

$(document).ready(function() {
  var stuff = $("button.grid");
    stuff.on("click", function() {
      console.log($("button.grid"));
    });
    
});

