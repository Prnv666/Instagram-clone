import React from 'react'
import './Timeline.css'
import Suggestion from './Suggestion'

const Timeline = () => {
  return (
    <div className='timeline'>
      <div className="timeline-left">TimeLine </div>
      <div className="timeline-right"></div>
        
      <Suggestion/>
    </div>
  )
}

export default Timeline
