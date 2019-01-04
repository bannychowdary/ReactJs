import React from 'react';

 class Rating extends React.Component {
    
    constructor(props){
        super(props)

        this.state={
            score:0,
            rating:this.props.myrating

        }

        this.increaseRating = this.increaseRating.bind(this)
        this.decreaseRating = this.decreaseRating.bind(this)
        this.increseScore = this.increseScore.bind(this)
    }

    increaseRating(){

        console.log("score value:" +this.state.score)
        this.setState({score: this.state.score + 1})
        this.setState({rating:Number(this.state.rating) + 1})
    }
    increseScore(){
        console.log("score value:" +this.state.score)
        this.setState({score: this.state.score + 1})

    }

    decreaseRating(){
        this.setState({rating:Number(this.state.rating) - 1})

    }
    
     render() { 
         return ( 
                <div>
                    <button onClick={this.increaseScore}>+</button>
                    8
                    <button onClick ={this.decreaseRating}>-</button>
                    {this.props.myrating}
                   
                    Score: {this.state.score}
                   </div> 
                


          );
     }
 }
  
 export default Rating;