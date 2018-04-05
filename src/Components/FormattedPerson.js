import React, { Component } from 'react'; 
import Review from './Review';

class FormattedPerson extends Component {  
    
  render() { 

    const reviews =  this.props.reviews.map((review, index) => {
    return <Review star_rating={review.star_rating} description={review.description} key={index} />});
    
      return( 
      <div className= "App">
        <li>Name: {this.props.name}</li> 
        <li>Description: ${this.props.description}</li>  
        <li>Location: {this.props.location}</li> 
        <li>Reviews: <ul> 
          {reviews} 
          </ul> </li> 
      </div>
      ); 
    }
  }

export default FormattedPerson;