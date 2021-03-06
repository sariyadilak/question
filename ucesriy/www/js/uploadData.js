/*
*    Title: week6formcode
*    Author:Ellul,C
*    Date: 20/04/2018
*    Availability: https://github.com/claireellul/cegeg077-week6formcode/blob/master/ucfscde/www/js/uploadData.js
*
*/

//get value that fill user fills in html
function startDataUpload() {
	alert ("start data upload");

	var question = document.getElementById("question").value;
	var choice_1 = document.getElementById("choice_1").value;
	var choice_2 = document.getElementById("choice_2").value;
	var choice_3 = document.getElementById("choice_3").value;
	var choice_4 = document.getElementById("choice_4").value;
	
	

	alert(question + " "+ choice_1 + " "+choice_2+ " "+choice_3+ " "+choice_4);
	
var postString = "question="+question +"&choice_1="+choice_1+"&choice_2="+choice_2+"&choice_3="+choice_3+"&choice_4="+choice_4;

// now get the radio button values
	if (document.getElementById("1").checked) {
 		 postString=postString+"&answer="+1;
	}
	if (document.getElementById("2").checked) {
 		 postString=postString+"&answer="+2;
	}
	if (document.getElementById("3").checked) {
 		 postString=postString+"&answer="+3;
	}
	if (document.getElementById("4").checked) {
 		 postString=postString+"&answer="+4;
	}

// now get the geometry values
	var latitude = document.getElementById("latitude").value;
	var longitude = document.getElementById("longitude").value;
	postString = postString + "&latitude=" + latitude + "&longitude=" +longitude;
	
processData(postString);
}

var client;

//post the string to http server
function processData(postString) {
   client = new XMLHttpRequest();
   client.open('POST','http://developer.cege.ucl.ac.uk:30281/uploadData',true);
   client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   client.onreadystatechange = dataUploaded;  
   client.send(postString);
}
// create the code to wait for the response from the data server, and process the response once it is received
function dataUploaded() {
  // this function listens out for the server to say that the data is ready - i.e. has state 4
  if (client.readyState == 4) {
    // change the DIV to show the response
    document.getElementById("dataUploadResult").innerHTML = client.responseText;
    }
}

//reset data function
function resetData(){
	document.getElementById("question").value = null;
	document.getElementById("choice_1").value = null;
	document.getElementById("choice_2").value = null;
	document.getElementById("choice_3").value = null;
	document.getElementById("choice_4").value = null;
	document.getElementById("1").checked = false;
	document.getElementById("2").checked = false;
	document.getElementById("3").checked = false;
	document.getElementById("4").checked = false;
	document.getElementById("latitude").value = null;
	document.getElementById("longitude").value = null;
}
