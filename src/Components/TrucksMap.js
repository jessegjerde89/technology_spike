import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import TruckMarker from './TruckMarker'
import GoogleMapLoader from "react-google-maps-loader"


const TrucksMap = withScriptjs(withGoogleMap((props) =>{

   
  return (
      <GoogleMap
    //   googleMaps={googleMaps}
      
      defaultZoom={12}
      defaultCenter={{ lat: props.currentLocation.lat, 
                        lng: props.currentLocation.lng }}
    >
      {props.isMarkerShown &&
       <Marker 
      position={{ lat: props.currentLocation.lat, 
                    lng: props.currentLocation.lng }} 
      onClick={props.onMarkerClick} />}
      <Marker
      position={{ lat: 45, lng: -93}}
      onClick={props.onMarkerClick}
      />
     
        {/* {markers} */}
      </GoogleMap>
    );
  }
))

export default TrucksMap;
