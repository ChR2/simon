$(document).ready(function(){
  $('#get_color').on('click', function(event){
    event.preventDefault();
    var url = ('/color');
    $.post(url, function(response){
      console.log(response)
      var object = JSON.parse(response);
      var child = object.cell;
      var color = object.color;
      $('#color_me li:nth-child('+ child +')').css('background-color', color);
    });
  });
});
