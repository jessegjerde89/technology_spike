import React from "react";
import { Marker } from "react-google-maps";
import Foodtruck from '../images/food-truck.png'
  
  export default class TruckMarker extends React.Component {
  
    render(){
      return(
          <Marker
            position={this.props.location}
            icon={Foodtruck}
          >
          </Marker>
      );
    }
  }
  


