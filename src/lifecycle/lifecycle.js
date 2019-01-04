import React from 'react';

class Lifecycle extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            Lifecycle:0
        }
        
    }

    componentWillMount(){

        console.log("life cycle componene will mount")

    }

    componentDidMount(){

        console.log("Ls component has mounted")
    }

    componentWillUpdate(){

        console.log("LS componenet will update now")
    }

    render() { 
        
        return ( 
            <div>

                <h1>Exploring componenet life cycle!!!</h1>

            </div>

         );
    }
}
 
export default Lifecycle;