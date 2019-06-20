var win = 0;
var lost = 0;
var randomResult;
var counter = 0;



var reset = function () {
   
  $(".crystals").empty();

  randomResult = Math.floor(Math.random() * 69) + 30;
  console.log(randomResult);

  $(".result").html("<h1>Random #" + randomResult + "</h1>");

  for (var i = 1; i < 5; i++) {

    random = Math.floor(Math.random() * 11) + 1;


    var crystals = $("<img>");
    crystals.attr("src", `assets/img/crystal${i}.png`);
    crystals.addClass("crystal-img")
    crystals.addClass("container")
    crystals.addClass("col-3")
    crystals.attr("value", random);
    $(".crystals").append(crystals);
  }

}
reset();


 
   

  $(document).on("click", ".crystal-img",  function () {
    
  
    var number = parseInt($(this).attr("value"));

    counter += number;
    console.log(counter)


    $(".counter").html("<h3>" + counter + "</h3>");

      if (counter === randomResult) {
      
        win++;
      
        $(".win").html("<h3>Wins: " + win + "</h3>");
        console.log("You Win")

        counter = 0;
        
        reset();

      } else if (counter > randomResult) {
      
        lost++;

        $(".lost").html("<h3>Loses: " + lost + "</h3>");
        console.log("You Lost")

        counter = 0;

        reset();

      }

  });

  
 
