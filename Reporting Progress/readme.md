# Reporting Progress
This widget displays a horizontal bar graph that represents the reporting progress for the orgUnit assigned to the user. This in hopes to entice users to reach 100% reporting completeness. In addition to the bar graph, the user is presented with a text box stating how many reports of the current total that has been completed.

## Setup
There are some extra steps in addition to the general setup procedure described in the root of this repo to get this widget up and running, due to its utilization of DHIS2's "SQL View" Feature. As the needed information isn't readily available through standard API calls, we need to configure a SQL View to access the needed information through our API calls. 
You thus need to configure a SQL View and update the SQL View variable in the code with the created SQL View ID. The creation of a SQL View can quickly be done through the SQL View interface found under the "Other" section of the Maintenance app. 

The SQL Query we utilized on our instance looks like this. However, slight tweaks *might* be needed dependant on your instance. 

```SQL
 Select * 
 ```
