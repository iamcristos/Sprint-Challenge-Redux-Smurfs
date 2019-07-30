import React from 'react';
import { connect } from 'react-redux';
import {fetchAddSmurfs} from '../actions'
import PropTypes from 'prop-types';

const AddSmurf = (props)=>{
    const Smurfname = React.createRef();
    const Smurfage = React.createRef();
    const Smurfheight = React.createRef()
    const onSubHandler = (e)=>{
        e.preventDefault()
        const name = Smurfname.current.value;
        const age = Smurfage.current.value;
        const height = Smurfheight.current.value;
        if(name.trim() && age.trim() && height.trim()) {
          const data= {name, age, height}
          props.fetchAddSmurfs(data);
        }
    }
    return (
        <form onSubmit={(e)=> onSubHandler(e)}>
            <input type="text" placeholder="name" ref={Smurfname}/>
            <input type="text" placeholder="age" ref={Smurfage}/>
            <input type="text" placeholder="height" ref={Smurfheight}/>
            <button>Add</button>
        </form>
    )
}

export default connect(null, {fetchAddSmurfs})(AddSmurf);

AddSmurf.propTypes = {
    fetchAddSmurfs: PropTypes.func
}

