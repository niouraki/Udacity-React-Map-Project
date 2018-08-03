import React, { Component } from 'react';
import './App.css';
import { GoogleMap, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import Navbar from './Navbar'

// https://github.com/asciidoctor/asciidoctor/issues/2071 for the use of rel="noopener noreferrer"

class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      markers: [
        { id: 0, position: { lat: 36.544206, lng: 26.355205 }, title: "Castle", info: <a href="https://www.greeka.com/dodecanese/astypalea/astypalea-excursions/venetian-castle.htm" target="_blank" rel="noopener noreferrer">Click for more information</a> },
        { id: 1, position: { lat: 36.542438, lng: 26.343119 }, title: "Livadi Beach", info: <a href="https://www.greeka.com/dodecanese/astypalea/astypalea-beaches/astypalea-livadi_beach.htm" target="_blank" rel="noopener noreferrer">Click for more information</a> },
        { id: 2, position: { lat: 36.54743, lng: 26.353549 }, title: "Kolokitha Cafe", info: <a href="https://astypalaia-island.gr/fagito-poto/kolokitha" target="_blank" rel="noopener noreferrer">Click for more information</a> },
        { id: 3, position: { lat: 36.548651, lng: 26.352387 }, title:"Museum", info: <a href="https://www.gtp.gr/TDirectoryDetails.asp?ID=4309" target="_blank" rel="noopener noreferrer">Click for more information</a> },
        { id: 4, position: { lat: 36.560076, lng: 26.353936 }, title: "Camping Site", info: <a href="http://www.astypalaiacamping.gr/?lang=en" target="_blank" rel="noopener noreferrer">Click for more information</a> },
        { id: 5, position: { lat: 36.543823, lng: 26.353998 }, title: "Infant Cemetery", info: <a href="http://www.aegeanislands.gr/islands/astypalea/TheInfantCemeteryofAstypalea.html" target="_blank" rel="noopener noreferrer">Click for more information</a> },
        { id: 6, position: { lat: 36.551026, lng: 26.328218 }, title: "Water Dam", info: <a href="https://www.greeka.com/dodecanese/astypalea/astypalea-villages/astypalea-livadi.htm" target="_blank" rel="noopener noreferrer">Click for more information</a> },
        { id: 7, position: { lat: 36.545627, lng: 26.351948 }, title: "Windmills", info: <a href="https://astypalaia-island.gr/sights/windmills-in-chora-astypalaia" target="_blank" rel="noopener noreferrer">Click for more information</a> },
        { id: 8, position: { lat: 36.53065, lng: 26.46749 }, title: "Kounoupes Beach", info: <a href="https://astypalaia-island.gr/eng" target="_blank" rel="noopener noreferrer">Click for more information</a> },
        { id: 9, position: { lat: 36.576634, lng: 26.384324 }, title: "Maltezana Village", info: <a href="https://astypalaia-island.gr/eng" target="_blank" rel="noopener noreferrer">Click for more information</a> }
      ],
      isOpen: false,
      openMarker: null,
      pictures: [],
      indexValue: 0,
      filteredMarkers: []
    }
    this.NextPhoto = this.NextPhoto.bind(this)
    this.PrevPhoto = this.PrevPhoto.bind(this)
    this.onToggleOpen = this.onToggleOpen.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  //Deals with the external API call from flickr
  //The photos are found based on the two tags and on their interestingness
  //The API call and the photos are based on this youtube tutorial https://www.youtube.com/watch?v=RkXotG7YUek
  componentDidMount() {
    window.gm_authFailure = this.gm_authFailure;
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4730619e90f6124fa7ff46c19c600709&tags=Astypalaia,Astipalea&sort=interestingness-desc&per_page=50&format=json&nojsoncallback=1')
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
      .catch(function(error) {
        alert("Sorry. An error has occured with the photos.")
      })
  }

//Increments Photos
  NextPhoto = () => {
    var currentIndex = this.state.indexValue
      currentIndex++
    this.setState({ indexValue: currentIndex })
  }
  //Decrements Photos
  PrevPhoto = () => {
    var currentIndex = this.state.indexValue
      currentIndex--
    this.setState({ indexValue: currentIndex })
  }
  //Toggles open and close state of markers
  onToggleOpen = (index) => {
    this.setState({
      isOpen: !this.state.isOpen,
      openMarker: index
    })
      console.log(this.state.openMarker)
  }
  //Filters the markers based on their name
  handleSearch(value) {
    const result = this.state.markers.filter(marker => marker.title === value)
    this.setState({filteredMarkers: result})

    if(value === 'All' || value === '') {
      this.setState({filteredMarkers: this.state.markers})
    }
  }
  //In case there is an error with google maps
  //The code comes from https://developers.google.com/maps/documentation/javascript/events
  //This article helped me to render the map and the markers https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
  gm_authFailure() {
    alert('An error has occured with the map. Refresh the page or try again later')
  }
  render() {
    const google = window.google
    const GoogleMapIsland = withGoogleMap(props => (
       <GoogleMap
          defaultCenter = {{ lat: 36.547583, lng: 26.345321 }}
          defaultZoom={ 12 }
      >
        {this.state.filteredMarkers.map((marker, index) => {
          return(
          <Marker
            key={marker.id}
            position={marker.position}
            title={marker.title}
            info={marker.info}
            animation={google.maps.Animation.BOUNCE}
            onClick={() => this.onToggleOpen(index)}
          >
          {(this.state.openMarker === index) &&
            (<InfoWindow onCloseClick={this.onToggleOpen}>
            <div>
              <div className="marker-name">{marker.title}</div>
              <div>{this.state.pictures[this.state.indexValue]}</div>
              <div>
              <button className="photo-button" onClick={this.PrevPhoto}>Prev</button>
              <button className="photo-button" onClick={this.NextPhoto}>Next</button>
              </div>
              <div className="info">{marker.info}</div>
              <div className="source">Images Source: Flickr</div>
            </div>
            </InfoWindow>)
          }
          </Marker>
        )})}
    </GoogleMap>
      ))
    return (
      <div className="App">
          <Navbar
            markers={this.state.markers}
            filteredMarkers={this.state.filteredMarkers}
            onToggleOpen={this.onToggleOpen}
            handleSearch={this.handleSearch}
          />
        <div>
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
