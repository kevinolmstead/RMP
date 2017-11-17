$(document).ready(function(){
  var everything;
  $.getJSON('roast', function(data){
    console.log(data);
    everything = "<div class='indivRoasts'>";
    for(var roast in data){
      com = data[roast];
      everything += "<p><span class='labels'>What: </span>" + com.Professor + "<br><span class='labels'>Why: </span>" + com.Roast + "</p></div>";
    }
    everything += "</div>";
    $("#roasts").html(everything);
  });
  $("#roastButton").click(function(){
    var myobj = {Professor:$("#professorField").val(),Roast:$("#roastText").val()};
    //console.log($("#professorField").val());
    //console.log($("#roastText").val());
    jobj = JSON.stringify(myobj);
    //$("#json").text(jobj);
    var url = "roast";
    $.ajax({
      url:url,
      type: "POST",
      data: jobj,
      contentType: "application/json; charset=utf-8",
      success: function(data,textStatus) {
      $.getJSON('roast', function(data){
      console.log(data);
      everything = "<div class='indivRoasts'>";
      for(var roast in data) {
        com = data[roast];
        everything += "<p><span class='labels'>What: </span>" + com.Professor + "<br><span class='labels'>Why: </span>" + com.Roast + "</p></div>";
      }
      everything += "</div>";
      $("#roasts").html(everything);
    })

      //console.log(myobj.Professor);
      
        //$("#done").html(textStatus);
        /*var everything = "<div class='indivRoasts'>";
        for(var roast in data) {
          com = data[roast];
          everything += "<p class='indiv'>Name: " + com.Professor + "<br>Roast: " + com.Roast + "</p></div>";
          $("#roasts").html(everything);*/
      }
    })
  });

  /*$("#getRoasts").click(function(){
    $.getJSON('roast', function(data){
      console.log(data);
      everything = "<div class='indivRoasts'>";
      for(var roast in data) {
        com = data[roast];
        everything += "<p class='indiv'>Name: " + com.Professor + "<br>Roast: " + com.Roast + "</p></div>";
      }
      everything += "</div>";
      $("#roasts").html(everything);
    })
  });*/

  $("#deleteRoasts").click(function(){
    var url = 'roast';
    $.ajax({
      url:url,
      type: "DELETE",
      success: function(data,textStatus){
        //$("#done").html(textStatus);
      }
    })
    everything = "";
    $("#roasts").html(everything);
  });
});


