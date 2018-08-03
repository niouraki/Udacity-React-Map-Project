import React from 'react'
import { slide as Menu } from 'react-burger-menu'

// the burger menu was created using the react-burger-menu component which I found online.
    //documentation : https://github.com/negomi/react-burger-menu
                    //https://github.com/negomi/react-burger-menu/wiki/FAQ

class Navbar extends React.Component {
  componentDidMount() {
    this.props.handleSearch('All')
  }
  render() {
  return(
    <div className="navbar">
    <Menu width={'20%'}>
    <form>
      <div>
      {/* https://stackoverflow.com/questions/22752116/react-label-element  Here I found the answer for htmlFor instead of just for*/}
      <label htmlFor='location-select'>
        Pick a location:
        <select
          id='location-select'
          onChange={(event) => this.props.handleSearch(event.target.value)}
        >
          <option value=''>--Please choose a location--</option>
          <option value='All'>All</option>
          {/*Loops the markers array and creates the options in the drop down menu*/}
          {this.props.markers.map((marker, index) => {
            return(
              <option key={marker.id} value={marker.title}>{marker.title}</option>
            )})}
        </select>
        </label>
      </div>
    </form>
    <h2 className="my-places">Places of Interest</h2>
    {/*Loops the markers array and creates the buttons in the list*/}
    {this.props.filteredMarkers.map((marker, index) => {
      return(
        <div key={marker.id}>
        <hr/>
        <input
          className="button"
          type="button"
          value={marker.title}
          onChange={(event) => this.props.handleSearch(event.target.value)}
          onClick={() => this.props.onToggleOpen(index)}/>
        <hr/>
        </div>
    )})}
    </Menu>
      <h1>The island of Astypalaia</h1>
    </div>
    )
  }
}

export default Navbar
