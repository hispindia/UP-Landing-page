import React from 'react';
import '../ReportItem.css'

class ReportItem extends React.Component {
    
    render(){
        let {reportName, todaysDate, dueDate, reportLink, contextPath} = this.props;
        const remainingDays = dueDate - todaysDate
    
        return <a href={reportLink}>
            <li>
                <div id="date">{dueDate} - </div>
                <div id="days" className="red">in {remainingDays} days</div>
                <div id="title">{reportName}</div>
            </li>
        </a>
    }
  }
  export default ReportItem;