import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader } from '@dhis2/ui-core'
import  DashBoardItem  from './DashBoardItem'
import '../Favorites.css'
import rutenett_c from '../icons/rutenett_c.svg';
import globe_c from '../icons/globe_c.svg'
import graph_c from '../icons/graph_c.svg'

const query = { 
    userInfo: { 
        resource: 'me', 
        fields: 'id' 
    },
    systemInfo: {
        resource: 'system/info'
    },
    charts: {
        resource: 'charts'
    },
    maps: {
        resource: 'maps'
    },
    pivot:{
        resource: 'reportTables'
    },
}

export const Favorites = () => {
    const { loading, error, data } = useDataQuery(query)
    console.log(data)

    

    if (loading) return <CircularLoader />

    if (error) return `ERROR: ${error.message}`
    
    return <div id="wrapper">
        <ul>
            {data.maps.maps.map(favoriteDetails => (
                <DashBoardItem 
                    key = {favoriteDetails.displayName}
                    favoriteDisplayName={favoriteDetails.displayName} 
                    favoriteLink={"/dhis-web-maps/?id=" + favoriteDetails.id}
                    contextPath={data.systemInfo.contextPath}
                    type={globe_c}
                />
            ))}
            {data.pivot.reportTables.map(favoriteDetails => (
                <DashBoardItem 
                    key = {favoriteDetails.displayName}
                    favoriteDisplayName={favoriteDetails.displayName} 
                    favoriteLink={"/dhis-web-pivot/?id=wp86U5zU4X3"  + favoriteDetails.id}
                    contextPath={data.systemInfo.contextPath}
                    type={rutenett_c}
                />
            ))}
            {data.charts.charts.map(favoriteDetails => (
                <DashBoardItem 
                    key = {favoriteDetails.displayName}
                    favoriteDisplayName={favoriteDetails.displayName} 
                    favoriteLink={"/dhis-web-visualizer/?id=wp86U5zU4X3"  + favoriteDetails.id}
                    contextPath={data.systemInfo.contextPath}
                    type={graph_c}
                />
            ))}
        </ul>
    </div>  
}



