import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {fetchSmurfs, fetchAddSmurfs, fetchDeleteSmurfs} from '../actions'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props){
    super(props)
    this.name = React.createRef();
    this.age = React.createRef();
    this.height = React.createRef()
  }

  componentDidMount(){
    this.props.fetchSmurfs()
  }

  onSubHandler = (e)=>{
    e.preventDefault()
    const name = this.name.current.value;
    const age = this.age.current.value;
    const height = this.height.current.value;
    if(name.trim() && age.trim() && height.trim()) {
      const data= {name, age, height}
      this.props.fetchAddSmurfs(data);
    }
  }

  onDeleteHandler = (e)=>(id)=>{
    e.preventDefault()
    this.props.fetchDeleteSmurfs(id)
  }
  render() {
    const {smurfs} = this.props;
    return (
      <div className="App">
        <div className="Container">
          {smurfs && smurfs.map(smurf=>(
              <div key={smurf.id} className="Smurfs">
                <h2>{smurf.name}</h2>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
                <button onClick={(e)=>this.onDeleteHandler(e)(smurf.id)}>Delete</button>
              </div>
          ))}
        </div>
        <div className="Container">
          <form onSubmit={(e)=> this.onSubHandler(e)}>
            <input type="text" placeholder="name" ref={this.name}/>
            <input type="text" placeholder="age" ref={this.age}/>
            <input type="text" placeholder="height" ref={this.height}/>
            <button>Add</button>
          </form>
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
