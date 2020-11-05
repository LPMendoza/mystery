$("#leyendas").on("click", function(e) {
   $("#contMenuL").removeClass("d-none");
   $("#contMenuL").addClass("d-block");
   $("#coverBlackL").addClass("activeMenuLR");
   $("#contMenuR").addClass("d-none");
   $("#contMenuR").removeClass("d-block");
   $("#coverBlackR").removeClass("activeMenuLR");
});

$("#rituales").on("click", function (e) {
   $("#contMenuR").removeClass("d-none");
   $("#contMenuR").addClass("d-block");
   $("#coverBlackR").addClass("activeMenuLR");
   $("#contMenuL").addClass("d-none");
   $("#contMenuL").removeClass("d-block");
   $("#coverBlackL").removeClass("activeMenuLR");
});
