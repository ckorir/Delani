
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

  function save(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;

  if(name === '' || email === '' || comment === ''){
    alert("You haven't entered any message");
  }

  else{
    Swal.fire(name + ' we have received your message. Thank you for reaching out to us.');
      }
  
  event.preventDefault();
};
