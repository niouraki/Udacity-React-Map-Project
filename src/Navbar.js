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
      <hr/>
      <input className="button" type="button" value="Castle" onClick={props.onToggleOpen}/>
      <hr/>
      <input className="button" type="button" value="Livadi Beach" onClick={props.onToggleOpen}/>
      <hr/>
      <input className="button" type="button" value="Kolokitha Cafe" onClick={props.onToggleOpen}/>
      <hr/>
      <input className="button" type="button" value="Museum" onClick={props.onToggleOpen}/>
      <hr/>
      <input className="button" type="button" value="Camping Site" onClick={props.onToggleOpen}/>
      <hr/>
      <input className="button" type="button" value="Infant Cemetery" onClick={props.onToggleOpen}/>
      <hr/>
      <input className="button" type="button" value="Water Dam" onClick={props.onToggleOpen}/>
      <hr/>
      <input className="button" type="button" value="Windmills" onClick={props.onToggleOpen}/>
      <hr/>
      <input className="button" type="button" value="Kounoupes Beach" onClick={props.onToggleOpen}/>
      <hr/>
      <input className="button" type="button" value="Maltezana Village" onClick={props.onToggleOpen}/>
      <hr/>
    </Menu>
      <h1>The island of Astypalaia</h1>
    </div>
  )
}

export default Navbar
