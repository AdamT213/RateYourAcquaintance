import React, { Component } from 'react'; 
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

export class Review extends Component {  
    
  render() { 
    
      return( 
        <div className= "App">
          <Rater total={5} rating={this.props.star_rating} 
          interactive={false}/>
          {/* <li>Star_Rating: {this.props.star_rating}</li>  */}
          <li>Description: {this.props.description}</li>  
        </div>
      ); 
    }
  }

export default Review;