import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';



class Message extends Component {
  render(){
    return (
        <h3>
         <span className="badge amber darken-2">{this.props.message}</span>
        </h3>
    );
  }
}

const mapStateToProps = state => {
  return {
    message:state.message
  }
}
const mapDispatchToProps = (dispatch,props) => {
  return {
    
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Message);
