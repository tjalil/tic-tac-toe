$(document).ready(function(){
  var turn = 0;
  var player1 = [];
  var player2 = [];
  var answers = [
  ['box1', 'box2', 'box3'], 
  ['box4', 'box5', 'box6'],
  ['box7', 'box8', 'box9'],
  ['box1', 'box4', 'box7'],
  ['box2', 'box5', 'box8'],
  ['box3', 'box6', 'box9'],
  ['box1', 'box5', 'box9'],
  ['box3', 'box5', 'box7']
  ];


  $('td').one('click', function() {
    if (turn % 2 === 0)
    { var id = $(this).attr("id");
      player1.push(id);
      $(this).css('background-color', 'red');
      $('p').replaceWith("<p>Player 2 turn</p>");



      for(var i = 0; i < player1.length; i++)
      {
        for(var j = 0; j < answers[i].length; j++)
        {
          // console.log(player1);
          if ($.inArray(answers[i][j], player1[i]) !== -1 )
          {
            $('p').append("Player 1 wins!")
          }
        }
      }

      }
    else
    { var id = $(this).attr("id");
      player2.push(id);
      $(this).css('background-color', 'blue');
      $('p').replaceWith("<p>Player 1 turn</p>");
    }
    turn++;
  });

});