$(document).ready(function(){
  var turn = 0;

  $('td').one('click', function() {
    if (turn%2 === 0)
    {
      $(this).css('background-color', 'red');
      $('p').append("<br>" + "player 2 turn");
    }
    else
    {
      $(this).css('background-color', 'blue');
      $('p').append("<br>" + "player 1 turn");
    }
    turn++;
  });

});