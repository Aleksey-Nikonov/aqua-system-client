import React, { useState, useEffect } from 'react'

import classNames from 'classnames/bind'

import ToggleControl from '../ToggleControl'
import Text from '../Text'
import Button from '../Button'

import * as aquaSystemClient from '../../services/aquaSystemClient'

import './controlPanel.css'

const ControlPanel = ({ waterVolume }) => {
    const [ currentWaterVolume, setCurrentWaterVolume ] = useState(0)
    useEffect(() => {
        setCurrentWaterVolume(waterVolume);
    }, [waterVolume])

    const [ waterLevel, setWaterLevel ] = useState(0)
    const [ waterTemperature, setWaterTemperature ] = useState(0)
    const handleWaterLevel = ({ target: { value } }) => setWaterLevel(value)
    const handleWaterTemperature = ({ target: { value } }) => setWaterTemperature(value)
    const handleWaterAdditionClick = () =>
    {
        if (currentWaterVolume <= 2000)
        {
            aquaSystemClient.addFreshWater(waterLevel, waterTemperature)
        }
    }

    const [ oxygenEnrichment, setOxygenEnrichment ] = useState(0)
    const handleOxygenEnrichmentLevel = ({ target: { value } }) => setOxygenEnrichment(value)
    const handleOxygenEnrichmentPower = () => aquaSystemClient.setOxygenEnrichmentPower(oxygenEnrichment)

    const [ carbonDioxideLevel, setCarbonDioxideLevel ] = useState(0)
    const handleCarbonDioxideLevel = ({ target: { value } }) => setCarbonDioxideLevel(value)
    const handleRemovalCarbonDioxide = () => aquaSystemClient.removeCarbonDioxide(carbonDioxideLevel)

    const closeValve = async () => await aquaSystemClient.closeValve()
    const openValve = async () => await aquaSystemClient.openValve()

    const [ airIncrease, setAirIncrease ] = useState(false)
    const [ airDecrease, setAirDecrease] = useState(false)

    const heatOn = async () => {
        await aquaSystemClient.heatOn()
        setAirIncrease(true)
    }

    const heatOff = async () => {
        await aquaSystemClient.heatOff()
        setAirIncrease(false)
    }

    const ventOn = async () => {
        await aquaSystemClient.ventOn()
        setAirDecrease(true)
    }

    const ventOff = async () => {
        await aquaSystemClient.ventOff()
        setAirDecrease(false)
    }

    return (
        <div className='control-panel'>
            <div className='functional-area'>
                <div className='functional-area__element'>
                    <ToggleControl
                        btnText='Water toggle'
                        onActive={openValve}
                        onPassive={closeValve}
                    />
                    <Text textStyle={['functional-area__text']} defaultCursor>Уменьшение уровня воды</Text>
                </div>
                <div className='functional-area__element'>
                    <Text textStyle={['functional-area__text']} defaultCursor>H20</Text>
                    <input type="number" min={0} max={10} value={waterLevel} onChange={handleWaterLevel} />
                    <Text textStyle={['functional-area__text']} defaultCursor>T</Text>
                    <input type="number" min={0} max={10} value={waterTemperature} onChange={handleWaterTemperature} />
                    <Button onClick={handleWaterAdditionClick}>Save</Button>
                    <Text textStyle={['functional-area__text']} defaultCursor>Увеличение уровня воды</Text>
                </div>
            </div>
            <div className='functional-area'>
                <div className='functional-area__element'>
                    <input type="number" min={0} max={4} value={oxygenEnrichment} onChange={handleOxygenEnrichmentLevel} />
                    <Button onClick={handleOxygenEnrichmentPower}>Save</Button>
                    <Text textStyle={['functional-area__text']} defaultCursor>Мощность обогащения кислородом</Text>
                </div>
            </div>
            <div className='functional-area'>
                <div className='functional-area__element'>
                    <input type="number" min={0} max={5} value={carbonDioxideLevel} onChange={handleCarbonDioxideLevel} />
                    <Button onClick={handleRemovalCarbonDioxide}>Save</Button>
                    <Text textStyle={['functional-area__text']} defaultCursor>Удаление из воды углекислого газа</Text>
                </div>
            </div>
            <div className='functional-area'>
                <div className={classNames('functional-area__element', { 'functional-area__element_disabled': airIncrease })}>
                    <ToggleControl
                        btnText='Air toggle'
                        onActive={ventOn}
                        onPassive={ventOff}
                    />
                    <Text textStyle={['functional-area__text']} defaultCursor>Уменьшение температуры воздуха</Text>
                </div>
                <div className={classNames('functional-area__element', { 'functional-area__element_disabled': airDecrease })}>
                    <ToggleControl
                        btnText='Air toggle'
                        onActive={heatOn}
                        onPassive={heatOff}
                    />
                    <Text textStyle={['functional-area__text']} defaultCursor>Увеличение температуры воздуха</Text>
                </div>
            </div>
        </div>
    )
}

ControlPanel.defaultProps = {

}

export default ControlPanel
