import React, {Component} from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GoogleMapComponent = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    zoom={props.zoom}
    center={props.center}
  >
   {props.items.map(item => (
      <Marker
        position={{ lat: item.latitude, lng: item.longitude }}
        key={item.id}
        title='Click to zoom'
        onClick={props.onMarkerClick}
        icon='https://mp-seoul-image-production-s3.mangoplate.com/web/resources/ikpswdksy8bnweeq.png'
      />
    ))}
  </GoogleMap>
));

const INITIAL_SETTINGS = {
  position : {
    lat: 37.5, 
    lng: 127.0 
  }
};

export default class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zoom: 10,
      center: INITIAL_SETTINGS.position,
    };

    this.handleMapMounted = this.handleMapMounted.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  handleMapMounted(map) {
    this._map = map;
  }

  handleMarkerClick() {

  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <GoogleMapComponent
        containerElement={
          <div className={this.props.containerClassName} />
        }
        mapElement={
          <div className={this.props.mapClassName} />
        }
        items={this.props.items}

        zoom={window.parseInt(this.props.zoom, 10)}
        center={this.state.center}
        onMapMounted={this.handleMapMounted}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}