import React from 'react'
import { GoogleMap, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import MyMarker from './Marker'
class MyMap extends React.Component {
  render() {
    const google = window.google
    const GoogleMapIsland = withGoogleMap(props => (
       <GoogleMap
          defaultCenter = {{ lat: 36.547583, lng: 26.345321 }}
          defaultZoom={ 12.5 }
      >
        <MyMarker position={{ lat: 36.544206, lng: 26.355205 }} content="Castle" animation={google.maps.Animation.BOUNCE}/>
        <MyMarker position={{ lat: 36.542438, lng: 26.343119 }} content="Livadi Beach" animation={google.maps.Animation.BOUNCE}/>
        <MyMarker position={{ lat: 36.54743, lng: 26.353549 }} content="Kolokitha Cafe" animation={google.maps.Animation.BOUNCE}/>
        <MyMarker position={{ lat: 36.548651, lng: 26.352387 }} content="Museum" animation={google.maps.Animation.BOUNCE}/>
        <MyMarker position={{ lat: 36.560076, lng: 26.353936 }} content="Camping Site" animation={google.maps.Animation.BOUNCE}/>
        <MyMarker position={{ lat: 36.543823, lng: 26.353998 }} content="Infant Cemetery" animation={google.maps.Animation.BOUNCE}/>
        <MyMarker position={{ lat: 36.551026, lng: 26.328218 }} content="Water Dam" animation={google.maps.Animation.BOUNCE}/>
        <MyMarker position={{ lat: 36.545627, lng: 26.351948}} content="Windmills" animation={google.maps.Animation.BOUNCE}/>
        <MyMarker position={{ lat: 36.53065, lng: 26.46749}} content="Kounoupes Beach" animation={google.maps.Animation.BOUNCE}/>
        <MyMarker position={{ lat: 36.576634, lng: 26.384324}} content="Maltezana Village" animation={google.maps.Animation.BOUNCE}/>
    </GoogleMap>
      ))
      return(
        <div className='map-container'>
        <GoogleMapIsland
        loadingElement={<div style={{height: '100%'}}/>}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAz0bCTLihf_bkR1D6Pixn2qEAz25A9qzY&v=3.exp&libraries=geometry,drawing,place"
        containerElement={ <div style={{ height: '100%', width: '100%'}}/>}
        mapElement={<div style={{height: '100%'}}/>}
        />
        </div>
      )
  }
}
export default MyMap
