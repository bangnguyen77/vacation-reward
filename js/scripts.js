$(document).ready(function() {
  $("#survey form").submit(function(event) {

    var nameInput = $("input#name").val();
    // var showInput = $("select#show").val();
    // var actorInput = $("select#actor").val();
    // var foodInput = $("select#food").val();
    // var beverageInput = $("select#beverage").val();
    // var carInput = $("select#car").val();
    $(".name").text(nameInput);

    $("#letter").show();
    $("#survey").hide();

    event.preventDefault();
  });
});


// $(document).ready(function(){
//
//   $("#nameform form").submit(function(event){
//     var nameInput = $("input#name").val();
//     // var showInput = $("select#show").val();
//     // var actorInput = $("select#actor").val();
//     // var foodInput = $("select#food").val();
//     // var beverageInput = $("select#beverage").val();
//     // var carInput = $("select#car").val();
//     //
//     // var vacation1 = Yosemite National Park;
//     // var vacation2 = Bahamas;
//     // var vacation3 = Paris;
//
//     $(".name").text(nameInput);
//
//
//     $("#letter").show();
//     $("#nameform").hide();
//     event.preventDefault();
//   });
//
// });
