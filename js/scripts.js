$(document).ready(function(){
  $("form#survey").submit(function(event){
    var showInput = $("select#show").val();
    var actorInput = $("select#actor").val();
    var foodInput = $("select#food").val();
    var beverageInput = $("select#beverage").val();
    var carInput = $("select#car").val();

    $("#results").show();
    $("#survey").hide();
  })
  event.preventDefault();
})


// $(document).ready(function() {
//   $("form#survey").submit(function(event) {
//     event.preventDefault();
//     var nameInput = $("#name").val();
//     var colorInput = $("#color").val();
//     var food1Input = $("#food1").val();
//     var food2Input = $("#food2").val();
//     var food3Input = $("#food3").val();
//     var birthdayInput = $("#birthday").val();
//     var beverageInput = $("input:radio[name=beverage]:checked").val();
//     var langInput = $("#lang").val();
//
//     $("#results").show();
//     $("#survey").hide();
//
//     $(".name").text(nameInput);
//     $(".food1").text(food1Input);
//     $(".food2").text(food2Input);
//     $(".food3").text(food3Input);
//     $(".birthday").text(birthdayInput);
//     $(".beverage").text(beverageInput);
//     $(".lang").text(langInput);
//     // $(".color").css({
//     //     "background-color" : colorInput
//     // });
//     $(".colorButton").css({
//         "background-color" : colorInput
//     });
//
//   });
//
// });
