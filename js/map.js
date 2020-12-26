function initMap() {
  let options = {
    zoom: 8,
    center: { lat: 42.3601, lng: -71.0589 }
  }
  let map = new
    google.maps.Map(document.getElementById("map"), options);

  //   //marker
  //   let marker = new google.maps.Map({
  //     position:{lat:42.4668,lng:-70.9495},
  //     map:map,
  //     // icon:'anything you want'
  //   });

  //   let infoWindow = new google.maps.infoWindow({
  //     content:'<h1>Here is here</h1>'
  //   });

  //   marker.addEventListenter('click', function(){
  //     infoWindow.open(map, marker);
  //   });


  addMarker({
    coords: { lat: 42.4668, lng: -70.9495 },
    iconImage: 'https://developpers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    content: '<h1>Here!</h1>'
  });
  addMarker({ coords: { lat: 42.8584, lng: -70.9300 } });

  function addMarker(props) {
    let marker = new google.maps.Map({
      position: props.coords,
      map: map,
      icon: props / iconImage
    });

    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }

    if (props.content) {
      let infoWindow = new google.maps.infoWindow({
        content:props.content
      });

      marker.addEventListenter('click', function () {
        infoWindow.open(map, marker);
      });
    }

  }
}
