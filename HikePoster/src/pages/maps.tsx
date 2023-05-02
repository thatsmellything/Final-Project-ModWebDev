




var api_key = "AIzaSyAc9zFpuwRk68scBCEq2Y1B1yumE19sgGE";

// var lat = 40.714224;
// var lng = -73.961452;



async function Maps(latitude: number, longitude: number) {

    var request = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=" + api_key;
    var apiTracking = await fetch(request)
    var apiTrackingJson = await apiTracking.json()
    var address = apiTrackingJson.results[0].formatted_address
    console.log(address)
    open("https://www.google.com/maps/search/?api=1&query=" + latitude + "%2C" + longitude)
    //open("https://maps.google.com/?q="+ latitude + "," + longitude)

}

export default Maps;
