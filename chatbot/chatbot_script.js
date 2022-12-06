var id = null;
function chatbotMoveUp() {
  var elem = document.getElementById("chatbotAnimationElement"); 
  /* Starting positino in css, can start lower like before */
  var pos = 10;
  clearInterval(id);
  /* How fast it increments to desired position in if */
  id = setInterval(frame, .0001);
  function frame() {
    if (pos == 30) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.bottom = pos + '%';
    }
  }
  
  changeChatbotImage("chatbot/images/chatbot_greeting_nobg.png", 259, 194, "Down");
  loadDialogOptions();
}

function chatbotMoveDown() {
  var elem = document.getElementById("chatbotAnimationElement");
  var pos = 30;
  console.log(pos);
  clearInterval(id);
  id = setInterval(frame, .0001);
  function frame() {
    if (pos == 10) {
      clearInterval(id);
    } else {
      pos--; 

      elem.style.bottom = pos + '%';
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
            <p></p>\
            <a onclick=\"return theFunctionPost();\">More Info Post Graduates</a>\
            <p></p>\
            <a onclick=\"return theFunctionUnder();\">More Info Under Graduates</a>\
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
}

/* Below is Adacemic Advising info */

function theFunctionAcademic(){
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

/* Below is Postgrad info */
function theFunctionPost(){
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
function theFunctionUnder(){
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = generalOutlineUnder;
}

var generalOutlineUnder = "<h5>Here is some info for Under graduates, click one to see if it helps</h5>\
<p onclick=\"return aboutInfoUnder();\">About</p>\
<p onclick=\"return aboutInfoServiceUnder();\">StudentService</p>\
<p onclick=\"return UnderPortalInfo();\">StudentPortal</p>\
<a onclick=\"return UnderContactInfo();\">Contact Info</a>\
";

function aboutInfoUnder(){
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = getTextUndergradAbout;
}

function aboutInfoServiceUnder(){
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = getTextUndergradService;
}

function UnderPortalInfo(){
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = getTextUndergradPortal;
}

function UnderContactInfo(){
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = getTextUndergradContact;
}