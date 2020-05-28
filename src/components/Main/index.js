import React from 'react'

import Text from '../Text'
import InfoPanel from '../InfoPanel'
import ControlPanel from '../ControlPanel'
import Visualizer from '../Visualizer'

import './main.css'

export default function Main({ parameters }) {
    return (
        <div className='main-container'>
            <div className='main-content'>
                <div className='main-content__header'>
                    <Text textStyle={['main-content__title']} defaultCursor>Aqua system dashboard</Text>
                </div>
                <div className='main-content__dashboard'>
                    <div className='main-content__panel'>
                        <ControlPanel waterVolume={parameters.waterVolume} />
                        <Visualizer waterVolume={parameters.waterVolume} />
                    </div>
                    <div className='main-content__panel'>
                        <InfoPanel parameters={parameters} />
                    </div>
                </div>
            </div>
        </div>
    )
}
