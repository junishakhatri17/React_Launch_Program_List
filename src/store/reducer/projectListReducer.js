export const userConstants = {
    FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR: 'FETCH_PRODUCTS_ERROR',
  };
  
  const initialState = {
    projectList:{}
  };
  
  export function projectListReducer(state = initialState, action) {
    switch(action.type) {
        case userConstants.FETCH_PRODUCTS_SUCCESS:
                return {...state, projectList: action.res.data}
            
        case userConstants.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                error: action.error
            }
        default: 
            return state;
    }
  }
  
  