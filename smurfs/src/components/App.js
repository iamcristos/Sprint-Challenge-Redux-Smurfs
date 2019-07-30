import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {fetchSmurfs, fetchAddSmurfs, fetchDeleteSmurfs} from '../actions';
import PropTypes from 'prop-types';
import AddSmurfs from './addSurf'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount(){
    this.props.fetchSmurfs()
  }

  onDeleteHandler = (e)=>(id)=>{
    e.preventDefault()
    this.props.fetchDeleteSmurfs(id)
  }
  render() {
    const {smurfs} = this.props;
    return (
      <div className="App">
        <div className="Container" style={{width:'60%'}}>
          {smurfs && smurfs.map(smurf=>(
              <div key={smurf.id} className="Smurfs">
                <span style={{color:"Red"}}
                onClick=
                {(e)=>this.onDeleteHandler(e)(smurf.id)
                }>X</span>
                <div style={{marginLeft:'30%', textAlign:"center"}}>
                  <h2>{smurf.name}</h2>
                  <p>{smurf.age}</p>
                  <p>{smurf.height}</p>
                  <button>Update</button>
                </div>
              </div>
          ))}
        </div>
        <div className="Container" style={{width:'30%'}}>
          <AddSmurfs/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs : state.smurfs,
  error : state.error,
  loading : state.loading
})

export default connect(mapStateToProps, {
  fetchSmurfs, fetchAddSmurfs, fetchDeleteSmurfs
})(App);

App.propTypes = {
  fetchAddSmurfs: PropTypes.func,
  fetchDeleteSmurfs: PropTypes.func,
  fetchSmurfs: PropTypes.func,
  smurfs: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool,
}
