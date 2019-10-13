import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader } from '@dhis2/ui-core'
import  ReportItem from './ReportItem'
import '../ReportList.css'

export const ReportList = () => {
    const query = { user: { 
        resource: 'me', 
        fields: 'userCredentials[username], organisationUnits[id,name]' 
        },
    }

    const { loading, error, data } = useDataQuery(query)

    if (loading) return <CircularLoader />
    if (error) return `ERROR: ${error.message}`
    
    return (<InnerComponent user={data.user}/>) //Chained API request workaround
}

const InnerComponent = ({ user, }) => {

    function fixMonths(monthNumber){
        monthNumber = monthNumber + 1
        if(monthNumber>9) return (monthNumber)
        return "0" + (monthNumber)
    }

    let userName = user.userCredentials.username
    let orgUnit = user.organisationUnits[0].id 
  
    const sqlQuery = {
        deadlines: { 
            resource: 'sqlViews/QRQfetddfm9/data.json', 
            var: 'org:' + orgUnit 
        }, 
        unknown: { 
            resource: 'sqlViews/PBo1iX5EiZV/data.json', 
            var: 'user:' + userName 
        }, systemInfo: {
            resource: 'system/info'
        },
    }

    const { loading, error, data } = useDataQuery(sqlQuery)
    const today = new Date()
  
    if (loading) return <CircularLoader />
    if (error) return `ERROR: ${error.message}`

    console.log(data)

    return (
        <nav id="wrapper">{
            data.deadlines.listGrid.rows.map(deadlineDetails => (
              <ol>
                <ReportItem key = {deadlineDetails[0]}
                            reportName={deadlineDetails[0]} 
                            dueDate={(today.getDate() + deadlineDetails[2]) + "." + (fixMonths(today.getMonth()))}
                            untillDeadline={deadlineDetails[2]}
                            reportLink={"/dhis-web-dataentry/index.action?organisationUnitId=" + deadlineDetails[4] + "&dataSetId=" + deadlineDetails[1]}
                            contextPath={data.systemInfo.contextPath}
                />
              </ol>
            ))
            }
        </nav>  
    )
  }
