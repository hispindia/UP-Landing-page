import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader } from '@dhis2/ui-core'
import  ReportItem from './ReportItem'
import '../ReportList.css'


const query = { systemInfo: {
        resource: 'system/info'
    },
    apps: { 
        resource: 'action::menu/getModules', 
        fields: 'name, displayName, icon, defaultAction' 
    } 
}


function fixMonths (monthNumber){
    monthNumber = monthNumber + 1
    if(monthNumber>9) return (monthNumber)
    return "0" + (monthNumber)
}

export const ReportList = () => {
    const { loading, error, data } = useDataQuery(query)

    if (loading) return <CircularLoader />

    //if (error) return `ERROR: ${error.message}`

    const today = new Date()
    const todayString = today.getDate() + "." + fixMonths(today.getMonth())
    
    console.log("Feilmelding=" + error + ". Innhold=" + data + ".")
    
    return <nav id="wrapper">{
        //data.apps.modules.map(appDetails => (
          <ol>
            <ReportItem //key = {appDetails.name}
                        reportName="Form 05 - DHQ STOCK UPHMIS Data Set" 
                        todaysDate={todayString}
                        dueDate={15.09}
                        reportLink={"#"}
                        //reportLink={appDetails.defaultAction} 
                        //contextPath={data.systemInfo.contextPath}
            />
            <ReportItem //key = {appDetails.name}
                        reportName="Form 16 - DHQ DOHC Annexure VI Data Set" 
                        todaysDate={todayString}
                        dueDate={18.09}
                        reportLink={"#"}
                        //reportLink={appDetails.defaultAction} 
                        //contextPath={data.systemInfo.contextPath}
            />
            <ReportItem //key = {appDetails.name}
                        reportName="Form 21 - DHQ RBSK - 3 Target Input Yearly" 
                        todaysDate={todayString}
                        dueDate={30.09}
                        reportLink={"#"}
                        //reportLink={appDetails.defaultAction} 
                        //contextPath={data.systemInfo.contextPath}
            />
          </ol>
        //))
        }
    </nav>  
}


