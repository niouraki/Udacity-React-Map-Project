import React from 'react'
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps'

class MyMap extends React.Component {
  //constructor(props) {
    //super(props)

    //this.state = {
      //markerArray: [
      //{ title: 'Castle',
        //name: 'Castle',
        //position: {lat: 36.544184, lng: 26.355147 },
        //defaultAnimation: google.maps.Animation.BOUNCE
      //},{
        //title: 'Livadi Beach',
        //name: 'Livadi Beach',
        //position: { lat: 36.542624, lng: 26.343044 },
        //defaultAnimation: google.maps.Animation.BOUNCE
      //},{
        //title: 'Kolokitha Cafe',
        //name: 'Kolokitha Cafe',
      //  position: { lat: 36.547431, lng: 26.353457 },
        //defaultAnimation: google.maps.Animation.BOUNCE,
      //},{
        //title: 'Museum',
        //name: 'Museum',
        //position: { lat: 36.548635, lng: 26.352456 },
        //defaultAnimation: google.maps.Animation.BOUNCE
      //},{
        //title: 'Camping Site',
        //name: 'Camping Site',
        //position: { lat: 36.560073, lng: 26.354186 },
        //defaultAnimation: google.maps.Animation.BOUNCE
      //}, {
        //title: 'Infant cemetery',
        //name: 'Infant cemetery',
        //position: { lat: 36.543922, lng: 26.35386 },
        //defaultAnimation: google.maps.Animation.BOUNCE
      //},{
        //title: 'Water dam',
        //name: 'Water dam',
        //position: { lat: 36.551069, lng: 26.327439 },
        //defaultAnimation: google.maps.Animation.BOUNCE
      //}
      //]
    //}
  //}
  render() {
    const google = window.google
    const GoogleMapIsland = withGoogleMap(props => (
       <GoogleMap
          defaultCenter = {{ lat: 36.547583, lng: 26.345321 }}
          defaultZoom={ 13 }
      >
      <Marker
          title={'Castle'}
          name={'Castle'}
          position={{ lat: 36.544184, lng: 26.355147 }}
          defaultAnimation={google.maps.Animation.BOUNCE}
      />
      <Marker
          title={'Livadi Beach'}
          name={'Livadi Beach'}
          position={{ lat: 36.542624, lng: 26.343044 }}
          defaultAnimation={google.maps.Animation.BOUNCE}
      />
      <Marker
          title={'Kolokitha Cafe'}
          name={'Kolokitha Cafe'}
          position={{ lat: 36.547431, lng: 26.353457 }}
          defaultAnimation={google.maps.Animation.BOUNCE}
      />
      <Marker
          title={'Museum'}
          name={'Museum'}
          position={{ lat: 36.548635, lng: 26.352456 }}
          defaultAnimation={google.maps.Animation.BOUNCE}
      />
      <Marker
          title={'Camping Site'}
          name={'Camping Site'}
          position={{ lat: 36.560073, lng: 26.354186 }}
          defaultAnimation={google.maps.Animation.BOUNCE}
      />
      <Marker
          title={'Infant cemetery'}
          name={'Infant cemetery'}
          position={{ lat: 36.543922, lng: 26.35386 }}
          defaultAnimation={google.maps.Animation.BOUNCE}
      />
      <Marker
          title={'Water dam'}
          name={'Water dam'}
          position={{ lat: 36.551069, lng: 26.327439 }}
          defaultAnimation={google.maps.Animation.BOUNCE}
      />
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
    //{props.markerArray.map((marker, index) => {
    //  return(
          //<Marker
          //  key={index}
            //title={title}
          //  name={name}
          //  position={position}
          //  defaultAnimation= {google.maps.Animation.BOUNCE}
        //  />
    //  )
  //  })}
