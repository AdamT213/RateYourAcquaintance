import React, { Component } from 'react'; 
import Review from './Review'; 
import Rater from 'react-rater'

export class FormattedPerson extends Component {  
    
  render() { 

    const reviews =  this.props.reviews.map((review, index) => {
    return <Review star_rating={review.star_rating} description={review.description} key={index} />});  

      // function to find average star rating for a person, rounded off to two digits. Star ratings are still not saving as floats however, or at least not as fractional ratings
    var average_star_rating = function(){ 
      let totalStars = 0.0
      reviews.forEach((review) => { 
        totalStars += review.props.star_rating 
      }) 
      return (totalStars/parseFloat(reviews.length)).toFixed(2)
    }
    
      return( 
        <div className= "container">
          <p>Name: {this.props.name}</p><br />
          <p>Description: {this.props.description}</p><br /> 
          <p>Location: {this.props.location}</p><br />  
          <p>Average Star Rating: <Rater total={5} rating={average_star_rating()}
          interactive={false}/> {average_star_rating()}</p>
          <ul> 
            {reviews} 
          </ul><br /> 
        </div>
      ); 
    }
  }

export default FormattedPerson;