// @ts-nocheck

/**
 * From: https://github.com/rajeshdh/react-leaflet-with-nextjs
 */

import React, { Component, createRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

// class SearchBox extends MapControl {
//   constructor(props) {
//     super(props);
//     props.leaflet.map.on('geosearch/showlocation', (e) =>
//       props.updateMarker(e)
//     );
//   }
//
//   createLeafletElement() {
//     const searchEl = GeoSearchControl({
//       provider: new OpenStreetMapProvider(),
//       style: 'bar',
//       showMarker: true,
//       showPopup: false,
//       autoClose: true,
//       retainZoomLevel: false,
//       animateZoom: true,
//       keepResult: false,
//       searchLabel: 'search',
//     });
//     return searchEl;
//   }
// }

export default class MyMap extends Component<{ mapHeight: number }> {
  state = {
    center: {
      lat: 31.698956,
      lng: 76.732407,
    },
    marker: {
      lat: 31.698956,
      lng: 76.732407,
    },
    zoom: 13,
    draggable: true,
  };

  refmarker = createRef(this.state.marker);

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable });
  };

  updateMarker = (e) => {
    // const marker = e.marker;
    this.setState({
      marker: e.marker.getLatLng(),
    });
    console.log(e.marker.getLatLng());
  };

  updatePosition = () => {
    const marker = this.refmarker.current;
    if (marker != null) {
      this.setState({
        marker: marker.leafletElement.getLatLng(),
      });
    }
    console.log(marker.leafletElement.getLatLng());
  };

  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    const markerPosition = [this.state.marker.lat, this.state.marker.lng];

    return (
      <div className="map-root">
        <MapContainer
          center={position}
          zoom={this.state.zoom}
          style={{
            height: this.props.mapHeight,
            ...this.props.mapStyle,
          }}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            draggable={true}
            onDragend={this.updatePosition}
            position={markerPosition}
            animate={true}
            ref={this.refmarker}>
            <Popup minWidth={90}>
              <span onClick={this.toggleDraggable}>
                {this.state.draggable ? 'DRAG MARKER' : 'MARKER FIXED'}
              </span>
            </Popup>
          </Marker>
        </MapContainer>
        <style jsx>
          {`
            .map-root {
              height: 100%;
            }
          `}
        </style>
      </div>
    );
  }
}
