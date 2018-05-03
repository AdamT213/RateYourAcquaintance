import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { addReview } from '../Actions/personActions'; 
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'



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
    event.preventDefault();
    const review = Object.assign({}, this.state); 
    const person = this.props.person;
    this.props.addReview(review, person); 
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
                      <label htmlFor="star_rating" className="col-md-4 control-label">Star Rating(0-5)</label>
                      <div className="col-md-5"> 
                      {/* working on using rater as only input */}
                        {/* <Rater total={5}
                        rating={this.onRate} 
                        name="star_rating" 
                        value= {this.rating}
                        onChange={this.handleOnChange.bind(this)}/> */}
                         <Rater total={5} rating= {this.state.star_rating} />
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
                        <textarea
                          className="form-control"
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