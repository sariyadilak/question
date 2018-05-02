// load the map
var mymap = L.map('mapid').setView([51.505, -0.09], 13);
		// load the tiles
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {maxZoom: 18,attribution: 'Map data &copy; <ahref="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' +'Imagery © <a href="http://mapbox.com">Mapbox</a>',id: 'mapbox.streets'}).addTo(mymap);



//track user location on the map
function trackLocation() {
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(showPosition);
} else {
	document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser.";
	}
}

var marker;
function showPosition(position) {
	  if (marker) { // check if there is marker on the map, or not
        mymap.removeLayer(marker); // remove the marker
    }
	marker = new L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap); //add user's location marker
	marker
	mymap.panTo(new L.LatLng(position.coords.latitude, position.coords.longitude), 18) //pan the map to user's location marker
	//define latitude and longitude variable
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	//add value to html
	document.getElementById("latitude").value = latitude ;
	document.getElementById("longitude").value = longitude;
}

//add dragger for user to choose location on the map
mymap.on('click', function (e) {
    if (marker) { // check
        mymap.removeLayer(marker); // remove the marker from the map
    }
    marker = new L.Marker(e.latlng, { draggable: true }).addTo(mymap);	// add the draggable marker, when clicking on the map
	//define latitude and longitude variable
	var latitude = marker.getLatLng().lat;
	var longitude = marker.getLatLng().lng;
	//add value to html
	document.getElementById("latitude").value = latitude ;
	document.getElementById("longitude").value = longitude;
});


//clear map
function clearMap(){
 if (marker) { // check
        mymap.removeLayer(marker); // remove marker on the layer
    }
	var latitude = marker.getLatLng().lat;
	var longitude = marker.getLatLng().lng;
	//delete value from the form
	document.getElementById("latitude").value = null ; 
	document.getElementById("longitude").value = null;
}