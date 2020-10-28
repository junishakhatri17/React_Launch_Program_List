import axios from 'axios';
import history from '../history'

export const userConstants = {
  FETCH_PRODUCTS_PENDING :'FETCH_PRODUCTS_PENDING',
  FETCH_PRODUCTS_SUCCESS : 'FETCH_PRODUCTS_SUCCESS'
}
  export const userActions = {
    LaunchYearDetails
    };

function LaunchYearDetails(landing_success, launch_success, launch_year) {
  return dispatch => {
      dispatch(request());
      return axios.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success='+ launch_success + '&land_success='+ landing_success + '&launch_year='+ launch_year)
          .then(
            res => { 
                dispatch(success(res));
                history.push(`/launch/programs/launch_success=${launch_success}&land_success=${landing_success}&launch_year=${launch_year}`);
              },
          );
  };
function request(res) { return { type: userConstants.FETCH_PRODUCTS_PENDING, res } }
function success(res) { return { type: userConstants.FETCH_PRODUCTS_SUCCESS, res } }
}


