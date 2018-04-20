import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { addReview } from '../Actions/personActions'; 
import { Person } from '../Components/Person'


export class AddReviewForm extends Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      description: '',
      star_rating:'', 
    }
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleOnSubmit = event => { 
    const review = Object.assign({}, this.state);
    this.props.addReview(review); 
    this.props.history.push('/people/${this.props.person.name}')
    this.setState({
      description: '',
      star_rating:'', 
    });
  }

  render() { 

      return (
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="panel panel-default">
                <div className="panel-body">
                  <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                      <label htmlFor="name" className="col-md-4 control-label">Star_rating (0-5)</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          name="star_rating"
                          value={this.state.star_rating}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="description" className="col-md-4 control-label">Description (Explain your rating)</label>
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
                      <div className="col-md-6 col-md-offset-4">
                        <button type="submit" className="btn btn-default">Add Your Review!</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> 
      ); 
    }
  }

  function mapStateToProps(state){ 
    return {person: state.peopleReducer.person}
  }

export default connect(mapStateToProps, { addReview })(AddReviewForm);