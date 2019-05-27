import React from "react";
import TrucksMap from "../Components/TrucksMap"

export default class TruckMapContainer extends React.Component {

	render() {
		return (
			<TrucksMap
				trucks={this.props.trucks}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAzJ19_bp7AKuQZ9wkX6vBrSxL4P03HdG8&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}