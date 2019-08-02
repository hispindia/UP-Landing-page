import React from 'react';
import './App.css';
import MenuItem from './menuItem.js';
//import responseData from "./up-response.json";
import {dhisRequest} from "./api";




class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      apps: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
      dhisRequest("dhis-web-commons/menu/getModules.action", "GET").then(result => {
        this.setState({
          apps: result.modules,
          isLoaded: true,
        })
      })
  }
  render () {  
    let {apps, isLoaded} = this.state;

    if(!isLoaded){
      return <div>Loading...</div>
    } else{  
      return <nav id="wrapper">{
        apps.map(appDetails => (
          <MenuItem key = {appDetails.name}
                    appDisplayName={appDetails.displayName} 
                    appName={appDetails.name} 
                    appIcon={appDetails.icon} 
                    appLink={appDetails.defaultAction} 
          />
        )
          
      )}</nav>
    }
  };
}

export default App;
