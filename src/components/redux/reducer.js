import employees from '../data/employee';

const empReducer = function emp(state=employees,action){
     console.log(" reducert  ",action)
     switch (action.type){
          case 'REMOVE_EMP' : return [...state.slice(0,action.index),...state.slice(action.index+1)]
          case 'ADD_EMP' : return [...state,action.data]
          case 'UPDATE_APP' : return [...state.slice(0,action.index),action.data,...state.slice(action.index+1)]
          default : return state;
     }
    // return state;
}

export default empReducer;