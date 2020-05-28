import React from 'react'

import './visualizer.css'
import './bubbles.css'

const WATER_BLOCK_HEIGH = 122;
const MAX_WATER_LEVEL = 2000;



const Visualizer = React.memo( ({ waterVolume }) => {
    const height = (waterVolume - 200 - 1)/(2000 - 1)*(122 - 1)+1;
    // https://www.cyberforum.ru/cpp-beginners/thread1839821.html

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
