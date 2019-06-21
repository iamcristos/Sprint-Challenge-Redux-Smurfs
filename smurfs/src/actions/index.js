import axois from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const ADDSMURF = 'ADDSMURF';
export const GETSMURFS = 'GETSMURFS';
export const UPDATESMURF = 'UPDATESMURF';
export const DELETESMURF = 'DELETESMURF';
export const LOADING = 'LOADING';
export const FETCH_ERROR = 'FETCH_ERROR';

const getSmurf = (smurfs)=>({
  type: GETSMURFS,
  payload: smurfs
});

const loading = (bool)=>({
  type: LOADING,
  payload: bool
})

const fetchError = (error)=>({
  type: FETCH_ERROR,
  payload: error
})

export const fetchSmurfs=()=>async dispatch =>{
  dispatch(loading(true))
  try {
    const response = await axois.get('http://localhost:3333/smurfs')
    dispatch(getSmurf(response.data))
  } catch (error) {
    dispatch(fetchError(error.message))
  }finally{
    dispatch(loading(false))
  }
}
