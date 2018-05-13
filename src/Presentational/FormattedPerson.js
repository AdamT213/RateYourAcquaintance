import React, { Component } from 'react'; 
import Review from './Review'; 
import Rater from 'react-rater'

export class FormattedPerson extends Component {  
    
  render() { 

    const reviews =  this.props.reviews.map((review, index) => {
    return <Review star_rating={review.star_rating} description={review.description} key={index} />}); 

    var average_star_rating = function(){ 
      let totalStars = 0
      this.props.reviews.forEach((review) => { 
        totalStars += review.star_rating 
      }) 
      return totalStars/this.props.reviews.length
    }
    
      return( 
        <div className= "container">
          <p>Name: {this.props.name}</p><br />
          <p>Description: {this.props.description}</p><br /> 
          <p>Location: {this.props.location}</p><br />  
          <p>Average Star Rating: <Rater total={5} rating={average_star_rating}
          interactive={false}/> average_star_rating</p>
          <ul> 
            {reviews} 
          </ul><br /> 
        </div>
      ); 
    }
  }

export default FormattedPerson;