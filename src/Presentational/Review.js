import React, { Component } from 'react'; 
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

export class Review extends Component {  
    
  render() { 
    
      return(  
        <div className= "Review">
          <Rater total={5} rating={this.props.star_rating} 
          interactive={false}/>
          <p>{this.props.description}</p>   
        </div>
      ); 
    }
  }

export default Review;