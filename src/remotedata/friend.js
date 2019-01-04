import React from 'react';

 class Friend extends React.Component {
     
    getFriendDetail(){

    console.log("Friends details will display here")
    }

     render() { 
         return (  
             
               
                    <tr>
                        <td onClick={this.getFriendDetail}>{this.props.nm}</td>
                      <td>{this.props.em}</td>
                      </tr>

                 

             
         );
     }
 }
  
 export default Friend;