import React, { useEffect, useState } from 'react'
import './RainEffect.css'

const RainEffect = () => {
  const [rains, setRains] = useState([])

  useEffect(() => {
    const rainConfigs = [
      { delay: '2s', duration: '4s', top: '-10%', left: '15%' },
      { delay: '3s', duration: '4.5s', top: '-30%', left: '75%' },
      { delay: '1.5s', duration: '3.8s', top: '-5%', left: '80%' },
      { delay: '2.5s', duration: '4.2s', top: '-20%', left: '28%' },
      { delay: '3.5s', duration: '4.8s', top: '-25%', left: '90%' }
    ]

    setRains(rainConfigs)
  }, [])

  return (
    <div className="rain-center">
      {rains.map((rain, index) => (
        <div
          key={index}
          className="rain"
          style={{
            '--delay': rain.delay,
            '--duration': rain.duration,
            top: rain.top,
            left: rain.left
          }}
        >
          <div className="drop"></div>
          <div className="ripples">
            <span className="ripple"></span>
            <span className="ripple"></span>
          </div>
          <div className="splash"></div>
          <div className="bubbles">
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RainEffect