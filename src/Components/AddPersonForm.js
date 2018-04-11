import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { addPerson } from '../Actions/personActions'; 
import { Person } from './Person'


export class AddPersonForm extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      location:'', 
      fireRedirect: false,
    }
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleOnSubmit = event => { 
    const person = Object.assign({}, this.state);
    this.props.addPerson(person);
    this.setState({
      name: '',
      description: '',
      location:'', 
      fireRedirect: true,
    });
  }

  componentDidMount() {
    alert("The person you are searching for does not yet exist in our system. Please add their name, a physical description, and their city, state, and zip code.")
 }

  render() { 

    if (this.state.fireRedirect) {
      return (
        <Router> 
        <div>
          <Redirect to="/person-show"/>
          <Route path='/person-show' component={Person}/>
        </div>
        </Router> 
      ) 
    } else {
    
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
                      <label htmlFor="description" className="col-md-4 control-label">Physical Description</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          type="text"
                          name="description"
                          value={this.state.description}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="location" className="col-md-4 control-label">Location</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          type="text"
                          name="location"
                          value={this.state.location}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-6 col-md-offset-4">
                        <button type="submit" className="btn btn-default">Add Person to Archive</button>
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
} 


export default connect(null, { addPerson })(AddPersonForm);