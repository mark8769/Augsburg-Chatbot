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
  removeDialogOptions();
}

function loadDialogOptions() {
	console.log("Dialog options not implemented yet"); // TODO: Remove
	var elem = document.getElementById("chatbotSelectionItems");
	
	// PUT YOUR OPTIONS TO BE ADEED IN THE DROP DOWN MENU BELOW
	elem.innerHTML = "<h3>Hi, how can I help you?</h3>\
            <h6>Click one of the 3 links below to go to the page</h6>\
					  <a class=\"nav-item nav-link\" href=\"post-grad.html\">General Post-Graduates</a>\
					  <a class=\"nav-item nav-link\" href=\"under-grad.html\">General Under-Graduates</a>\
					  <a class=\"nav-item nav-link\" href=\"academic_advising.html\">General Academic Advising</a>\
					  <p></p>\
					  <a class=\"nav-item nav-link\" href=\"index.html\">If none of those helped... you could try our AI chatbot?</a>\
					  <p></p>\
					  <p></p>\
					  <a class=\"nav-item nav-link\" onclick=\"feelingLucky()\">I'm feeling lucky!</a>\
            <p></p>\
            <h6>Click one below for more info</h6>\
            <a onclick=\"return theFunctionAcademic();\">More Info Academic Advising</a>\
            <a onclick=\"return theFunctionPost();\">More Info Post Graduates</a>\
            <p></p>\
					  ";
					  
	elem.style = "padding: 10px;";
}

function removeDialogOptions() {
	var elem = document.getElementById("chatbotSelectionItems").innerHTML = "";
	elem.sytle = "";
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
//--------------------------------------------------- TODO: Remove unnessary lines Below
//Below is what I have added so Far! + line 52!
/* Below is Adacemic Advising info */

function theFunctionAcademic(){
  console.log("Has Been Clicked");
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = generalOutlineAcademic;
}

var generalOutlineAcademic = "<h5>Here is some info for Academic Advising, click one to see if it helps</h5>\
<p onclick=\"return aboutInfo();\">About</p>\
<p onclick=\"return aboutInfoS();\">StudentService</p>\
<p onclick=\"return AcademicPortalInfo();\">StudentPortal</p>\
<a onclick=\"return AcademicContactInfo();\">Contact Info</a>\
";

function aboutInfo(theString){
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = getTextAcademicAbout;
}

function aboutInfoS(theString){
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = getTextAcademicService;
}

function AcademicPortalInfo(){
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = getTextAcademicPortal;
}

function AcademicContactInfo(){
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = getTextAcademicContact;
}

/* Below is Postgrad info */ //Current error: Only can get scripts from pages its on!
//Solution 1: Have a script in every page
//Solution 2: Find another method
function theFunctionPost(){
  console.log("Post GradHas Been Clicked");
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = generalOutlinePost;
}

var generalOutlinePost = "<h5>Here is some info for Post graduates, click one to see if it helps</h5>\
<p onclick=\"return aboutInfoPost();\">About</p>\
<p onclick=\"return aboutInfoServicePost();\">StudentService</p>\
<p onclick=\"return PostPortalInfo();\">StudentPortal</p>\
<a onclick=\"return PostContactInfo();\">Contact Info</a>\
";

function aboutInfoPost(){
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = getTextPostgradAbout;
}

function aboutInfoServicePost(){
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = getTextPostgradService;
}

function PostPortalInfo(){
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = getTextPostgradPortal;
}

function PostContactInfo(){
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = getTextPostgradContact;
}
/* Below is Undergrad Info*/