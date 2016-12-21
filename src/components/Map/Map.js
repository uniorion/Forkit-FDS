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
        title={item.name}
        onClick={props.onMarkerClick}
        icon='https://mp-seoul-image-production-s3.mangoplate.com/web/resources/ikpswdksy8bnweeq.png'
      />
    ))}
  </GoogleMap>
));

const INITIAL_SETTINGS = {
  position : {
    lat: 37.51, 
    lng: 127.02
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

  componentDidUpdate() {
    let bounds = new window.google.maps.LatLngBounds();

    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
    }

    for (let i = 0; i < this.props.items.length; i++) {
      bounds.extend(new window.google.maps.LatLng({lat: this.props.items[i].latitude, lng: this.props.items[i].longitude}));
    }

    // 마커가 하나여서 zoom이 너무 클 경우 bounds 임의 확장
    if (   (this.props.items.length === 1) 
        && bounds.getNorthEast().equals(bounds.getSouthWest())) {
      let extendPoint1 = new window.google.maps.LatLng(bounds.getNorthEast().lat() + 0.01, bounds.getNorthEast().lng() + 0.01);
      let extendPoint2 = new window.google.maps.LatLng(bounds.getNorthEast().lat() - 0.01, bounds.getNorthEast().lng() - 0.01);
      bounds.extend(extendPoint1);
      bounds.extend(extendPoint2);
    }

    this._timeoutId = setTimeout(() => {
      this._map.fitBounds(bounds);
      this._timeoutId = null;
    }, 100);
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