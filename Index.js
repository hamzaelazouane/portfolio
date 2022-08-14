$(document).ready(function(){
      $("section").hide() ;
      $("#home").show() ;
     
      $("#menuhome").click(
        function()
        {
            $("header").css("background","rgb(15, 48, 88)")
            $("section").hide() ;
            $("#home").show() ;
        }
      )
      $("#menuabout").click(
        function()
        {
           $("header").css("background","linear-gradient(-7deg ,rgb(15, 48, 88),rgb(162, 196, 255))")
            $("section").hide() ;
            $("#about").show() ;
        }
      )
      $("#menuprojects").click(
        function()
        {
          $("header").css("background","linear-gradient(-7deg ,rgb(15, 48, 88),rgb(162, 196, 255))")
            $("section").hide() ;
            $("#projects").show() ;
        }
      )
      $("#menucontact").click(
        function()
        {
          $("header").css("background","linear-gradient(-7deg ,rgb(15, 48, 88),rgb(162, 196, 255))")
            $("section").hide() ;
            $("#contact").show() ;
        }
      )
////////////////////////////////////////
    
  $("#infoprojects").hide() ;
  $("#project1").click(
      function()
      {
        $("#projects>div").hide() ;
        $("#infoprojects").show();
        $("#divimg").html("<img src='lesmageprojects/siteanonce.jpg' alt=''>")
        $("#caption").html("Fiverr website ")
        $("#divinfo").html("This is asp.net web site , it helps the user to place his advertisement on the site in order to request a job or a training request, or  search for employees or trainees ")

      }
  )
  ////////////
  $("#project2").click(
    function()
    {
      $("#projects>div").hide() ;
      $("#infoprojects").show();
      $("#divimg").html("<img src='lesmageprojects/sitstatic.jpg' alt=''>")
      $("#caption").html("O.M.S website ")
      $("#divinfo").html("This is the website of the company (O.M.S) .Where the site includes all the products sold by the company and the services it provides . also the site helps the customer to communicate with the company in order to purchase a specific product . <a href='https://oms-platre.github.io/website/'  target='_blank'>O.M.S Website</a>")

    }
  )
 //////////////////
 $("#project3").click(
  function()
  {
    $("#projects>div").hide() ;
    $("#infoprojects").show();
    $("#divimg").html("<img src='lesmageprojects/portfolio.jpg' alt=''>")
    $("#caption").html("Portfolio")
    $("#divinfo").html("This is Porfolio website to know about my work and projects ")

  }
)
$("#exite").click(
  function()
  {
    $("#projects>div").show();
    $("#infoprojects").hide();
  }
)
});