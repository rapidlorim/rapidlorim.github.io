//this is a cookie that the Check Location page will look for
//it's purpose is to catch people who attempt to sign up multiple times
var successCookie = "454=Greg";
//this variable will be used as a cookie, to make sure that people don't repeat signing up over and over
//make sure this is the same on both pages (success page and check location)
// var successCookie = "454=Greg";

//this variable will be used as a cookie, to make sure that people have had their location checked before getting to form page
//make sure this is the same on both pages (here and success page)
var yum = "512=woak";

//this variable represents the signup limit total for this promotion
//it is used with the JSON response to cut of additional signups 
var tallyTotal = 15;

//these are the coordinates of the event where the promotion will take place
var UpperLat = 50;
var LowerLat = 30;
var WestLong = -100;
var EastLong = -110;

//this is the variable/cookie from the Success Page
//the function that checks for this doesn't want to find it
//make sure this is the same on both pages (here and Success Page)
var successCookie = "454=Greg";
  
//this variable will be used as a cookie, to make sure that people don't repeat signing up over and over 
//it is the one the Form Page looks for 
var yum = "512=woak";

//this just sets a variable to false so that later it might become true, or false 
var subCookie = false;
  
//this is where the form actually resides on the host
//this changes each time so that people can't just bookmark it and then use a VPN to access the promotion from wherever  
var SlugUrl = "https://www.tiltor.com/tiltpeppers4u";