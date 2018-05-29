var isEmpty1 = true;
var isEmpty2 = true;
var isEmpty3 = true;
var isEmpty4 = true;
var isEmpty5 = true;
var isEmpty6 = true;
var isEmpty7 = true;
var isEmpty8 = true;
var isEmpty9 = true;
var circlesTurn = true;
var circleOrCross;

$('#grid1').on("click", function () {
  // alert ('test');
  if (circlesTurn) {
    if (isEmpty1) {
      $(this).toggleClass('circle');
      isEmpty1 = false;
      circlesTurn = false;
    }
  } else {
    if (isEmpty1) {
      $(this).toggleClass('cross');
      isEmpty1 = false;
      circlesTurn = true;
    }
  }
  circleOrCross = (circlesTurn? "Circle's turn":"Cross's turn");
  console.log(`${circleOrCross}`);
})

$('#grid2').on("click", function () {
  // alert ('test');
  if (circlesTurn) {
    if (isEmpty2) {
      $(this).toggleClass('circle');
      isEmpty2 = false;
      circlesTurn = false;
    }
  } else {
    if (isEmpty2) {
      $(this).toggleClass('cross');
      isEmpty2 = false;
      circlesTurn = true;
    }
  }
  circleOrCross = (circlesTurn? "Circle's turn":"Cross's turn");
  console.log(`${circleOrCross}`);
})

$('#grid3').on("click", function () {
  // alert ('test');
  if (circlesTurn) {
    if (isEmpty3) {
      $(this).toggleClass('circle');
      isEmpty3 = false;
      circlesTurn = false;
    }
  } else {
    if (isEmpty3) {
      $(this).toggleClass('cross');
      isEmpty3 = false;
      circlesTurn = true;
    }
  }
  circleOrCross = (circlesTurn? "Circle's turn":"Cross's turn");
  console.log(`${circleOrCross}`);
})

$('#grid4').on("click", function () {
  // alert ('test');
  if (circlesTurn) {
    if (isEmpty4) {
      $(this).toggleClass('circle');
      isEmpty4 = false;
      circlesTurn = false;
    }
  } else {
    if (isEmpty4) {
      $(this).toggleClass('cross');
      isEmpty4 = false;
      circlesTurn = true;
    }
  }
  circleOrCross = (circlesTurn? "Circle's turn":"Cross's turn");
  console.log(`${circleOrCross}`);
})

$('#grid5').on("click", function () {
  // alert ('test');
  if (circlesTurn) {
    if (isEmpty5) {
      $(this).toggleClass('circle');
      isEmpty5 = false;
      circlesTurn = false;
    }
  } else {
    if (isEmpty5) {
      $(this).toggleClass('cross');
      isEmpty5 = false;
      circlesTurn = true;
    }
  }
  circleOrCross = (circlesTurn? "Circle's turn":"Cross's turn");
  console.log(`${circleOrCross}`);
})

$('#grid6').on("click", function () {
  // alert ('test');
  if (circlesTurn) {
    if (isEmpty6) {
      $(this).toggleClass('circle');
      isEmpty6 = false;
      circlesTurn = false;
    }
  } else {
    if (isEmpty6) {
      $(this).toggleClass('cross');
      isEmpty6 = false;
      circlesTurn = true;
    }
  }
  circleOrCross = (circlesTurn? "Circle's turn":"Cross's turn");
  console.log(`${circleOrCross}`);
})

$('#grid7').on("click", function () {
  // alert ('test');
  if (circlesTurn) {
    if (isEmpty7) {
      $(this).toggleClass('circle');
      isEmpty7 = false;
      circlesTurn = false;
    }
  } else {
    if (isEmpty7) {
      $(this).toggleClass('cross');
      isEmpty7 = false;
      circlesTurn = true;
    }
  }
  circleOrCross = (circlesTurn? "Circle's turn":"Cross's turn");
  console.log(`${circleOrCross}`);
})

$('#grid8').on("click", function () {
  // alert ('test');
  if (circlesTurn) {
    if (isEmpty8) {
      $(this).toggleClass('circle');
      isEmpty8 = false;
      circlesTurn = false;
    }
  } else {
    if (isEmpty8) {
      $(this).toggleClass('cross');
      isEmpty8 = false;
      circlesTurn = true;
    }
  }
  circleOrCross = (circlesTurn? "Circle's turn":"Cross's turn");
  console.log(`${circleOrCross}`);
})

$('#grid9').on("click", function () {
  // alert ('test');
  if (circlesTurn) {
    if (isEmpty9) {
      $(this).toggleClass('circle');
      isEmpty9 = false;
      circlesTurn = false;
    }
  } else {
    if (isEmpty9) {
      $(this).toggleClass('cross');
      isEmpty9 = false;
      circlesTurn = true;
    }
  }
  circleOrCross = (circlesTurn? "Circle's turn":"Cross's turn");
  console.log(`${circleOrCross}`);
})
