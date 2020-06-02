import React from 'react'
import moment from 'moment'

import paramsMapping from '../../resources/paramsMapping.json'

import './infoPanel.css'

const InfoPanel = ({ parameters }) => {
    return (
        parameters && <div className='info-panel'>
            <span className='info-panel__timer'>Updated at {moment().format('h:mm:ss a')}</span>
            {
                Object.keys(parameters)
                    .map((key, index) => (
                        <span key={index} className='info-panel__item'>
                            {paramsMapping[key].description}: {parseInt(parameters[key]).toFixed(2)} {paramsMapping[key].unit}
                        </span>
                        )
                    )
            }
        </div>
    )
}

InfoPanel.defaultProps = {

}

export default InfoPanel
