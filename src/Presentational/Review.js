import React, { Component } from 'react'; 

export class Review extends Component {  
    
  render() { 

    const reviews =  this.props.reviews.map((review, index) => {
    return <Review star_rating={review.star_rating} description={review.description} key={index} />});
    
      return( 
      <div className= "App">
        <li>Star_Rating: {this.props.star_rating}</li> 
        <li>Description: ${this.props.description}</li>  
      </div>
      ); 
    }
  }

export default Review;