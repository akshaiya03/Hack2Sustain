import  React,{useEffect, useRef, useState} from 'react';
import ReactMapGL ,{FullscreenControl,GeolocateControl,NavigationControl}from 'react-map-gl';
import NavBar from './NavBar';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
 

 function App() {
  const [viewState, setViewState] = useState({
    longitude:80.1963662,
    latitude: 13.2106779,
    zoom: 10
  });
  const mapRef = useRef();

 
  const [start,setstart]=useState([80.1963662,13.1106779]);
  const [end,setEnd]=useState([80.1963662,13.7106779]);
  const[coords,setCoords]=useState([])

  
  useEffect(()=>{
    getRoute()
    GeolocateControl.current?.trigger()
  },[end, start])
  const getRoute=async()=>{
    const response= await fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`);
    const data= await response.json();
    const coords=data.routes[0].geometry.coordinates
    console.log(coords)
    setCoords(coords)
  }
  useEffect(() => {
  if (mapRef.current) {
    const map = mapRef.current.getMap();

    if (map.getSource('directions')) {
      map.removeSource('directions');
    }

    const directions = new MapboxDirections({
      accessToken:process.env.REACT_APP_MAPBOX_TOKEN,
      unit: 'metric',
      profile: 'mapbox/driving',
      controls: { instructions: true }
    });
    directions.on('route', (event) => {
      const routeData = event.route; // Access the route data
      const data = routeData[0].legs[0].steps;
      const instructions = data.map((step) => step?.maneuver?.instruction);
      console.log(instructions);
      const value = new SpeechSynthesisUtterance(instructions);
      value.rate = 0.5;
      window.speechSynthesis.speak(value)
    });

    map.addControl(directions, 'top-left' );

  }
}, [mapRef.current]);

 
 
  const handleclick=(e)=>{
    const newEnd=e.lngLat
    const endPoint =[newEnd.lng, newEnd.lat]
    console.log(endPoint)
    setEnd(endPoint)

  }
  
  return (
  <div>
  <ReactMapGL
    {...viewState}
    onClick={handleclick}
    ref={mapRef}
    mapStyle="mapbox://styles/akshaiya03/clvb18xap00vn01pk9grk6oej"
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    style={{width:"100vw",height:"100vh"}}
  >
    
  <GeolocateControl />
  <FullscreenControl/>  
  <NavigationControl/>
  
  </ReactMapGL>
  <NavBar/>
  </div>
  );
  
}
export default App;
