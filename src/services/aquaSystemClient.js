import configs from '../resources/configs'

export const closeValve = async () =>
    await performPost('/fish_tank/close_valve')

export const openValve = async () =>
    await performPost('/fish_tank/open_valve')

export const heatOff = async () =>
    await performPost('/temperature/heat_off')

export const heatOn = async () =>
    await performPost('/temperature/heat_on')

export const ventOff = async () =>
    await performPost('/temperature/vent_off')

export const ventOn = async () =>
    await performPost('/temperature/vent_on')

export const addFreshWater = async (waterLevel, temperature) =>
    await performPost(`/add_fresh_water?fresh_water=${waterLevel}&fresh_water_temperature=${temperature}`)

export const setOxygenEnrichmentPower = async oxygenEnrichment =>
    await performPost(`/oxygen_pressure/manual?atmos=${oxygenEnrichment}`)

export const removeCarbonDioxide = async carbonDioxideLevel =>
    await performPost(`/carbon_dioxide?power=${carbonDioxideLevel}`)

async function performPost(path) {
    let response = null

    try
    {
        const res = await fetch(configs.AQUA_API_URL + path,
        {
            method: 'POST'
        });

        response = res.status
    } catch (e) {
        console.error(e)
        alert('Error', e)
    }

    return response
}

export async function getParameters () {
    let response = null

    try
    {
        const res = await fetch(`${configs.AQUA_API_URL}/params`, {})
        const json = await res.json()
        response = json
    } catch (e) {
        console.error(e)
        alert('Error', e)
    }

    return response
}
