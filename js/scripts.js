
$(document).ready(function() {
  $("#survey form").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var showInput = $("select#show").val();
    var actorInput = $("select#actor").val();
    var foodInput = $("select#food").val();
    var beverageInput = $("select#beverage").val();
    var carInput = $("select#car").val();

    // var vacation1 = Yosemite National Park;

    // var vacation2 = bahamas;
    // var vacation3 = paris;

    if (showInput === "The Americans" && actorInput === "Adam Sandler") {
      $("#yosemite").fadeIn();
      $("#bahamas").fadeOut();
      $("#paris").fadeOut();

      $("#survey").hide();
      $("#award").show();
      $(".name").text(nameInput).show();
      $(".award").text("Yosemite National Park.");
    }
      else if (showInput === "Broad City" && actorInput === "Julianne Moore") {
        $("#yosemite").fadeOut();
        $("#bahamas").fadeIn();
        $("#paris").fadeOut();

        $("#survey").hide();
        $("#award").show();
        $(".name").text(nameInput).show();
        $(".award").text("Bahamas.");
      }
        else if (showInput === "American Crime Story" && actorInput === "Robert Downey Jr.") {
          $("#yosemite").fadeOut();
          $("#bahamas").fadeOut();
          $("#paris").fadeIn();

          $("#survey").hide();
          $("#award").show();
          $(".name").text(nameInput).show();
          $(".award").text("Paris.");
        }
          else {
            $("#survey").hide();
            $("#threecol").hide();
            $("#advertising").show();
            $("#award").text("You need to watch more advertising!").show();
          }
  });

});
