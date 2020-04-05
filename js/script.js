
  $(document).ready(function() {
    $(".dev").click(function() {
      $("#dev-hide").toggle();
      $("#dev-show").toggle();
    });
  });
  $(document).ready(function() {
    $(".design").click(function() {
      $("#design-hide").toggle();
      $("#design-show").toggle();
    });
  });
  $(document).ready(function() {
    $(".prod").click(function() {
      $("#prod-hide").toggle();
      $("#prod-show").toggle();
    });
  });

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;

  








  $(document).ready(function(){
    $(".icons2").mouseover(function(){
      $(".work3").css("background-color", "yellow");
    });
    $(".work3").mouseout(function(){
      $(".work3").css("background-color", "transparent");
    });
  });