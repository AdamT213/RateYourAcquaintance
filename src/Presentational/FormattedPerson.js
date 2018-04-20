import React, { Component } from 'react'; 
import Review from './Review';

export class FormattedPerson extends Component {  
    
  render() { 

    const reviews =  this.props.reviews.map((review, index) => {
    return <Review star_rating={review.star_rating} description={review.description} key={index} />});
    
      return( 
        <div className= "container">
          <li>Name: {this.props.name}</li><br />
          <li>Description: {this.props.description}</li><br /> 
          <li>Location: {this.props.location}</li><br /> 
          <li>Reviews: <ul> 
            {reviews} 
            </ul> </li><br /> 
        </div>
      ); 
    }
  }

export default FormattedPerson;