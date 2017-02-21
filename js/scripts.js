$(document).ready(function(){
  $("form#luckGetter").submit(function(event){
      event.preventDefault();
      $("#fortune").show();

      var score = 0;

      $("input:checkbox[name=bad-luck]:checked").each(function(){
        score = score - toInt($(this).val());
      });
      $("input:checkbox[name=good-luck]:checked").each(function(){
        score = score + toInt($(this).val());
      });

      if (score <= 0) {
        $("#fortune").append("<h3>You will see a scary clown today.</h3>");
      } else if ((score > 0) && (score < 5)) {
        $("#fortune").append("<h3>You will walk through downtown for five whole blocks without being asked for money or a cigarette.</h3>");
      } else {
        $("#fortune").append("<h3>You will find twenty dollars on the ground.</h3>");
      }
      $('#luckGetter').hide();
  });
});
