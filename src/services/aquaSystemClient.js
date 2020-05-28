const URL_CONFIG = 'http://localhost:8080/v1/params'

export async function getParameters () {
    let response = null

    try
    {
        const res = await fetch(URL_CONFIG, {})
        const json = await res.json()
        response = json
    } catch (e) {
        console.error(e)
        alert('Error', e)
    }

    return response
}

export async function closeValve () {
    let response = null

    try
    {
        const res = await fetch('http://localhost:8080/v1/fish_tank/close_valve',
        {
            method: 'POST'
        });

        response = res.status
    } catch (e) {
        console.error(e)
        alert('Error', e)
    }

    return response;
}

export async function openValve () {
    let response = null

    try
    {
        const res = await fetch('http://localhost:8080/v1/fish_tank/open_valve',
        {
            method: 'POST'
        });

        response = res.status
    } catch (e) {
        console.error(e)
        alert('Error', e)
    }

    return response;
}

export async function heatOff () {
    let response = null

    try
    {
        const res = await fetch('http://localhost:8080/v1/temperature/heat_off',
        {
            method: 'POST'
        });

        response = res.status
    } catch (e) {
        console.error(e)
        alert('Error', e)
    }

    return response;
}

export async function heatOn () {
    let response = null

    try
    {
        const res = await fetch('http://localhost:8080/v1/temperature/heat_on',
        {
            method: 'POST'
        });

        response = res.status
    } catch (e) {
        console.error(e)
        alert('Error', e)
    }

    return response;
}

export async function ventOff () {
    let response = null

    try
    {
        const res = await fetch('http://localhost:8080/v1/temperature/vent_off',
        {
            method: 'POST'
        });

        response = res.status
    } catch (e) {
        console.error(e)
        alert('Error', e)
    }

    return response;
}

export async function ventOn () {
    let response = null

    try
    {
        const res = await fetch('http://localhost:8080/v1/temperature/vent_on',
        {
            method: 'POST'
        });

        response = res.status
    } catch (e) {
        console.error(e)
        alert('Error', e)
    }

    return response;
}

export async function addFreshWater (waterLevel, temperature) {
    let response = null

    try
    {
        const res = await fetch(`http://localhost:8080/v1/add_fresh_water?fresh_water=${waterLevel}&fresh_water_temperature=${temperature}`,
        {
            method: 'POST'
        });

        response = res.status
    } catch (e) {
        console.error(e)
        alert('Error', e)
    }

    return response;
}

export async function setOxygenEnrichmentPower (oxygenEnrichment) {
    let response = null

    try
    {
        const res = await fetch(`http://localhost:8080/v1/oxygen_pressure/manual?atmos=${oxygenEnrichment}`,
        {
            method: 'POST'
        });

        response = res.status
    } catch (e) {
        console.error(e)
        alert('Error', e)
    }

    return response;
}

export async function removeCarbonDioxide (carbonDioxideLevel) {
    let response = null

    try
    {
        const res = await fetch(`http://localhost:8080/v1/carbon_dioxide?power=${carbonDioxideLevel}`,
        {
            method: 'POST'
        });

        response = res.status
    } catch (e) {
        console.error(e)
        alert('Error', e)
    }

    return response;
}
