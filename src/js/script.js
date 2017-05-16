var memoryArray = ['A','A','B','B','C','C','D','D','E','E','F',
'F','G','G','H','H','I','I','J','J','K','K','L','L'];
var memoryValues = [];
var memoryTileIds = [];
var tilesFlipped = 0;
var mistake = 0;
var intervalRefresh;
var time = 0;
var minutes = 0;
var seconds = 0;
var minutesLabel = document.getElementById('minutes');
var secondsLabel = document.getElementById('seconds');
var totalSeconds = 0;

document.getElementById('mistakes').innerHTML = mistake;

document.getElementById('startGame').addEventListener('click', function() {
    intervalRefresh = setInterval(setTime, 1000);
    newBoard();
  });

document.getElementById('restBoard').addEventListener('click', function() {
    clearInterval(intervalRefresh);
    resteTime();
    restBoard();
  });

document.getElementById('leaderBoard').addEventListener('click', function() {
    $('#board').load('pages/leaderBoard.php');
  });

// Sets the time
function setTime() {
  ++totalSeconds;
  minutes = pad(totalSeconds % 60);
  seconds = pad(parseInt(totalSeconds / 60));
  secondsLabel.innerHTML = minutes;
  minutesLabel.innerHTML = seconds;
}
// restes the time in the html
function resteTime() {
  totalSeconds = 0;
  minutes = pad(totalSeconds % 60);
  seconds = pad(parseInt(totalSeconds / 60));
  secondsLabel.innerHTML = minutes;
  minutesLabel.innerHTML = seconds;
}

function pad(val) {
  var valString = val + '';
  if (valString.length < 2) {
    return '0' + valString;
  } else {
    return valString;
  }
}

Array.prototype.memoryTileShuffle = function() {
  var i = this.length;
  var j;
  var temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
};

function newBoard() {
  tilesFlipped = 0;
  var output = '';
  memoryArray.memoryTileShuffle();
  for (var i = 0; i < memoryArray.length; i++) {
    //jscs:disable maximumLineLength
    output += '<div id="tile_' + i + '" onclick="memoryFlipTile(this,\'' + memoryArray[i] + '\')"></div>';
    //jscs:enable maximumLineLength
  }
  document.getElementById('board').innerHTML = output;
}

function restBoard() {
  var output = '';
  document.getElementById('board').innerHTML = output;
  mistake = 0;
  document.getElementById('mistakes').innerHTML = mistake;
}

function flip2back() {
  var tile1 = document.getElementById(memoryTileIds[0]);
  var tile2 = document.getElementById(memoryTileIds[1]);
  tile1.style.background = 'rgba(200, 200, 200, 1)';
  tile1.innerHTML = '';
  tile2.style.background = 'rgba(200, 200, 200, 1)';
  tile2.innerHTML = '';
  memoryValues = [];
  memoryTileIds = [];
  mistake += 1;
  document.getElementById('mistakes').innerHTML = mistake;
}

function memoryFlipTile(tile, val) {
  if (tile.innerHTML == '' && memoryValues.length < 2) {
    tile.style.background = '#FFF';
    tile.innerHTML = val;
    if (memoryValues.length == 0) {
      memoryValues.push(val);
      memoryTileIds.push(tile.id);
    } else if (memoryValues.length == 1) {
      memoryValues.push(val);
      memoryTileIds.push(tile.id);
      if (memoryValues[0] == memoryValues[1]) {
        tilesFlipped += 2;
        memoryValues = [];
        memoryTileIds = [];
        if (tilesFlipped == memoryArray.length) {
          document.getElementById('board').innderHTML = mistake;
          $('#board').load('pages/form.html');
          console.log(totalSeconds);
          console.log(mistake);
          setTimeout(function() {
            console.log(totalSeconds);
            console.log(mistake);
            $('#time-input').val(totalSeconds);
            $('#mistakes-input').val(mistake);
            clearInterval(intervalRefresh);
            resteTime();
          }, 100);
        }
      } else {
        setTimeout(flip2back, 700);
      }
    }
  }
}

