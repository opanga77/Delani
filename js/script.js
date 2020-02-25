
  // form section
  // dshatfqwwwwyhqf
  $(document).ready(function(){
    $("form#sign").submit(function(event){
      var name = $("input#Name").val();
      var email = $("input#Email").val();
      var message = $("input#Message").val();
      if ($("input#Name").val() && $("input#Email").val()){
        alert (" Hellow " + name + ", your message has been received. Thank you for reaching out to us.");
      }
      else {
        alert("Ooops! Please enter your name and email!");
      }
      
    });
  
  });
  
  // portfolio section
  $(document).ready(function() {
    $("#designLogo").click(function() {
      $("#inlineDesign").hide();
      $(".toggleDesignLogo").show();
    });
    $(".toggleDesignLogo").click(function() {
      $(".toggleDesignLogo").hide();
      $("#inlineDesign").show();
    });
  
    $("#devLogo").click(function() {
      $("#inlineDev").hide();
      $(".toggleDevLogo").show();
    });
    $(".toggleDevLogo").click(function() {
      $(".toggleDevLogo").hide();
      $("#inlineDev").show();
    });
  
    $("#productLogo").click(function() {
      $("#inlineProduct").hide();
      $(".toggleProductLogo").show();
    });

    $(".toggleProductLogo").click(function() {
      $(".toggleProductLogo").hide();
      $("#inlineProduct").show();
    });
    
    $(document).ready(function() {
      $('.work1Logo').hover(function() {
        console.log('hovering')
        $("#work1Text").show();
      });
    });
  });