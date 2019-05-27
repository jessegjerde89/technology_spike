import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import TruckMarker from './TruckMarker'

const TrucksMap = withScriptjs(withGoogleMap((props) =>{

//   const markers = props.trucks.map( trucks => <TruckMarker
//                     key={trucks.uid}
//                     trucks={trucks}
//                     location={{lat: trucks.closestTrucks.lat, lng: trucks.closestTrucks.lon}}
//                   />);
                  
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  42.3601, lng: -71.0589 } }
        >
        {/* {markers} */}
      </GoogleMap>
    );
  }
))

export default TrucksMap;