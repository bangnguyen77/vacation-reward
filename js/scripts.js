// var vacation1 = Yosemite National Park;

$(document).ready(function() {
  $("#survey form").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var showInput = $("select#show").val();
    var actorInput = $("select#actor").val();
    var foodInput = $("select#food").val();
    var beverageInput = $("select#beverage").val();
    var carInput = $("select#car").val();


    // var vacation2 = bahamas;
    // var vacation3 = paris;

    // if (activities !== "playing" && activities !== "dunes") {
    //   if (food === "tacos" || personality === "friendly" || activities === "rodeo") {
    //   $("#houston").show();
    //   } else if (food === "bagels" || personality === "aggressive" || activities === "walking") {
    //   $("#nyc").show();
    // } else {
    //   $("#canada").show();
    // }

    if (showInput === "The Americans" && actorInput === "Adam Sandler") {
      $("#yosemite").fadeIn();
      $("#bahamas").fadeOut();
      $("#paris").fadeOut();

      $("#survey").hide();
      $("#award").show();
      $(".name").text(nameInput).show();
      // $(".vacation1").text(vacation1).show();
    }
      else if (showInput === "Broad City" && actorInput === "Julianne Moore") {
        $("#yosemite").fadeOut();
        $("#bahamas").fadeIn();
        $("#paris").fadeOut();

        $("#survey").hide();
        $("#award").show();
        $(".name").text(nameInput).show();
        // $(".award").text(vacation2);
      }
        else if (showInput === "American Crime Story" && actorInput === "Robert Downey Jr.") {
          $("#yosemite").fadeOut();
          $("#bahamas").fadeOut();
          $("#paris").fadeIn();

          $("#survey").hide();
          $("#award").show();
          $(".name").text(nameInput).show();
          $(".award").text(vacation3);
        }
          else {
            $("#survey").hide();
            $("#award").show().text("You need to watch more advertising!");
          }


  });

});
