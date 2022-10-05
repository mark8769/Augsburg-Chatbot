var id = null;
function chatbotMove() {
  var elem = document.getElementById("chatbotAnimationElement"); 
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.bottom = pos + 'px';
    }
  }
  loadDialogOptions();
}

function loadDialogOptions() {
	console.log("Dialog options not implemented yet");
}