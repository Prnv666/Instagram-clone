import React from 'react'
import './HomePage.css'
import SideNav from './Navigation/SideNav'
import Timeline from './Timeline/Timeline'

const HomePage = () => {
  return (
    <div className='HomePage'>
      <div className="homepage_nav">
        <SideNav/>
      </div>

      <div className="homepage_timeline">
        <Timeline/>
      </div>
    </div>
  )
}

export default HomePage
