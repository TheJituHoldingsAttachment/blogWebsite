import React from 'react'
import './sidebar.css'
import Title from './title.jsx'



function Sidebar(props) {
    
  return (
    <>
    
    <div id='side'>
    
        <h1>TItles</h1>
   
    <div id='sidebar'>
          <Title title='Above the cloud'/> 
          <Title title='Activate the Cloud'/> 
          <Title title='Lets instrument it.'/> 
    </div>
    </div>
    </>
  )
}
export default Sidebar