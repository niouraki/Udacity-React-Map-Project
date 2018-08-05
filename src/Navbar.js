import React from 'react'

class Navbar extends React.Component {
  render() {
  return(
    <header className="navbar">
    <h1 tabIndex="0">The island of Astypalaia</h1>
    <button className="hamburger" aria-label="Open the list to select the markers"><i className="fa fa-bars fa-4x" onClick={this.props.openWidth}/></button>
    {/*https://stackoverflow.com/questions/37827279/add-a-state-property-to-an-inline-style-in-react  Here I found the idea to put visibility in inline styling*/}
    </header>
    )
  }
}

export default Navbar
