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
	var elem = document.getElementById("chatbotSelectionItems");
	
	// PUT YOUR OPTIONS TO BE ADEED IN THE DROP DOWN MENU BELOW
	elem.innerHTML = "<h3>Hi, how can I help you?</h3>\
					  <a class=\"nav-item nav-link\" href=\"post-grad.html\">General Post-Graduates</a>\
					  <a class=\"nav-item nav-link\" href=\"under-grad.html\">General Under-Graduates</a>\
					  <a class=\"nav-item nav-link\" href=\"academic_advising.html\">General Academic Advising</a>\
					  <a class=\"nav-item nav-link\" onclick=\"feelingLucky()\">I'm feeling lucky!</a>\
					  <a class=\"nav-item nav-link\" href=\"index.html\">If none of those helped... you could try our AI chatbot?</a>\
					  ";
}

function removeDialogOptions() {

}

function feelingLucky() {
	pages = ["index.html", "post-grad.html", "under-grad.html", "academic_advising.html"];
	
	var num = Math.round(Math.random() * 3); // increase the number to reflect the (number of pages) - 1
	
	document.location.href=pages[num], true; // changes the url to a random web page
}

function changeChatbotImage(filepath, height, width, option) {
	var elem = document.getElementById("chatbotAnimationElement");
	elem.innerHTML= "<img src=\"" + filepath + "\" height=\"" + height + "px\" \
	width=\"" + width + "px\" onclick=\"chatbotMove" + option + "()\"></img>";
	//console.log(elem.innerHTML);
	//console.log("Chatbot Image has been updated"); // TODO: Remove
}