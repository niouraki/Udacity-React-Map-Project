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
        { id: 1, position: { lat: 36.544206, lng: 26.355205 }, title: "Castle" },
        { id: 2, position: { lat: 36.542438, lng: 26.343119 }, title: "Livadi Beach" },
        { id: 3, position: { lat: 36.54743, lng: 26.353549 }, title: "Kolokitha Cafe" },
        { id: 4, position: { lat: 36.548651, lng: 26.352387 }, title:"Museum" },
        { id: 5, position: { lat: 36.560076, lng: 26.353936 }, title: "Camping Site" },
        { id: 6, position: { lat: 36.543823, lng: 26.353998 }, title: "Infant Cemetery" },
        { id: 7, position: { lat: 36.551026, lng: 26.328218 }, title: "Water Dam" },
        { id: 8, position: { lat: 36.545627, lng: 26.351948 }, title: "Windmills"},
        { id: 9, position: { lat: 36.53065, lng: 26.46749 }, title: "Kounoupes Beach"},
        { id: 10, position: { lat: 36.576634, lng: 26.384324 }, title: "Maltezana Village" }
      ],
      pictures: [],
      indexValue: 0
    }
    this.NextPhoto = this.NextPhoto.bind(this)
    this.PrevPhoto = this.PrevPhoto.bind(this)
  }
  componentDidMount() {
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4730619e90f6124fa7ff46c19c600709&tags=Astypalaia,Astipalea&per_page=50&format=json&nojsoncallback=1')
      .then(function(response) {
        return response.json()
      })
      .then(function(j) {
        let picArray = j.photos.photo.map((pic) => {
          var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg'
            return(
              <img alt="Astypalaia island" src={srcPath}/>
            )
        })
        this.setState({pictures: picArray})
      }.bind(this))
  }

//Increments Photos
  NextPhoto = () => {
    var currentIndex = this.state.indexValue
    if(currentIndex === 50) {
      currentIndex === 0
    } else {
      currentIndex++
    }
    this.setState({ indexValue : currentIndex })
  }
  //Decrements Photos
  PrevPhoto = () => {
    var currentIndex = this.state.indexValue
    if(currentIndex === 0) {
      currentIndex === 50
    } else {
      currentIndex--
    }
    this.setState({ indexValue : currentIndex })
  }
  render() {
    const google = window.google
    const GoogleMapIsland = withGoogleMap(props => (
       <GoogleMap
          defaultCenter = {{ lat: 36.547583, lng: 26.345321 }}
          defaultZoom={ 12 }
      >
        {this.state.markers.map((marker) => {
          return(
          <MyMarker
            key={marker.id}
            position={marker.position}
            title={marker.title}
            content={this.state.pictures[this.state.indexValue]}
            animation={google.maps.Animation.BOUNCE}
            next={this.NextPhoto}
            prev={this.PrevPhoto}
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
