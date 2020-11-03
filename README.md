# React_Launch_Program_List
# Getting started

To get the frontend running locally: http://localhost:3000/#/launch/programs/ 
<ul>
<li>Clone this repo </li>
	<li>npm install to install all req'd dependencies</li>
	<li>npm start to start the local server (this project uses create-react-app)- npm run start</li>
<li>Local web server will use port 3000. You can configure port in scripts section of package.json: we use cross-env to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.</li>
	<li> npm install -g serve to start the server</li>
</ul>

# Making requests to the  API
For convenience, we have a API running at https://api.spaceXdata.com/v3/launches?limit=100 for the application to make requests against. We can fetch all the list items using axios from this api

For filter, we are using this api
https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014
This will fetch the results according to the filter applied.

# Functionality overview
The example application is a list fetching application.

General functionality:
<ul>
	<li>Fetching list on page load</li>
	<li>Filters can be applied on basis of launch year, launch success and landing success</li>
	<li>Server side rendering is implemented using express server, webpack, babel</li>
	<li>Responsive design for mobile, table and desktop</li>
	<li>Server side rendering is implemented to fetch the list</li>
</ul>

# Screenshot attached
<img width="905" alt="screenshot_3" src="https://user-images.githubusercontent.com/13212465/98029449-80ec4580-1e35-11eb-93c7-f25dfe1ddb99.PNG">

<img width="887" alt="screenshot_1" src="https://user-images.githubusercontent.com/13212465/98029702-f35d2580-1e35-11eb-92a3-cf7905b94fda.PNG">

<img width="895" alt="screenshot_4" src="https://user-images.githubusercontent.com/13212465/98030050-6ebed700-1e36-11eb-9dc2-09fcdc46d733.PNG">
<img width="320" alt="screenshot_5" src="https://user-images.githubusercontent.com/13212465/98031882-294fd900-1e39-11eb-80d3-09865dc2f533.PNG">

<img width="407" alt="screenshot_6" src="https://user-images.githubusercontent.com/13212465/98032004-58fee100-1e39-11eb-94c7-4b3947309700.PNG">



