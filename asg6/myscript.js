$(function(){
  //question1
	$('#change').click(function(){
    $("#special").css("color", "green");
    $(".highlight").css("background-color", "yellow");
    $("p").css("background-color","black");
    $("p").css("color","white");
    $("p").css("border-style","dotted");
    $("p").each(function(){
           alert($(this).text())
       });
     });
     //question 2
  $("#hide").click(function(){
      $("img").hide();
  });
  $("#show").click(function(){
      $("img").show();
  });

    $("#fade").click(function(){
        $("img").fadeOut();
        $("img").fadeOut("slow");
        $("img").fadeOut(6000);
  });
// question 3
  $('#anime').click(function() {
    $("#div1").animate({
          left: '300px',
          opacity: '0.3',
          height: '+=50px',
          width: '+=50px'
           });
  });
 //question 4
let str="";
   $("input").change(function() {

          if ($(this).val() == "")
          {
          $(this).focus();
          $(this).css("color", "yellow");
          alert("Please enter value for this element");
        }
        else
        {
          str += $(this).val();
          //$("#demo").text($(this).val());

        }
        $("#demo").text(str);

    });
});
