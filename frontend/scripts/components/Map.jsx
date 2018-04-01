import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Map extends React.Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: -25, lng: 131 }}
        >
      </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);
