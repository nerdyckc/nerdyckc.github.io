var isEmpty = [true, true, true, true, true, true, true, true, true];
var circleArr = [];   // track circle positions
var crossArr = [];    // track cross positions
var circlesTurn = true;
var circleOrCross;

var possibleCombinations = {
  1: [1, 2, 3],
  2: [4, 5, 6],
  3: [7, 8, 9],
  4: [1, 4, 7],
  5: [2, 5, 8],
  6: [3, 6, 9],
  7: [1, 5, 9],
  8: [3, 5, 7],
};

function restartGame() {
  for (var i = 1; i <= 9; i++) {
    $('#grid' + i).removeClass('circle');
    $('#grid' + i).removeClass('cross');
  }
  isEmpty = [true, true, true, true, true, true, true, true, true];
  circleArr = [];
  crossArr = [];
  circlesTurn = true;
}

function checkWin(arr, name) {    // Game over? true or false.
  for (var p in possibleCombinations) {
    if (possibleCombinations[p].every(elem => arr.indexOf(elem) > -1)) {
      isEmpty = isEmpty.map(function (elem) { return false });
      setTimeout(function () {
        return alert(`${name} wins`);
      }, 200);
    }
  }
}

// gameplay
$('.field').on("click", function (e) {
  grid_id = e.target.id
  id = grid_id.slice(grid_id.length - 1, grid_id.length);

  if (circlesTurn) {          // if Circle's turn
    if (isEmpty[id - 1]) {    // check grid is empty
      $(`#${grid_id}`).toggleClass('circle');
      isEmpty[id - 1] = false;
      circleArr.push(Number(id));
      circlesTurn = false;
    }
  } else {                    // else if Cross's turn
    if (isEmpty[id - 1]) {    // check grid is empty
      $(`#${grid_id}`).toggleClass('cross');
      isEmpty[id - 1] = false;
      crossArr.push(Number(id));
      circlesTurn = true;
    }
  }

  if (checkWin(circleArr, "circle")) {
    console.log("Game Over!");
  } else if ((checkWin(crossArr, "cross"))) {
    console.log("Game Over!");
  } else {          // if no one wins, game continues
    circleOrCross = (circlesTurn ? "Circle's turn" : "Cross's turn");
    console.log(`${circleOrCross}`);
  }
})

$('button[id="restart"]').on("click", function (e) {
  restartGame();
})
