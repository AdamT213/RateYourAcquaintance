import React, { Component } from 'react'; 

export class Review extends Component {  
    
  render() { 
    //TODO Make star ratings appear with actual stars
    
      return( 
        <div className= "App">
          <li>Star_Rating: {this.props.star_rating}</li> 
          <li>Description: {this.props.description}</li>  
        </div>
      ); 
    }
  }

export default Review;