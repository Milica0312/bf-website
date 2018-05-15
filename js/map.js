function initialize() {

//replace this variable with the json you generate in the google maps api wizard tool
//Styles Start
 var styles = [
{
"featureType": "administrative.neighborhood",
"elementType": "labels.text",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "landscape.man_made",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#2f3f25"
  }
]
},
{
"featureType": "landscape.man_made",
"elementType": "labels.text",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "landscape.natural",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#2f3f25"
  }
]
},
{
"featureType": "landscape.natural",
"elementType": "labels.text",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "landscape.natural.landcover",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#2f3f25"
  }
]
},
{
"featureType": "landscape.natural.terrain",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#2f3f25"
  }
]
},
{
"featureType": "poi.attraction",
"elementType": "labels.text",
"stylers": [
  {
    "color": "#2f3f25"
  },
  {
    "visibility": "off"
  }
]
},
{
"featureType": "poi.business",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#2f3f25"
  }
]
},
{
"featureType": "poi.business",
"elementType": "labels.text",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "poi.park",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#2f3f25"
  }
]
},
{
"featureType": "poi.park",
"elementType": "labels.text",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "poi.place_of_worship",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#2f3f25"
  }
]
},
{
"featureType": "poi.place_of_worship",
"elementType": "labels.text",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "road.arterial",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#fca1a0"
  }
]
},
{
"featureType": "road.highway",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#fca1a0"
  }
]
},
{
"featureType": "road.highway",
"elementType": "labels.text",
"stylers": [
  {
    "color": "#fca1a0"
  },
  {
    "visibility": "off"
  }
]
},
{
"featureType": "road.highway.controlled_access",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#fca1a0"
  }
]
},
{
"featureType": "road.local",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#fca1a0"
  }
]
},
{
"featureType": "water",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#c4e5ea"
  }
]
}
];
//Styles End

   //Create a styled map using the above styles
   var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

   var mapProp = {
      center:new google.maps.LatLng(44.839943, 20.423997),//set the centre of the map. In my case it is the same as the position of the map pin.
      zoom:13,
      mapTypeId:google.maps.MapTypeId.ROADMAP
   };


   var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

   //Set the map to use the styled map
   map.mapTypes.set('map_style', styledMap);
   map.setMapTypeId('map_style');

   //Create a marker pin to add to the map
   var marker;
   marker = new google.maps.Marker({
      position: new google.maps.LatLng(44.839943, 20.423997),//set the position of the pin
      map: map,
      title: "Lido",
      icon: "imgs/maps-and-flags.png", //if you comment this out or delete it you will get the default pin icon.
      animation:google.maps.Animation.DROP
   });
}
google.maps.event.addDomListener(window, 'load', initialize);
