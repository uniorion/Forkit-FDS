import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as MapActions from '../../actions/map';

let markers = [];
let map = null;;

// Set center: LatLngBounds object
let bounds = null;

class Map extends Component
{
  componentDidMount(){
    this.loadGoogleMapApi();
  }
  
  componentWillReceiveProps(nextProps){
    if ( nextProps.mapApi ) { // true : api 스크립트 로드하여 body에 append 된 상태
      this.initMap();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if ( this.props.items.length > 0 ) {
      this.attachMarkers(this.props.items);
    }
  }

  // 구글 맵 api 스크립트 로드
  loadGoogleMapApi(){
    this.props.actions.fetchGoogleMapApiIfNeeded();
  }

  initMap() {
    bounds = new google.maps.LatLngBounds();
    map = new google.maps.Map(document.getElementById('google-map'), {
      zoom: 8,
      center: {lat: 37.523307, lng: 127.03616}
    });
  }

  attachMarkers(items) {
    for (let i = 0; i < items.length; i++) {
      this.addMarkerWithTimeout({lat: items[i].latitude, lng: items[i].longitude}, i * 200);
      bounds.extend(new google.maps.LatLng({lat: items[i].latitude, lng: items[i].longitude}));
    }
    //  Fit these bounds to the map
    map.fitBounds(bounds);

    if ( items.length === 1 ) { 
      map.setZoom(16);
    }
  }

  addMarkerWithTimeout(position) {
    let marker = new google.maps.Marker({
      position: position,
      map: map,

      // icon: '../images/icon-placeholder.svg'
      icon: 'https://mp-seoul-image-production-s3.mangoplate.com/web/resources/ikpswdksy8bnweeq.png'
    });
    markers.push(marker);
  }

  render(){
    return (
      <article id="google-map" className={this.props.styleClassName}>
      </article>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.googleMap.isFetching,
  mapApi: state.googleMap.mapApi
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    fetchGoogleMapApiIfNeeded: MapActions.fetchGoogleMapApiIfNeeded,
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);