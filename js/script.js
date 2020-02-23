
  // form section
  $(document).ready(function(){
    $("form#xxx").submit(function(event){
      event.preventDefault();
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