import React from 'react'

function LeftPanel() {
  return(
  <div className="panel-container">
    <h2 className="my-places">Places of Interest</h2>
    <input className="show-places" type="button" value="Show Places"/>
    <input className="hide-places" type="button" value="Hide Places"/>
    <hr/>
    <p className="button">Castle</p>
    <hr/>
    <p className="button">Livadi Beach</p>
    <hr/>
    <p className="button">Kolokitha Cafe</p>
    <hr/>
    <p className="button">Museum</p>
    <hr/>
    <p className="button">Camping Site</p>
    <hr/>
    <p className="button">Infant Cemetery</p>
    <hr/>
    <p className="button">Water Dam</p>
    <hr/>
    <p className="button">Windmills</p>
    <hr/>
    <p className="button">Kounoupes Beach</p>
    <hr/>
    <p className="button">Maltezana Village</p>
    <hr/>
  </div>
  )
}

export default LeftPanel
