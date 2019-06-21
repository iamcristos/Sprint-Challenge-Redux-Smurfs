/*
  Be sure to import in all of the action types from `../actions`
*/
import * as actions from '../actions'

const initialState = {
  smurfs: [],
  loading: false,
  error: ''
}

const reducer = (state=initialState, action)=>{
  switch(action.type){
    case actions.GETSMURFS:
      return {
        ...state,
        smurfs: action.payload
      }
    case actions.LOADING:
      return {
        ...state, 
        loading:action.payload
      }
    case actions.FETCH_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case actions.ADDSMURF:
      return {
        ...state,
        smurfs: action.payload
      }
    case actions.DELETESMURF:
      return {
        ...state,
        smurfs: action.payload
      }
      default:
        return state
  }
}

export default reducer
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
