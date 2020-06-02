import React from 'react'

import configs from '../../resources/configs'

import './visualizer.css'
import './bubbles.css'

const WATER_BLOCK_HEIGH = 122;

const Visualizer = React.memo( ({ waterVolume }) => {
    const calculatedHeight = (waterVolume - 1)/(configs.MAX_WATER_VOLUME - 1) * (WATER_BLOCK_HEIGH - 1) + 1
    // https://www.cyberforum.ru/cpp-beginners/thread1839821.html
    
    const height = calculatedHeight > WATER_BLOCK_HEIGH ? WATER_BLOCK_HEIGH : calculatedHeight

    return (
        <div className='visualization-panel'>
            <div className='water-vizualization'>
              <div className='water-vizualization__water-block' style={{ height: height + 'px' }}>
                <div className="bubble x1"></div>
                <div className="bubble x2"></div>
                <div className="bubble x3"></div>
                <div className="bubble x4"></div>
                <div className="bubble x5"></div>
              </div>
            </div>
        </div>
    )
})

Visualizer.defaultProps = {

}

export default Visualizer
