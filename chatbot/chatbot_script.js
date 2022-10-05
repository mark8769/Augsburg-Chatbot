var id = null;
function chatbotMoveUp() {
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
  
  changeChatbotImage("chatbot/images/chatbot_greeting.jpg", 259, 194, "Down");
  loadDialogOptions();
}

function chatbotMoveDown() {
  var elem = document.getElementById("chatbotAnimationElement");
  var pos = 100;
  console.log(pos);
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.bottom = pos + 'px';
    }
  }
  changeChatbotImage("chatbot/images/chatbot_head.jpg", 108, 124, "Up");
  loadDialogOptions();
}

function loadDialogOptions() {
	console.log("Dialog options not implemented yet"); // TODO: Remove
}

function changeChatbotImage(filepath, height, width, option) {
	var elem = document.getElementById("chatbotAnimationElement");
	elem.innerHTML= "<img src=\"" + filepath + "\" height=\"" + height + "px\" \
	width=\"" + width + "px\" onclick=\"chatbotMove" + option + "()\"></img>";
	console.log(elem.innerHTML);
	console.log("Chatbot Image has been updated"); // TODO: Remove
}