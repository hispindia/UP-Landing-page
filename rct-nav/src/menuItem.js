import React from 'react';
import './menuItem.css'
//import icon from './icons/tracker.png'

class menuItem extends React.Component {
    state = {
        reports: [],
    };


    render(){
        let {appDisplayName, appName, appIcon, appLink} = this.props;
        if(!appDisplayName){
            appDisplayName = appName
        }
    
        return <div>
            <div className="iconWrapper">
                <a className="itemLink" target="_parent" href={appLink}>
                    <img className="itemIcon" src={appIcon} alt=""></img>
                    <p className="itemName">{appDisplayName}</p>
                </a>
            </div>
        </div>
    }
  }

  export default menuItem;