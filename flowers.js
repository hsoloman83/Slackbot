//FIRST FUNCTION//

//user asks if a flower is in season
//computer checks to see when the flower is in season
//if true it returns a message of flower is in season
//if false it returns a message of flower is out of season.

//variables for flowers with names and return a value of true and false depending on which is in season
var flowers =  {
  peonies: true,
  rose: true,
  Tulip: false,
  lily: true,
  hyacinth: false,
  anemone: false,
  ranunculus: false
}

//function to check which flower has been mentioned 
function checkFlower(flower) {
  for (var flowerKey in flowers) {
    if (flowers.hasOwnProperty(flowerKey)) {
      return flowers[flower];
    }
  }
}

//return a message depending on the value of false or true
module.exports = function (robot) {
  return robot.hear(/flower (.*)/i, function (msg) {
    var flower = msg.match[1];
    var isOnSeason = checkFlower(flower);
    if (isOnSeason) {
      return msg.send(flower + ' is on season');
    } else {
      return msg.send(flower + ' is off season');
    }
  });
};