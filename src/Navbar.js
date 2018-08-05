import React from 'react'

class Navbar extends React.Component {
  render() {
  return(
    <header className="navbar">
    <h1 tabIndex="0">The island of Astypalaia</h1>
    <button className="hamburger" aria-label="Open the list to select the markers"><i className="fa fa-bars fa-4x" onClick={this.props.openWidth}/></button>
    </header>
    )
  }
}

export default Navbar
