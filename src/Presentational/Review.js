import React, { Component } from 'react'; 

export class Review extends Component {  
    
  render() { 
    
      return( 
        <div className= "App">
          <li>Star_Rating: {this.props.star_rating}</li> 
          <li>Description: ${this.props.description}</li>  
        </div>
      ); 
    }
  }

export default Review;