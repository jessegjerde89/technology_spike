import React from "react";
import TrucksMap from "../Components/TrucksMap"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'; 

export default class TruckMapContainer extends React.Component {


	
	

	state = {
		currentLatLng: {
			lat: 44.977753,
			lng: -93.265015, 
		}, 
		isMarkerShown: false
	}
	
	componentWillUpdate(){
		this.getGeoLocation()
	  }
	
	  componentDidMount() {
		this.delayedShowMarker()
	  }
	
	  delayedShowMarker = () => {
		setTimeout(() => {
		  this.getGeoLocation()
		  this.setState({ isMarkerShown: true })
		}, 5000)
	  }
	
	  handleMarkerClick = () => {
		this.setState({ isMarkerShown: false })
		this.delayedShowMarker()
	  }
	
	  getGeoLocation = () => {
		if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(
			position => {
			  this.setState(prevState => ({
				  currentLatLng: {
					  ...prevState.currentLatLng, 
				lat: position.coords.latitude,
				lng: position.coords.longitude
				  }
			  })
		  )
		} 
	)
	  }
	}

	  render() {

		const API_KEY = process.env.REACT_APP_GOOGLE_KEY;
		
		return (
			<TrucksMap
				trucks={this.props.trucks}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
				isMarkerShown={this.state.isMarkerShown}
        		onMarkerClick={this.handleMarkerClick}
        		currentLocation={this.state.currentLatLng}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}