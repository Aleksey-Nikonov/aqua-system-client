import React, { useState} from 'react'

import classNames from 'classnames/bind';

import './toggleControl.css'

const ToggleControl = ({ btnText, onActive, onPassive }) => {
    const [ isActive, setActive ] = useState(false);

    const handleClick = () => {
        if (!isActive)
        {
            onActive();
            setActive(true);
        } else {
            onPassive();
            setActive(false);
        }
    }

    return (
        <div className={['toggle']} onClick={handleClick}>
            <span className={['toggle__text']}>{btnText}</span>
            <div className={classNames('toggle__indicator', isActive ? 'toggle__indicator_active' : 'toggle__indicator_passive')}></div>
        </div>
    )
}

export default ToggleControl
