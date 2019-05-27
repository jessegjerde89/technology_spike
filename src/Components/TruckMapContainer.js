import React from "react";
import TrucksMap from "../Components/TrucksMap"

export default class TruckMapContainer extends React.Component {


	
	render() {

		const API_KEY = process.env.local.REACT_APP_GOOGLE_KEY;
		return (
			<TrucksMap
				trucks={this.props.trucks}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}