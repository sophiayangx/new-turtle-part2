$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 39) {
    goForward(100);
  } 
})

$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 38) {
    goUp(100)
  } 
})

$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 37) {
    goBackwards(100);
  } 
})

$("body").keydown(function(keydownEvent) {
  if (keydownEvent.keyCode === 40) {
    goDown(100);
  } 
})