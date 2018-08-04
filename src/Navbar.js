import React from 'react'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      visibility: "hidden"
    }
    this.closeWidth = this.closeWidth.bind(this)
    this.openWidth = this.openWidth.bind(this)
  }
  closeWidth() {
    this.setState({visibility: "hidden"})
  }
  openWidth() {
    this.setState({visibility: "visible"})
  }
  componentDidMount() {
    this.props.handleSearch('All')
  }
  render() {
  return(
    <div className="navbar">
    <h1 tabIndex="0">The island of Astypalaia</h1>
    <button className="hamburger"><i className="fa fa-bars fa-4x" onClick={this.openWidth}/></button>
    {/*https://stackoverflow.com/questions/37827279/add-a-state-property-to-an-inline-style-in-react  Here I found the idea to put visibility in inline styling*/}
    <div id="info-list" className="info-list" style={{visibility: this.state.visibility}}>
    <button className="close-button"><i className="fa fa-times fa-3x" onClick={this.closeWidth}/></button>
    <form>
      <div>
      {/* https://blog.logrocket.com/an-imperative-guide-to-forms-in-react-927d9670170a   https://reactjs.org/docs/forms.html  Here I found info about forms in react*/}
      {/* https://stackoverflow.com/questions/22752116/react-label-element  Here I found the answer for htmlFor instead of just for*/}
      <label htmlFor='location-select' className="my-label">
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
    </div>
    </div>
    )
  }
}

export default Navbar
