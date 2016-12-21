$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 13) {
    goForward(100);
    turnLeft();
  } 
})

function sides(n) {
  for (i = 0; i < n; i++) {
    goForward(100)
    turnLeftStar(n);
  }
}

sides(10)