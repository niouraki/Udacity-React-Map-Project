import React from 'react'
import { GoogleMap, withGoogleMap } from 'react-google-maps'

class MyMap extends React.Component {
  render() {
    const GoogleMapIsland = withGoogleMap(props => (
       <GoogleMap
          defaultCenter = {{ lat: 36.547583, lng: 26.345321 }}
          defaultZoom={ 13 }
      >
        </GoogleMap>
      ))
      return(
        <div className='map-container'>
        <GoogleMapIsland
        containerElement={ <div style={{ height: '100%', width: '100%'}}/>}
        mapElement={<div style={{height: '100%'}}/>}
        />
        </div>
      )
  }
}
export default MyMap
