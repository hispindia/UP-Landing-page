import React from 'react';
import '../DashBoardItem.css';

import go from '../icons/export.svg'
import heart from '../icons/heart.svg'
// eslint-disable-next-line
import heart_c from '../icons/heart_c.svg'


//import icon from './icons/tracker.png'

class DashBoardItem extends React.Component {
    
    render(){
        let {favoriteDisplayName, favoriteLink, contextPath, type} = this.props;
       
    
        return <li>
            <img src={type}  className="appIcon" alt="Favorite button"/>
            <p>{favoriteDisplayName}</p>
            <a target="_parent" href={fullURL(favoriteLink, contextPath)}>
                <img src={go} className="small" alt="Open app button"/>
            </a>
            <img src={heart} className="small" alt="Favorite button"/>
        </li>
    }
}
export default DashBoardItem;


function fullURL(url, contextPath){
    return contextPath + url
}