function startDataUpload() {
	alert ("start data upload");

	var question = document.getElementById("question").value;
	var choice_1 = document.getElementById("choice_1").value;
	var choice_2 = document.getElementById("choice_2").value;
	var choice_3 = document.getElementById("choice_3").value;
	var choice_4 = document.getElementById("choice_4").value;
	var answer = document.getElementById("answer").value;
	
	

	alert(question + " "+ choice_1 + " "+choice_2+ " "+choice_3+ " "+choice_4);
	
var postString = "question="+question +"&choice_1="+choice_1+"&choice_2="+choice_2+"&choice_3="+choice_3+"&choice_4="+choice_4;
processData(postString);
}

var client;

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
