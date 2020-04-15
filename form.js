//this part checks the total tally on the google sheet
    //if it is under the threshold, goes to readCookie
    //if it is over the threshold, redirects to full-tilt page
$.getJSON(gDoc, function(data) {
  
  //this is the dot notation to get to the relevent value in the JSON response from google sheets
  //this might change each time, not sure
  var total = data.feed.entry[0].content.$t;

//this compares the current total signups against the upper limit
//if it's full, the user gets redirected
  if (total > tallyTotal){
    //alert ("greater than 10");                  
    window.location.replace("https://www.tiltor.com/full-tilt");
  }
  else{  
  //console.log(total);    
  readCookie();       
  }
});

//this function checks to see if the success page cookie is already present
//if so, all set and the form is displayed
//if not, the user is redirected to the check-location page
function readCookie(){

var ca = document.cookie.split(';');
var cookieExists = false;

//this checks for the success page cookie
//finding it means a repeat attempt
//this redirects them to homepage
for (var i = 0; i < ca.length; i++) {
    if((ca[i].trim())== successCookie){
      
        alert("Have you already signed up before?");
        window.location.replace("https://www.tiltor.com");

    }
}
  
//this checks for the check location page cookie
//finding it means they have been through the check locaiton page and are in the right location
//not finding it suggests they tried to skip the location check
//they are redirected to the check location page 
for (var i = 0; i < ca.length; i++) {
    if((ca[i].trim())== yum){
      
        //alert("You're in the right location!");
        cookieExists = true;

    }
}
  
    if(cookieExists == false){
              
        alert("We have to check your location");
        window.location.replace("https://www.tiltor.com/check-location");
  
    }
   
}