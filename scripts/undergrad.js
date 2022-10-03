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
	element.innerHTML= "<h5>About us</h5>\
						<p>Our Mission: To seek individuals who are willing to become informed citizens,\
						thoughtful stewards, critical thinkers, and responsible leaders.</p>\
						<p>If you would like to apply click <a href=\"404.html\">here</a></p>\
						";		
}

/* Services section html generation */
function getServicesSection() {
	var element = document.getElementById("sideContent");
	element.innerHTML= "<h5>Services</h5>\
						<p>If you have any questions or inquires about classes please reach out to: registration@example.com</p>\
						<p>If you have any questions about classes please reach out to: registration@example.com</p>\
						<p>Any other undergraduate inquires please reach out to: underGradHelp@example.com</p>";	
}

/* Contact section html generation */
function getContactSection() {
	var element = document.getElementById("sideContent");
	element.innerHTML= "<h5>Contact us</h5>\
						<p>If you have any questions or inquires about classes please reach out to: registration@example.com</p>\
						<p>If you have any questions about housing please reach out to: campuslife@example.com</p>\
						<p>all other requests can be asked at: help@example.com</p>";	
}

/* Student Portal Section html generation */
function getStudentPortalSection() {
	var element = document.getElementById("sideContent");
	element.innerHTML= "<h5>Student Portal</h5>\
						<a href=\"404.html\">Undergraduate Email</a><br\>\
						<a href=\"404.html\">Undergraduate Finances</a><br\>\
						<a href=\"404.html\">Undergraduate Mentorship</a><br\>\
						<a href=\"404.html\">Undergraduate Classes</a>";	
}