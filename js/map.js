function initMap(){
  let options = {
    zoom:8,
    center:{lat:42.3601,lng:-71.0589} 
  }
  let map = new 
  google.maps.Map(document.getElementById("map"), options);

  //marker
  let marker = new google.maps.Map({
    position:{lat:42.4668,lng:-70.9495},
    map:map,
    // icon:'anything you want'
  });

  let infoWindow = new google.maps.infoWindow({
    content:'<h1>Here is here</h1>'
  });

  marker.addEventListenter('click', function(){
    infoWindow.open(map, marker);
  });
}