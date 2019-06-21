import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {fetchSmurfs} from '../actions'
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
  render() {
    const {smurfs} = this.props;
    return (
      <div className="App">
        {smurfs && smurfs.map(smurf=>(
          <h2></h2>
          
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs : state.smurfs
})

export default connect(mapStateToProps, {
  fetchSmurfs,
})(App);
