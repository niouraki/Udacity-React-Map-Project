import React from 'react'
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps'

class MyMap extends React.Component {
  render() {
    const google = window.google
    const GoogleMapIsland = withGoogleMap(props => (
       <GoogleMap
          defaultCenter = {{ lat: 36.547583, lng: 26.345321 }}
          defaultZoom={ 12 }
      >
      <Marker
          title={'Castle'}
          name={'Castle'}
          position={{ lat: 36.544184, lng: 26.355147 }}
          defaultAnimation={google.maps.Animation.BOUNCE}
      >
      </Marker>
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
