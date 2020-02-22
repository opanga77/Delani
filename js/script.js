// function onClick(element) {
//     document.getElementById("img01").src = element.src;
//     document.getElementById("modal01").style.display = "block";
//     var captionText = document.getElementById("caption");
//     captionText.innerHTML = element.alt;
//   }
  $(document).ready(function(){
    $( "#image1").click(function(){
      $(this).hide();
      $( ".par1").show();
});
  })
  // form section
  $(document).ready(function(){
    $("form#xxx").submit(function(event){
      // event.preventDefault();
      var name = $("input#Name").val();
      var email = $("input#Email").val();
      var message = $("input#Message").val();
      if ($("input#Name").val() && $("input#Email").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });
  // portfolio section