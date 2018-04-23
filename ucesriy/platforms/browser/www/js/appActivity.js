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
	  if (marker) { // check
        mymap.removeLayer(marker); // remove
    }
	marker = new L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap);
	marker
	mymap.panTo(new L.LatLng(position.coords.latitude, position.coords.longitude), 18)
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
//add location to html
	document.getElementById("latitude").value = latitude ;
	document.getElementById("longitude").value = longitude;
}

//add dragger for user to choose location on the map
//adapt the code from https://stackoverflow.com/questions/27271994/leaflet-draggable-marker-and-coordinates-display-in-a-field-form
mymap.on('click', function (e) {
    if (marker) { // check
        mymap.removeLayer(marker); // remove
    }
    marker = new L.Marker(e.latlng, { draggable: true }).addTo(mymap);	// set
	var latitude = marker.getLatLng().lat;
	var longitude = marker.getLatLng().lng;
	//add location to html
	document.getElementById("latitude").value = latitude ;
	document.getElementById("longitude").value = longitude;
});


//clear map
function clearMap(){
 if (marker) { // check
        mymap.removeLayer(marker); // remove
    }
	var latitude = marker.getLatLng().lat;
	var longitude = marker.getLatLng().lng;
	//delete location from form
	document.getElementById("latitude").value = null ;
	document.getElementById("longitude").value = null;
}