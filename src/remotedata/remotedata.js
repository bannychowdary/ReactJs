import React from 'react';
import axios from 'axios';
import Friend from './friend';

class RestAPI extends React.Component {


    constructor(props){
        super(props)
        this.state={friends:[]}
        
        this.getRemoteData= this.getRemoteData.bind(this)

    }

    

    componentWillMount(){
        this.getRemoteData()
    }

    getRemoteData(){

        console.log("axios will call rest api");
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((responsedata)=>{
            console.log(responsedata)
            console.log(this.state.friends)
            console.log(responsedata.data)
            this.setState({friends:responsedata.data})
            console.log("Dumbing this.state.friends")
            console.log(this.state.friends)


        })
    }
   
    displayFriends(){
        console.log("Friends will display here!!!")
        return this.state.friends.map((f)=>{

            return(
                <Friend 
                key={f.id}
                nm={f.name}
                em={f.email}
                >
                </Friend>
            )
        }


        )
    }

    render() { 
        return (
            <div>
                <h1>Data wil lcome from rest api</h1>
                <table border="2">{this.displayFriends()}</table>
              </div>

          );
    }
}
 
export default RestAPI;


