$(document).ready(function(){
  $("form#luckGetter").submit(function(event){
      event.preventDefault();
      $("#fortune").show();

      var score = 0;

      $("input:checkbox[name=bad-luck]:checked").each(function(){
        score = score - parseInt($(this).val());
      });
      $("input:checkbox[name=good-luck]:checked").each(function(){
        score = score + parseInt($(this).val());
      });

      if (score <= -2) {
        $("#fortune").append("<h3>You will see a scary clown today.</h3>");
      } else if ((score > -2) && (score < 3)) {
        $("#fortune").append("<h3>You will walk through downtown for five whole blocks without being asked for money or a cigarette.</h3>");
      } else {
        $("#fortune").append("<h3>You will find twenty dollars on the ground.</h3>");
      }
      $('#luckGetter').hide();
  });
});
