import React, { Component } from 'react'; 
import Review from './Review';

export class FormattedPerson extends Component {  
    
  render() { 

    const reviews =  this.props.reviews.map((review, index) => {
    return <Review star_rating={review.star_rating} description={review.description} key={index} />});
    
      return( 
        <div className= "container">
          <p>Name: {this.props.name}</p><br />
          <p>Description: {this.props.description}</p><br /> 
          <p>Location: {this.props.location}</p><br /> 
          <li>Reviews: <ul> 
            {reviews} 
            </ul></li><br /> 
        </div>
      ); 
    }
  }

export default FormattedPerson;