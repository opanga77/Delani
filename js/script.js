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
  $(document).ready(function(){
    $("form#form34A").submit(function(event){
      // event.preventDefault();
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
  });