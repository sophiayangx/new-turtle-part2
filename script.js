$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 39) {
    goForward(100);
  } 
})

$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 38) {
    turnUp()
    goForward(100)
  } 
})

$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 37) {
    turnLeft();
    goForward(100);
  } 
})

$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 40) {
    turnDown();
    goForward(100);
  } 
})