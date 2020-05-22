import React, { useEffect, useState } from 'react'

import Text from '../Text'
import InfoPanel from '../InfoPanel'

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
                        123
                    </div>
                    <div className='main-content__panel'>
                        <InfoPanel parameters={parameters} />
                    </div>
                </div>
            </div>
        </div>
    )
}
