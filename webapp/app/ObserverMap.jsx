import React from 'react';
import Occupant from './mapObjects/Occupant.jsx';
import GoogleMap from 'google-map-react';
import mapOptionsObject from './mapOptions.js';

const API_KEY = 'AIzaSyC2CY6tmBR88gS6cw_v6hf7JM2CSKz6ZgA';

export default class ObserverMap extends React.Component {
  constructor(props) {
    super(props);
  }
  renderObjects(object, index) {
    if (object.type === 'Human Player') {
      console.log(object);
    }
    return (
      <Occupant key={index} lat={object.latitude} lng={object.longitude} type={object.type} />
    );
  }
  render() {
    const mapOptions = mapOptionsObject;

    return (
       <GoogleMap
         bootstrapURLKeys={{
           key: API_KEY,
           language: 'nl'
         }}
        center={this.props.location}
        defaultZoom={this.props.zoom}
        options={mapOptions}>
        {this.props.objects.map(this.renderObjects)}

      </GoogleMap>
    );
  }
}

ObserverMap.defaultProps = {
  objects: null,
  location: {lat: 52.372339, lng: 5.635107},
  zoom: 17,
};
