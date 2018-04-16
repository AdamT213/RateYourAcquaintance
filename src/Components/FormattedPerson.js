import React, { Component } from 'react'; 
import Review from './Review';

export class FormattedPerson extends Component {  
    
  render() { 

// figure out why this page doesn't render properly. probably something to do with mapping state of person to props

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