import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { findPerson } from '../Actions/personActions';  
import { Person } from './Person'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

export class FindPersonForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '', 
    }
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleOnSubmit = event => { 
    event.preventDefault();
    const person = Object.assign({}, this.state);
    this.props.findPerson(person); 
    this.props.history.push('/person-show')
    this.setState({
      name: '', 
    });
  }

  render() { 
      
      return (
        <div className= "App">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="panel panel-default">
                <div className="panel-body">
                  <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="col-md-4 control-label">Person's Name</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-6 col-md-offset-4">
                        <button type="submit" className="btn btn-default">Search</button>
                      </div>
                    </div>
                  </form> 
                </div>
              </div>
            </div>
          </div>
        </div> 
        </div>
      );
  }
} 

export default withRouter(connect(null, { findPerson })(FindPersonForm));