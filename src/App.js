import React, {Component} from 'react';
// import { MapContainer } from './Components/MapContainer';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'
import MapContainer from './Components/MapContainer';
import TrucksMap from './Components/TrucksMap'; 
import TruckMapContainer from './Components/TruckMapContainer'



// const WrappedMap = withScriptjs(withGoogleMap(Map)); 

class App extends Component {

  
render() {


  return (
    <>
    <TruckMapContainer />
    <MapContainer />

    {/* <div style={{ width: '100vw', height: '75vh'}}>
    <WrappedMap 
      googleMapURL=
    {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAzJ19_bp7AKuQZ9wkX6vBrSxL4P03HdG8`}
    loadingElement={<div style={{ height: "100%"}} />}
    containerElement={<div style={{ height: "100%"}} />}
    mapElement={<div style={{ height: "100%"}} />}
  />
  </div> */}
    </>
  )
}

}
export default App; 