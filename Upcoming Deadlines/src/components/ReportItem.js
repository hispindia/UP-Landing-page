import React from 'react';
import '../ReportItem.css'

class ReportItem extends React.Component {
    
    render(){
        let {reportName, untillDeadline, dueDate, reportLink, contextPath} = this.props;
        
        return <a href={contextPath + reportLink} target="_parent">
            <li>
                <div id="date">{dueDate} - </div>
                <div id="days" style={{color: (untillDeadline>3) ? 'black' : 'red'}}>in {untillDeadline} days</div>
                <div id="title">{reportName}</div>
            </li>
        </a>
    }
  }
  export default ReportItem;