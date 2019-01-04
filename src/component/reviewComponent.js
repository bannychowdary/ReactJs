import React from 'react';
import Title from './title';
import Rating from './rating';
import Description from './description'

class Review extends React.Component {
   
    render() { 
        return (
            <div>
                    revide Component building block 
                    like- title, description, rating,
                    will come here

                    <br></br>
                    <b>title:</b> <Title mytitle={this.props.title}></Title>
                    <br></br>
                    
                    <b>Description: </b> <Description mydesc={this.props.desc}></Description>
                    <Rating myrating={this.props.Rating}></Rating>
            </div>



          )
    }
}
 
export default Review;