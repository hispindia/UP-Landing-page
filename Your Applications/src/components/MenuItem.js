import React from 'react';
import Radium from 'radium';
import '../MenuItem.css'
import icon from '../defaultAppIcon.png';
//import icon from './icons/tracker.png'

class MenuItem extends React.Component {
    
    render(){
        let {appDisplayName, appName, appIcon, appLink, contextPath} = this.props;
        if(!appDisplayName){
            appDisplayName = appName
        }
    
        return <div>
            
            <div className="iconWrapper">
                <a className="itemLink" target="_parent" href={cleanURL(appLink, contextPath)}>
                    <img className="itemIcon" src={cleanURL(appIcon,contextPath)}></img>
                    <p className="itemName">{appDisplayName}</p>
                </a>
            </div>
        </div>
    }
  }
  export default MenuItem;

  function cleanURL(url, contextPath){
    if(!url.startsWith("..")) {
        console.log(url)
        return url
    }
    return contextPath + url.substring(2)
}