# Charts-data-Visualization-
This repository contains the code for the front-end task given as a part of interview at statsopt.It used a csv file to hold data to be visualised and charting library D3.js and C3.js.
 
## Instructions to setup 
This requires presence of NPM and Node.js on system.

To install these kindly refer to https://docs.npmjs.com/getting-started/installing-node

    1.) Clone this repo on your local system

    2.) Using a terminal switch to the folder where this repo is cloned and install following modules from npm.

        1.) Express  
            sudo npm install express
            
Node is basically used as a file server for this task so we can have data coming from server and being rendered at frontend into a timeseries graph.
            
Since now the System is Setup we can proceed to run the code to view the chart visualisation of the given data.

##Now to run the code 

    1.) Using the terminal type
    
            node server.js 
        
            This will start the server at localhost and port 8080 by default
            Make sure you are in the clonned repo while doing this
    
    2.) Now using a browser open 
    
            http://localhost:8080/ 
    
    3.) The chart of the data inside the file timeseries-Data.csv contained by data folder will be displayed and visualised as a timeseries chart.
