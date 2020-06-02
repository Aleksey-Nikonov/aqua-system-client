import { useState } from 'react'

import useInterval from './useInterval'
import * as aquaSystemClient from '../services/aquaSystemClient'

const _delayConfig = 1500

const usePolling = () => {
    const [ parameters, setParameters ] = useState(null)

    useInterval(async () => {
        const response = await aquaSystemClient.getParameters()
        setParameters(response)
      }, _delayConfig)

    return parameters
}

export default usePolling
