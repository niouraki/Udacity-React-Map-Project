import React from 'react'
import { slide as Menu } from 'react-burger-menu'

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
      <label htmlFor='location-select'>
        Pick a location:
        <select
          id='location-select'
          onChange={(event) => this.props.handleSearch(event.target.value)}
        >
          <option value=''>--Please choose a location--</option>
          <option value='All'>All</option>
          {this.props.markers.map((marker, index) => {
            return(
              <option key={marker.id} value={marker.title}>{marker.title}</option>
            )})}
        </select>
        </label>
      </div>
    </form>
    <h2 className="my-places">Places of Interest</h2>
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
