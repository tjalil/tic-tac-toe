$(document).ready(function(){
  var turn = 0;
  var player1 = [];
  var player2 = [];

  // var win1 = ['box1', 'box2', 'box3'];
  // var win2 = ['box4', 'box5', 'box6'];
  // var win3 = ['box7', 'box8', 'box9'];
  // var win4 =['box1', 'box4', 'box7'];
  // var win5 =['box2', 'box5', 'box8'];
  // var win6 =['box3', 'box6', 'box9'];
  // var win7 =['box1', 'box5', 'box9'];
  // var win8 =['box3', 'box5', 'box7'];

  $('td').one('click', function() 
  {
    if (turn % 2 === 0) 
    { 
      var id = $(this).attr("id");
      player1.push(id);
      $(this).append('X');
      $('p').replaceWith("<p>Player 2 turn</p>");
      console.log(box1.text);

      // horizontal wins
      if(box1.textContent === 'X' && box2.textContent === 'X' && box3.textContent === 'X')
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 1 wins!</h1>");
        $('td').off('click');
      }
      else if(box4.textContent === 'X' && box5.textContent === 'X' && box6.textContent === 'X')
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 1 wins!</h1>");
        $('td').off('click');
      }
      else if(box7.textContent === 'X' && box8.textContent === 'X' && box9.textContent === 'X')
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 1 wins!</h1>");
        $('td').off('click');
      }

      //vertical wins
      else if(box1.textContent === 'X' && box4.textContent === 'X' && box7.textContent === 'X')
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 1 wins!</h1>");
        $('td').off('click');
      }
      else if(box2.textContent === 'X' && box5.textContent === 'X' && box8.textContent === 'X')
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 1 wins!</h1>");
        $('td').off('click');
      }
      else if(box3.textContent === 'X' && box6.textContent === 'X' && box9.textContent === 'X')
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 1 wins!</h1>");
        $('td').off('click');
      }

      //diagonal wins
      else if(box1.textContent === 'X' && box5.textContent === 'X' && box9.textContent === 'X')
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 1 wins!</h1>");
        $('td').off('click');
      }
      else if(box3.textContent === 'X' && box5.textContent === 'X' && box7.textContent === 'X')
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 1 wins!</h1>");
        $('td').off('click');
      }
    }

    else
    { 
      var id = $(this).attr("id");
      player2.push(id);
      $(this).append('O');
      $('p').replaceWith("<p>Player 1 turn</p>");

      // horizontal wins
      if(box1.textContent === 'O' && box2.textContent === 'O' && box3.textContent === 'O')
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 2 wins!</h1>");
        $('td').off('click');
      }
      else if(box4.textContent === 'O' && box5.textContent === 'O' && box6.textContent === 'O')
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 2 wins!</h1>");
        $('td').off('click');
      }
      else if(box7.textContent === 'O' && box8.textContent === 'O' && box9.textContent === 'O')
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 2 wins!</h1>");
        $('td').off('click');
      }

      //vertical wins
      else if(box1.textContent === 'O' && box4.textContent === 'O' && box7.textContent === 'O')
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 2 wins!</h1>");
        $('td').off('click');
      }
      else if(box2.textContent === 'O' && box5.textContent === 'O' && box8.textContent === 'O')
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 2 wins!</h1>");
        $('td').off('click');
      }
      else if(box3.textContent === 'O' && box6.textContent === 'O' && box9.textContent === 'O')
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 2 wins!</h1>");
        $('td').off('click');
      }

      //diagonal wins
      else if(box1.textContent === 'O' && box5.textContent === 'O' && box9.textContent === 'O')
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 2 wins!</h1>");
        $('td').off('click');
      }
      else if(box3.textContent === 'O' && box5.textContent === 'O' && box7.textContent === 'O')
      {
        $('p').replaceWith("<h1 class = 'win-msg'>Player 2 wins!</h1>");
        $('td').off('click');
      }
    }
    turn++;

    if (turn === 9)
    {
      $('p').replaceWith("<h1 class = 'tie-msg'>Well, that was a snoozefest ...</h1>");
    }

  });

// reset game button
  // function playAgain()
  // {
  //   var btn = $('body').append('<button class="play-again">Play Again</button>');
  //   $(btn).click(function()
  //   {
  //     history.go(0);
  //   });
  // }

});