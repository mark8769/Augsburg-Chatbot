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
					  <a class=\"nav-item nav-link\" href=\"post-grad.html\">General Post-Graduates</a>\
					  <a class=\"nav-item nav-link\" href=\"under-grad.html\">General Under-Graduates</a>\
					  <a class=\"nav-item nav-link\" href=\"academic_advising.html\">General Academic Advising</a>\
					  <p></p>\
					  <a class=\"nav-item nav-link\" href=\"index.html\">If none of those helped... you could try our AI chatbot?</a>\
					  <p></p>\
					  <p></p>\
					  <a class=\"nav-item nav-link\" onclick=\"feelingLucky()\">I'm feeling lucky!</a>\
            <a onclick=\"return theFunction();\">Test Text: More Info Academic Advising</a>\
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
//---------------------------------------------------
//Below is what I have added so Far! + line 52!
//fn1();

var originalText = "<h3>Hi, how can I help you?</h3>\
<a class=\"nav-item nav-link\" href=\"post-grad.html\">Original Text</a>\
";

function theFunction(){
  console.log("Has Been Clicked");
  var myStringArray = stringOptionsArrayToString(academicArray);
  var elem = document.getElementById("chatbotSelectionItems");
  //elem.innerHTML = originalText;
  console.log(originalText);
  elem.innerHTML = generalOutline;
  console.log(elem.innerHTML);
}

var generalOutline = "<h5>Here are subsectiuons in our Page click one to see if it helps</h5>\
<a onclick=\"return aboutInfo();\">AboutMain</a>\
<p onclick=\"return aboutInfoS();\">StudentService</p>\
<p onclick=\"return aboutInfoPortal();\">StudentPortal</p>\
";

function aboutInfo(theString){
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = aboutTextAcademic;
}

var aboutTextAcademic = "<p>Purpose of academic advising: Academic Advising educates students, faculty, and staff\
on the Augsburg curriculum; interprets academic policies and procedures;\
and supports students in achieving their educational and vocational goals.</p>\
<h5>How academic advising works</h5>\
<p>The advisors in Academic Advising are professionals trained to work with students who are new to the university and current \
students who have questions about the general education requirements and interpretation of the academic procedures and policies of \
the university. Academic Advising also provides comprehensive academic support for all Augsburg students.\
Faculty mentors are full time members of specific academic departments who have been at the university at least a full year and have \
been trained by Academic Advising on advising Augsburg students. Faculty mentors usually work with somewhere between 20–25 advisees \
majoring in the department. They specialize in advising in their field (English, Biology, Social Work, etc.) but are also trained to\
advise students on General Education issues.</p>\
<p>If you would like to apply click <a href=\"404.html\">here</a></p>\
";

function aboutInfoS(theString){
  var elem = document.getElementById("chatbotSelectionItems");
  elem.innerHTML = aboutTextS;
}

var aboutTextS = "<h5>Services</h5>\
<p>If you have any questions or inquires about academic advising please reach out to: registration@example.com</p>\
<h5>Useful Tools</h5>\
<p>This is a document of academic advisong drop in hours: \
<a href=\"https://docs.google.com/document/d/1nuyy7NRk2tSEQDSzOWVb1jOfKLdeVXEDWORwI7srjr8/edit#\">Drop in hours</a></p>\
<p>Where to schedule an appointment: <a href=\"https://augsburg.navigate.eab.com/\">Schedule appointment</a></p>\
<p>Any other academic advising inquires please reach out to AcademicHelp@example.com</p>";	

function aboutInfoPortal(){
  var elem = document.getElementById("chatbotSelectionItems");
  //elem.innerHTML = getTextTest;
  elem.innerHTML = getTextTestPortal;
  //console.log(getTextTestPortal);
}
//--------------

var academicArray = ["<h3>About</h3>",
"\<a class=\"nav-item nav-link\" href=\"post-grad.html\">General Post-Graduates</a>"];

function stringOptionsArrayToString(theArray){
  var longString = "";
  for (var s of theArray){
    longString= longString+s+"\n";
  }
  console.log(longString);
}
console.log(getTextTest);