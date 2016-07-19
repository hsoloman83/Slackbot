// //SECOND FUNCTION//

// //user types in the name of a flower
// //hubot returns an image of the flower 
var flowers =  {
  peonies: "http://www.kelways.co.uk/userfiles/products/t_55-1.jpg",
  Tulip: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Tulip_with_variegated_colors.jpg",
  lily: "http://hobbyfarms.com.s3-us-west-2.amazonaws.com/image_transfer/editorial-blog/jessica-walliser/lily-asiatic.jpg",
  hyacinth: "http://www.hadeco.co.za/wp-content/uploads/2015/12/Blue-Hyacinth.jpg",
  anemone: "http://imgc.allpostersimages.com/images/P-473-488-90/67/6700/3E9A100Z/posters/joseph-eta-poppy-flower-iv.jpg",
  ranunculus: "https://s-media-cache-ak0.pinimg.com/564x/1c/4b/cf/1c4bcfbb1a9100fbd2ef6f53772b8b8a.jpg",
  rose: "http://image.oregonlive.com/home/olive-media/width960/img/oregonian/photo/2016/04/29/fort-vancouver-rose-society-62ebfdbf7746b04e.jpg"
}

//function to check which flower has been mentioned 
function flowerImageString(flower) {
  for (var flowerKey in flowers) {
    if (flowers.hasOwnProperty(flowerKey)) {
      return flowers[flower];
    }
  }
}

//return a message depending on the name of the flower
// so when you say e.g. "pic of rose" it returns an image of a rose
//name has been changed as to not clash with the other script names!
module.exports = function (robot) {
  return robot.hear(/pic of (.*)/i, function (msg) {
 
    var flower = msg.match[1];
    var flowerImage = flowerImageString(flower);
    return msg.send(flowerImage);

      });
};