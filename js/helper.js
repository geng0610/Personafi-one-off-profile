/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/

var HTMLheader = '<div id="header" class="row"></div>';

var HTMLheaderPic = '<div id="header-pic" class="col-md-3"><img id="profile-pic" src="%profile-pic%" alt="profile picture" class="row"></div>';
var HTMLheaderDetail = '<div id="header-details" class="col-md-9"></div>';

var HTMLheaderName = '<div class ="row"><h1 id="name" class="col-md-9 header-name">%name%</h1><div id="buttons" class="col-md-3"></div></div>';
var HTMLheaderDescription = '<div class ="row"><h2 id="summary" class="col-md-9 header-description">%header-description%</h2></div>';
var HTMLheaderEmail = '<div id="personal-e-mail" class="row personal-contact"></div>';
var HTMLheaderWebsite = '<div id="personal-website" class="row personal-contact"></div>';

var HTMLheaderEmailText = '<div id="e-mail-description" class="col-md-8 contact-description"><a href = "mailto:%personal-e-mail%"><img id="e-mail-icon" src="images/mail-icon-256px.png" class="contact-icon" ></a><span class="contact-text">%personal-e-mail%</span></div>';
var HTMLheaderEmailEnd = '<div id="more-e-mail-description" class="col-md-4 more-contact-description"><button id="more-email" class="contact-add-button" onclick="addEmail()">other e-mails</button></div>';
var HTMLheaderEmailEndLess = '<div id="less-e-mail-description" class="col-md-4 more-contact-description"><button id="less-email" class="contact-subtract-button" onclick="removeEmail()">hide other e-mails</button></div>';
var HTMLheaderWebsiteText = '<div id="website-description" class="col-md-8 contact-description"><a href = "%weblink%"><img id="website-icon" src="images/link-icon-256px.png" class="contact-icon" ></a><span class="contact-text"><a href = "%weblink%">%weblink%</a></span></div>';
var HTMLheaderWebsiteEnd = '<div id="more-website-description" class="col-md-4 more-contact-description" ><button id="more-website" class="contact-add-button" onclick="addWebsite()">other websites</button></div>';
var HTMLheaderWebsiteEndLess = '<div id="less-website-description" class="col-md-4 more-contact-description" ><button id="less-website" class="contact-subtract-button" onclick="removeWebsite()">hide other websites</button></div>';

var HTMLsocialIcons = '<div id="social-icons" class="row"></div><hr>';
var HTMLsocialIcon = '<a href = "%link%"><img id="%social%-icon" src="images/%social%-icon-256px.png" class="social-icon" ></a>';

var HTMLworkExperiences = '<div id="workExperience" class="row section"><div class="col-md-3 section-title"><h3>Work History:</h3></div><div id = "work-experiences" class="col-md-9 section-description"></div></div><hr>';

var HTMLworkExperienceStart = '<div class = "entry"><div class="row"><div class="col-md-9 entry-description">';
var HTMLworkExperienceLink = '<a href = "%link%"><img src="%image-source%" alt="work-logo" class="experience-icon" ></a>';
var HTMLworkExperienceSource = '<a href=%source% class = "entry-description-title">';
var HTMLworkExperiencePosition = '%position%';
var HTMLworkExperienceEmployer = ', %employer%</a></div>';
var HTMLworkExperienceDate = '<div class="col-md-2 work-date"><span class = "entry-description-date">%date%</span></div></div>';

var HTMLeducationExperiences = '<div id="educationExperience" class="row section"><div class="col-md-3 section-title"><h3>Education:</h3></div><div id = "education-experiences" class="col-md-9 section-description"></div></div><hr>';

var HTMLeducationExperienceStart = '<div class = "entry"><div class="row"><div class="col-md-9 entry-description">';
var HTMLeducationExperienceLink = '<a href = "%link%"><img src="%image-source%" alt="work-logo" class="experience-icon" ></a>';
var HTMLeducationExperienceSource = '<a href=%source% class = "entry-description-title">';
var HTMLeducationExperienceDegree = '%degree%';
var HTMLeducationExperienceMajor = ', %major%';
var HTMLeducationExperienceSchool = ', %school%</a></div>';
var HTMLeducationExperienceDate = '<div class="col-md-2 work-date"><span class = "entry-description-date">%date%</span></div></div></div>';

var HTMLrelevantTopics = '<div id="relevantTopics" class="row section"><div class="col-md-3 section-title"><h3>Relevant Topics:</h3></div><div class="col-md-9 section-description"><div class = "entry"><div id = "topicList" class="row"></div></div></div></div><hr>';
var HTMLrelevantTopic ='<button class="topic"> %topic% </button>';

var HTMLfromTheWebSection='<div id="fromTheWeb" class="row section"><div class="col-md-3 section-title"><h3>From the Web:</h3></div><div id="fromTheWebSection" class="col-md-9 section-description"></div></div><hr>';

var HTMLfromTheWebEntry='<div id="fromTheWebEntry" class = "web-entry" style="border-top: 3px solid %color%"></div>';
var HTMLfromTheWebTitle='<div class="row"><div class="col-md-12"><a href="%web-url%" class="web-site-title">%link-title%</a></div></div>';
var HTMLfromTheWebLink='<div class="row"><div class="col-md-12 web-site-link">%web-url%</div></div>';
var HTMLfromTheWebSnippet='<div class="row"><div class="col-md-12 web-site-snippet">%web-site-snippet%</div></div>';

/*
Add and remove extra e-mail from display
*/
function addEmail(){
  for (i=1; i<profile.e_mails.length; i++){
    $("#more-e-mail-description").before(HTMLheaderEmailText.replace(/%personal-e-mail%/g,profile.e_mails[i]));
  }
  $("#more-e-mail-description").before(HTMLheaderEmailEndLess);
  var more_email_button = document.getElementById("more-e-mail-description");
  more_email_button.parentNode.removeChild(more_email_button);
};

function removeEmail() {
  //$('#resume-main').prepend('<p>testestests</p>');
  var less_email_button = document.getElementById("personal-e-mail");
  less_email_button.parentNode.removeChild(less_email_button);
  $("#personal-website").before(HTMLheaderEmail);
  $("#personal-e-mail").append(HTMLheaderEmailText.replace(/%personal-e-mail%/g,profile.e_mails[0]));
  $("#personal-e-mail").append(HTMLheaderEmailEnd);
};
/*
Add and remove extra e-mail from display
*/
function addWebsite(){
  for (i=1; i<profile.e_mails.length; i++){
    $("#more-website-description").before(HTMLheaderWebsiteText.replace(/%weblink%/g,profile.personal_website[i]));
  }
  $("#more-website-description").before(HTMLheaderWebsiteEndLess);
  var more_email_button = document.getElementById("more-website-description");
  more_email_button.parentNode.removeChild(more_email_button);
};

function removeWebsite() {
  var less_email_button = document.getElementById("personal-website");
  less_email_button.parentNode.removeChild(less_email_button);
  $("#personal-e-mail").after(HTMLheaderWebsite);
  $("#personal-website").append(HTMLheaderWebsiteText.replace(/%weblink%/g,profile.personal_website[0]));
  $("#personal-website").append(HTMLheaderWebsiteEnd);
};