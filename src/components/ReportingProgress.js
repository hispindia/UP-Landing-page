import React from 'react';
import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader } from '@dhis2/ui-core'
import ProgressBar from '../components/ProgressBar'
import ReportingText from "./ReportingText"
import '../index.css'



export const ReportingProgress = () => {
  const query = { user: { 
    resource: 'me', 
    fields: 'userCredentials[username], organisationUnits[id,name]' 
    },
  }

  const { loading, error, data } = useDataQuery(query)
  
    if (loading) return <CircularLoader />
    if (error) return `ERROR: ${error.message}` 
    return (<InnerComponent user={data.user} /> )
}


const InnerComponent = ({ user }) => {

  let userName = user.userCredentials.username
  let orgUnit = user.organisationUnits[0].id 

  const sqlQuery = {
      reported: { 
          resource: 'sqlViews/ufQLxBN5Gwk/data.json', 
          var: 'user:' + userName 
      }, 
      total: { 
          resource: 'sqlViews/aL70Z2xG6ke/data.json', 
          var: 'org:' + orgUnit 
      } 
  }

  const { loading, error, data } = useDataQuery(sqlQuery)


  if (loading) return <CircularLoader />
  if (error) return `ERROR: ${error.message}`

  let reportedCount = parseInt(data.reported.listGrid.rows[0][0], 10)
  let totalReports = parseInt(data.total.listGrid.rows[0][0], 10)

  return (
    <div id="wrapper">
      <ProgressBar data = {reportedCount} total = {totalReports}/>
      <ReportingText ReportedCount = {reportedCount} TotalReports = {totalReports}/>
    </div> 
  )

  
}



