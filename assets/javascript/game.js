var win;
var lost;
var randomResult;
var counter = 0;

randomResult = Math.floor(Math.random() * 69) + 30;
console.log(randomResult);

$(".result").html("Random Result: " + randomResult);


for (var i = 0; i < 4; i++) {
  
  random = Math.floor(Math.random() * 11) + 1;
  
  
  var crystals = $("<div>");
  crystals.attr("src", "assets/img/crystal1.2.jpg");
  crystals.attr("src", "assets/img/crystal2.2.png");
  crystals.attr("src", "assets/img/crystal3.jpg");
  crystals.attr("src", "assets/img/crystal4.jpg");
    
  crystals.attr("random-value", random);
  console.log("random-value")

  $(".crystals").append(crystals);

}

$(".crystals").on("click", function () {
  
  var number = parseInt($(this).attr("random-value"));

  counter += number;
  
  console.log(counter)

  alert("New score " + counter);

  if (counter === randomResult) {
    
    win++
    
    $(".win").html("Wins " + win);

    counter = 0;


   
    
  }

  
  
  




  
});
