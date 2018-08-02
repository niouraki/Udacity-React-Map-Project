import React from 'react'
import { slide as Menu } from 'react-burger-menu'

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      query: '',
      filteredMarkers: []
    }
    this.setQuery = this.setQuery.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  setQuery(query) {
    if(!query) {
      this.setState({query: '', filteredMarkers: []})
    } else {
      this.setState({query: query})
    }
  }
  handleSearch(query) {
    const result = this.props.markers.filter(marker => marker.title === query)
    this.setState({filteredMarkers: result})
    console.log(result)
  }
  render() {
  return(
    <div className="navbar">
    <Menu width={'20%'}>
    <form>
      <div>
        <input
          type="search"
          id="mySearch"
          name="q"
          placeholder="Filter the locations..."
          aria-label="Filter the site locations to manage what shows on the map"
          onChange={(event) => this.handleSearch(event.target.value)}
          />
        <button className="filter-button">Filter</button>
      </div>
    </form>
    <h2 className="my-places">Places of Interest</h2>
    {this.props.markers.map((marker, index) => {
      return(
        <div key={marker.id}>
        <hr/>
        <input
          className="button"
          type="button"
          value={marker.title}
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
