import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader } from '@dhis2/ui-core'
import '../UserProfile.css'
import Avatar from 'react-avatar';


const query = { systemInfo: {
        resource: 'system/info'
    },
    userInfo: { 
        resource: 'me', 
        fields: 'displayName, email, phoneNumber, employer, avatar' 
    },
}

export const UserProfile = () => {
    const { loading, error, data } = useDataQuery(query)

    

    if (loading) return <CircularLoader />

    if (error) return `ERROR: ${error.message}`
    
    return <div id="wrapper">
        <div id ="header">
            {(data.userInfo.avatar !== undefined)
             ? (<img className="profilePicture" alt="profile avatar" height="150" width="150" src={data.systemInfo.contextPath + "/api/fileResources/" + data.userInfo.avatar.id + "/data"} />) 
             : (<Avatar round={true} size={150} textSizeRatio={2} color={Avatar.getRandomColor('sitebase', ['#386692', '#1B998B', "#E15554", "#E1BC29", '#4D9DE0'])} name={data.userInfo.displayName} />)    
            }
            <h1 id="name">{(data.userInfo.displayName !== undefined) 
              ? (data.userInfo.displayName)
              : ("Add your name")
            }</h1>
            <h3 id="employer">{(data.userInfo.employer !== undefined) 
              ? (data.userInfo.employer)
              : ("Add where you work")
            }</h3>
        </div>

        <div id="content">
            <p id="phone">{(data.userInfo.phoneNumber !== undefined) 
              ? (data.userInfo.phoneNumber)
              : ("Add your phonenumber")
            }</p>
            <p id="email">{(data.userInfo.email !== undefined) 
              ? (data.userInfo.email)
              : ("Add your email")
            }</p>
        </div>

        <div id="footer">
            <a id="edit" target="_parent" href="/uphmis230/dhis-web-user-profile/#/profile">Edit your profile</a>
        </div>
    </div>  
}



