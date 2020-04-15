// //this function looks for the cookie to see if the user has been to this post-form success page before
// function repeatCheck(){

//     var ca = document.cookie.split(';');

//     for (var i = 0; i < ca.length; i++) {
//       if((ca[i].trim())== successCookie){
      
//       //means they have a repeater cookie
//       subCookie = true;
//       alert("Have we seen you here before?");
      
//       }
   
//     }   

//     if (subCookie == false){
//       //means they don't have any repeater cookies 
//       checkGeo();
//     }
//     else{
//       //means they have a repeater cookie
//       window.location.replace("https://www.tiltor.com");
//     }

// }

// //this function checks the user's location against the area of the event, definded by the coord variables
//  function checkGeo()
//   {
//   if (navigator.geolocation)
//     {
//       alert("We need to confirm your location before you can sign up.");

//     navigator.geolocation.getCurrentPosition(showPosition);
//     }
//   else{
//     alert ("Geolocation is not supported by this browser.");
//   }
//   }
// function showPosition(position)
//   {     
//     if (
//       (position.coords.latitude > LowerLat && position.coords.latitude < UpperLat) && (position.coords.longitude < WestLong && position.coords.longitude > EastLong)
//       ){
//     //means they are in the correct location
//     //they get a cookie indicating they have the right to participate in the promotion
//     //they are redirected to the latest form page (where the cookie will searched for)    
//     document.cookie = yum;
// 	  window.location.replace(SlugUrl);
// }
// else{
//     //means they aren't in the right location for this promotion
//     alert("Sorry, you are not in the designated area for this tilt.");
//     window.location.replace("https://www.tiltor.com");
// }
// };

// repeatCheck();