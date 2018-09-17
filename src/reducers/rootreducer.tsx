import { State } from '../models';


const initialState:State = {
	articles:[], 
	isFetching:false
};


export const rootReducer = (state: State, action) => {
	if (typeof state === 'undefined') {
    	return initialState;
  }
	switch (action.type) {
    case 'REQUEST_DATA':
    { 	
    	return Object.assign({}, state, {
      	isFetching : true
      })
    }
    case 'RECEIVE_DATA':
    { 	
    	return Object.assign({}, state, {
    		articles: action.json,
      	isFetching : false
      })
    }
  }
	return state;
};