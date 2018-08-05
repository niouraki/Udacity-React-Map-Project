import React from 'react'

class LeftPanel extends React.Component {
  componentDidMount() {
    this.props.handleSearch('All')
  }
  render() {
    return(
      <div className="info-list" aria-label="The list of markers that appear on the map" style={{visibility: this.props.visibility}}>
      <button className="close-button" aria-label="Close the list of markers"><i className="fa fa-times fa-2x" onClick={this.props.closeWidth}/></button>
      <form>
        <div>
        {/* https://blog.logrocket.com/an-imperative-guide-to-forms-in-react-927d9670170a   https://reactjs.org/docs/forms.html  Here I found info about forms in react*/}
        {/* https://stackoverflow.com/questions/22752116/react-label-element  Here I found the answer for htmlFor instead of just for*/}
        <label htmlFor='location-select' className="my-label">
          Pick an interesting location:
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
      {/*Loops the markers array and creates the buttons in the list*/}
      {this.props.filteredMarkers.map((marker, index) => {
        return(
          <div key={marker.id}>
          <input
            className="button"
            type="button"
            value={marker.title}
            onChange={(event) => this.props.handleSearch(event.target.value)}
            onClick={() => this.props.onToggleOpen(index)}/>
          </div>
      )})}
      </div>
    )
  }
}
 export default LeftPanel
