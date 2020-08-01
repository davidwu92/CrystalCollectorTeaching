//this whole file is JAVASCRIPT!
console.log("Page loaded.")

var wins = 0
var losses = 0
var targetScore
var gem1
var gem2
var gem3
var gem4
var totalScore

var buttonClick = function(num){
  console.log(num)
  var gems = [gem1, gem2, gem3, gem4]

  totalScore += gems[num - 1]

}


