import axios from 'axios';
import history from '../history'
export const userConstants = {
  FETCH_PRODUCTS_PENDING :'FETCH_PRODUCTS_PENDING',
  FETCH_PRODUCTS_SUCCESS : 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_ERROR : 'FETCH_PRODUCTS_ERROR',
}

  export const userListActions = {
    GetProjectDetails
    };

function GetProjectDetails() {
  return dispatch => {
      dispatch(request());
      return axios.get('https://api.spacexdata.com/v3/launches?limit=100')
          .then(
            res => { 
                dispatch(success(res));
                history.push(`/launch/programs/`);
               
              },
              error => {
               dispatch(failure(error));
            }
          );
  };
function request(res) { return { type: userConstants.FETCH_PRODUCTS_PENDING, res } }
function success(res) { return { type: userConstants.FETCH_PRODUCTS_SUCCESS, res } }
function failure(error) { return { type: userConstants.FETCH_PRODUCTS_ERROR, error } }
}
