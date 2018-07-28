import React from 'react'
import { Marker, InfoWindow } from 'react-google-maps'

class MyMarker extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      isOpen: false
    }
    this.onToggleOpen = this.onToggleOpen.bind(this)
  }
    onToggleOpen() {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  render() {
    return (
      <Marker
          position={this.props.position}
          onClick={this.onToggleOpen}
          animation={this.props.animation}
      >
      {this.state.isOpen &&
        <InfoWindow onCloseClick={this.onToggleOpen}>
        <div>
          <div className="marker-name">{this.props.title}</div>
          <div>{this.props.content}</div>
          <div>
          <button className="photo-button" onClick={this.props.prev}>Prev</button>
          <button className="photo-button" onClick={this.props.next}>Next</button>
          </div>
          <div className ="source">Source: Flickr</div>
        </div>
        </InfoWindow>
      }
      </Marker>
    )
  }
}
export default MyMarker
