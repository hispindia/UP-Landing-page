import React from 'react'
import styled from 'styled-components'
import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader } from '@dhis2/ui-core'
import  MenuItem from '../components/MenuItem'
import '../Navigation.css'


const query = { systemInfo: {
        resource: 'system/info'
    },
    apps: { 
        resource: 'action::menu/getModules', 
        fields: 'name, displayName, icon, defaultAction' 
    } 
}

const StyledHeading = styled.h1`
    font-size: 8vw;
`

export const Navigation = () => {
    const { loading, error, data } = useDataQuery(query)

    if (loading) return <CircularLoader />
    console.log(data.systemInfo.contextPath)

    if (error) return `ERROR: ${error.message}`
    
    return <nav id="wrapper">{
        data.apps.modules.map(appDetails => (
          <MenuItem key = {appDetails.name}
                    appDisplayName={appDetails.displayName} 
                    appName={appDetails.name} 
                    appIcon={appDetails.icon} 
                    appLink={appDetails.defaultAction} 
                    contextPath={data.systemInfo.contextPath}
          />
        ))}
    </nav>  
}


