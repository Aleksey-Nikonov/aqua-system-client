const URL_CONFIG = 'http://localhost:8080/v1/params/fancy'

export async function getParameters () {
    let response = null

    try
    {
        const res = await fetch(URL_CONFIG, {})
        const json = await res.json()
        response = json
    } catch (err) {
        throw err
    }

    return response
}
