/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
	var navBarElement = document.getElementById("sideNavBar");
	navBarElement.style.width = "100px";
	navBarElement.style.height = "150px";
	navBarElement.style.backgroundColor = "rgba(0,0,0,0.4)";
	document.getElementById("sideNavMain").style.marginLeft = "5px";
	navBarElement.innerHTML = "<a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\" style=\"text-align:right;\">x</a><br/>\
							   <a href=\"javascript:void(0)\" onclick=\"getAboutSection()\">About</a> <br/>\
							   <a href=\"javascript:void(0)\" onclick=\"getServicesSection()\">Services</a> <br/>\
							   <a href=\"javascript:void(0)\" onclick=\"getStudentPortalSection()\">Student Portal</a> <br/>\
							   <a href=\"javascript:void(0)\" onclick=\"getContactSection()\">Contact</a> <br/>";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
	var navBarElement = document.getElementById("sideNavBar");
	navBarElement.style.width = "0";
	navBarElement.style.height = "0";
	navBarElement.style.backgroundColor = "white";
	document.getElementById("sideNavMain").style.marginLeft = "0";
	navBarElement.innerHTML = "";
	document.getElementById("sideContent").innerHTML = "";
}

/* About section html generation */
function getAboutSection() {
	var element = document.getElementById("sideContent");
	element.innerHTML= getTextPostgradAbout;
	setActiveNavItem("about");
}

/* Services section html generation */
function getServicesSection() {
	var element = document.getElementById("sideContent");
	element.innerHTML= getTextPostgradService;
	setActiveNavItem("services");
}

/* Contact section html generation */
function getContactSection() {
	var element = document.getElementById("sideContent");
	element.innerHTML= getTextPostgradContact;
	setActiveNavItem("contact");
}

/* Student Portal Section html generation */
function getStudentPortalSection() {
	var element = document.getElementById("sideContent");
	element.innerHTML= getTextPostgradPortal;
	setActiveNavItem("student_portal");
}

/* setting active item in the side nav bar */
function setActiveNavItem(item) {
	for(const list_item of sectionItems) {
		if (item == list_item) {
			document.getElementById(item).style.backgroundColor = "#74253e";
		}
		else {
			document.getElementById(list_item).style.backgroundColor = "#111";
		}
	}
}

var sectionItems = ["about", "services", "student_portal", "contact"];

/* Below is text for chatbot*/
/* Academic Text */
var getAcademicAdvisingTitle = "<h3>Welcome to Academic Advising!</h3>\
<br>";
var getTextAcademicAbout = "<div class=\"navBarItem\"><h5>About us</h5>\
<p>Purpose of academic advising: Academic Advising educates students, faculty, and staff\
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
<p>If you would like to apply click <a href=\"404.html\">here</a></p></div>\
";		

var getTextAcademicService = "<div class=\"navBarItem\"><h5>Services</h5>\
<p>If you have any questions or inquires about academic advising please reach out to: registration@example.com</p>\
<h5>Useful Tools</h5>\
<p>This is a document of academic advisong drop in hours: \
<a href=\"https://docs.google.com/document/d/1nuyy7NRk2tSEQDSzOWVb1jOfKLdeVXEDWORwI7srjr8/edit#\">Drop in hours</a></p>\
<p>Where to schedule an appointment: <a href=\"https://augsburg.navigate.eab.com/\">Schedule appointment</a></p>\
<p>Any other academic advising inquires please reach out to AcademicHelp@example.com</p></div>";	

var getTextAcademicPortal = "<div class=\"navBarItem\"><h5>Student Portal</h5>\
<a href=\"404.html\">Academic Advising Email</a><br\>\
<a href=\"404.html\">Academic Advising Finances</a><br\>\
<a href=\"404.html\">Academic Advising Mentorship</a><br\>\
<a href=\"404.html\">Academic Advising Classes</a></div>";	

var getTextAcademicContact = "<div class=\"navBarItem\"><h5>Contact us</h5>\
<p>If you have any questions or inquires about classes please reach out to: registration@example.com</p>\
<h6>Instagram</h6>\
<p>Follow <a href=\"https://www.instagram.com/advisingataugsburg/\">AdvisingatAugsburg</a></p>\
<h6>Location</h6>\
<p>Lindell Library, Second Floor (Link Level) 2211 Riverside Avenue South Campus Box 137 Minneapolis, MN 55454</p>\
<h6>Email: <a href=\"advising@augsburg.edu\">advising@augsburg.edu</a></h6>\
<h6>Telephone: <p>612-330-1025</p></h6>\
<p>all other requests can be asked at: help@example.com</p></div>";

/* Post Grad Text */
var getTextPostgradAbout = "<div class=\"navBarItem\"><h5>About us</h5>\
<p>Our Mission: To seek individuals who are willing to become informed citizens,\
thoughtful stewards, critical thinkers, and responsible leaders.</p>\
<p>If you would like to apply click <a href=\"404.html\">here</a></p></div>\
";

var getTextPostgradService = "<div class=\"navBarItem\"><h5>Services</h5>\
<p>If you have any questions or inquires about classes please reach out to: registration@example.com</p>\
<p>If you have any questions about classes please reach out to: registration@example.com</p>\
<p>Any other post-graduate inquires please reach out to postGradHelp@example.com</p></div>";

var getTextPostgradPortal = "<div class=\"navBarItem\"><h5>Student Portal</h5>\
<a href=\"404.html\">Postgraduate Email</a><br\>\
<a href=\"404.html\">Postgraduate Finances</a><br\>\
<a href=\"404.html\">Postgraduate Mentorship</a><br\>\
<a href=\"404.html\">Postgraduate Classes</a></div>";

var getTextPostgradContact = "<div class=\"navBarItem\"><h5>Contact us</h5>\
<p>If you have any questions or inquires about classes please reach out to: registration@example.com</p>\
<p>If you have any questions about housing please reach out to: campuslife@example.com</p>\
<p>all other requests can be asked at: help@example.com</p></div>";

/*Undergrad Text */
var getTextUndergradAbout = "<div class=\"navBarItem\"><h5>About us</h5>\
<p>Our Mission: To seek individuals who are willing to become informed citizens,\
thoughtful stewards, critical thinkers, and responsible leaders.</p>\
<p>If you would like to apply click <a href=\"404.html\">here</a></p></div>\
";		

var getTextUndergradService = "<div class=\"navBarItem\"><h5>Services</h5>\
<p>If you have any questions or inquires about classes please reach out to: registration@example.com</p>\
<p>If you have any questions about classes please reach out to: registration@example.com</p>\
<p>Any other undergraduate inquires please reach out to: underGradHelp@example.com</p></div>";

var getTextUndergradPortal = "<div class=\"navBarItem\"><h5>Student Portal</h5>\
<a href=\"404.html\">Undergraduate Email</a><br\>\
<a href=\"404.html\">Undergraduate Finances</a><br\>\
<a href=\"404.html\">Undergraduate Mentorship</a><br\>\
<a href=\"404.html\">Undergraduate Classes</a></div>";

var getTextUndergradContact = "<div class=\"navBarItem\"><h5>Contact us</h5>\
<p>If you have any questions or inquires about classes please reach out to: registration@example.com</p>\
<p>If you have any questions about housing please reach out to: campuslife@example.com</p>\
<p>all other requests can be asked at: help@example.com</p></div>";