import React, { Component } from 'react';
import './App.css';
import { GoogleMap, withGoogleMap } from 'react-google-maps'
import Navbar from './Navbar'
import LeftPanel from './LeftPanel'
import MyMarker from './Marker'

class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      markers: [
        { id: 1, position: { lat: 36.544206, lng: 26.355205 }, content: "Castle", onToggleOpen: this.onToggleOpen },
        { id: 2, position: { lat: 36.542438, lng: 26.343119 }, content: "Livadi Beach" },
        { id: 3, position: { lat: 36.54743, lng: 26.353549 }, content: "Kolokitha Cafe" },
        { id: 4, position: { lat: 36.548651, lng: 26.352387 }, content:"Museum" },
        { id: 5, position: { lat: 36.560076, lng: 26.353936 }, content: "Camping Site" },
        { id: 6, position: { lat: 36.543823, lng: 26.353998 }, content: "Infant Cemetery" },
        { id: 7, position: { lat: 36.551026, lng: 26.328218 }, content: "Water Dam" },
        { id: 8, position: { lat: 36.545627, lng: 26.351948 }, content: "Windmills"},
        { id: 9, position: { lat: 36.53065, lng: 26.46749 }, content: "Kounoupes Beach"},
        { id: 10, position: { lat: 36.576634, lng: 26.384324 }, content: "Maltezana Village" }
      ]
    }
  }
  render() {
    const google = window.google
    const GoogleMapIsland = withGoogleMap(props => (
       <GoogleMap
          defaultCenter = {{ lat: 36.547583, lng: 26.345321 }}
          defaultZoom={ 12.5 }
      >
        {this.state.markers.map((marker) => {
          return(
          <MyMarker
            key={marker.id}
            position={marker.position}
            content={marker.content}
            animation={google.maps.Animation.BOUNCE}
          />
        )})}
    </GoogleMap>
      ))
    return (
      <div className="App">
          <Navbar/>
        <div className="main-container">
          <LeftPanel
          />
          <div className='map-container'>
          <GoogleMapIsland
          loadingElement={<div style={{height: '100%'}}/>}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAz0bCTLihf_bkR1D6Pixn2qEAz25A9qzY&v=3.exp&libraries=geometry,drawing,place"
          containerElement={ <div style={{ height: '100%', width: '100%'}}/>}
          mapElement={<div style={{height: '100%'}}/>}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
