import React from 'react'
import { slide as Menu } from 'react-burger-menu'

function Navbar(props) {
  return(
    <div className="navbar">
    <Menu width={'20%'}>
    <form>
      <div>
        <input type="search" id="mySearch" name="q" placeholder="Filter the locations..." aria-label="Filter the site locations to manage what shows on the map"/>
        <button className="filter-button">Filter</button>
      </div>
    </form>
    <h2 className="my-places">Places of Interest</h2>
    {props.markers.map((marker, index) => {
      return(
        <div>
        <hr/>
        <input className="button" type="button" value={marker.title} onClick={() => props.onToggleOpen(index)}/>
        <hr/>
        </div>
    )})}
    </Menu>
      <h1>The island of Astypalaia</h1>
    </div>
  )
}

export default Navbar
