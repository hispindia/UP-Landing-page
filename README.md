# Custom DHIS2 Dashboard Widgets
![Sample Dashboard screenshot](https://i.imgur.com/mOBt2va.png)
This repo contains several custom dashboard widgets for [DHIS2](https://www.dhis2.org/). The example shows multiple of the widgets configured and assembled in a sample dashboard. 

---

# The notion of a "Landing Page."

In the state of Uttar Pradesh, India, we saw a need to make some adjustments towards how end-users at different levels interact and use DHIS2. Based on the reported hardships of navigation and ease of use from the field, created a notion of a landing page dashboard. The gist of the "landing page" is that each user group can get a custom dashboard highlighting items of particular value to the respective user groups. We have thus started to create dashboard widgets that have the potential to fit into the notion of a user corresponding default dashboard.

## Widget description

### Your Profile (2.30 -> 2.33)
Displays the current users profile details. 

### Upcoming Deadlines (2.30)
Shows the user the respective month's upcoming deadlines according to the assigned organizational unit for the current user. 

TODO: Take the user to the respective report ```onClick()```

### Your Favorites (2.30)
Displays a list of dashboard widgets assigned to the user, in combination with their app type (Map, Pivot, Chart). A navigation icon to the corresponding favorite is also displayed to afford users a shortcut to that particular view, in hope to ease navigation and use of pre-configured favorite dashboards. 

TODO: Make users able to 'heart' their favorite dashboard widget shortcuts, and list them in the top.

### Your Applications (2.30)
Lists all applications assigned to the current user, with the ability to quickly open the respective apps. The order shown is based on the default navigation. Changes made by the user to the sequence in the default navigation menu are reflected automatically in the dashboard widget. 

### Reporting Progress (2.30)
Shows a bar graph with the reporting progress of the facility assigned to the user. The bar graph displays current reporting progress where the reported count is used as numerator and the total count of reports assigned as the denominator.

### Bulletin
Displays a list of all bulletins shared with the user. The respective bulletins can be viewed by the user when clicking on the respective list elements. 

---

# Implementing widgets
All widgets work stand-alone; thus, you can implement whatever widget that suits your needs. A more detailed description is outlined in the respective widgets readme files, as there are some slight differences in selected widgets. 

## Manifest
A manifest gets created upon building the project. The details of the manifest can be changed in the ```package.json``` files, respectively. 

## Prerequisites
### SQL Views
Some of the widgets rely on created SQL views in order to fetch the particular information needed through the API. The SQL views used are described in the respective widgets readme files. 

## Deploy Widgets to DHIS2
1. Change API version in ```/src/index.js```
2. Run ```$ npm install```
3. Run ```$ npm build```
4. Upload the generated ZIP-file through the "App Management" app in DHIS2

## Create Dashboards with Widgets
The creation of dashboards containing your newly implemented custom dashboard widgets is done in a similar fashion as any native dashboard widget. The custom dashboard widgets can be found under the "Apps" section, or by searching for the widgets name in the dashboard app search bar.


## Running the app locally
1. Change the development server URL in the /scr/index.js file. 
2. Navigate to the respective widgets root folder and run:
```bash
$ npm install
$ npm run
```
3. Navigate to the development server and log in
4. Finally, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser.


## Buildt With
* [React](https://reactjs.org/)
* [Create-react-app](https://create-react-app.dev/)
* [DHIS2 Application Runtime](https://github.com/dhis2/app-runtime)

* [Bestzip](https://www.npmjs.com/package/bestzip) - Dev Dependancy
* [D2-Manifest](https://www.npmjs.com/package/d2-manifest) - Dev Dependancy
* [Rimraf](https://www.npmjs.com/package/rimraf) - Dev Dependancy


## Versioning
These widgets are built primarily with DHIS2 version 2.30 in mind. However, they are also tested to work with 2.31, 2.32, and 2.33. Other versions might be compatible but are not guaranteed. 

NB! Make sure to change the API version according to your instance in the respective ```/src/index.js``` files. 

---

# Licensing






