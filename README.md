# React_Launch_Program_List
# Getting started

To get the frontend running locally: http://localhost:3000/#/launch/programs/
<ul>
<li>Clone this repo </li>
	<li>npm install to install all req'd dependencies</li>
	<li>npm start to start the local server (this project uses create-react-app)</li>
<li>Local web server will use port 3000. You can configure port in scripts section of package.json: we use cross-env to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.</li>
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
</ul>

# Screenshot attached

