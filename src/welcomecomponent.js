import React from 'react'

class Welcome extends React.Component{
render(){

    return(
        <div>
        <h1>{this.props.msg} from {this.props.children} captiol of {this.props.city}</h1>
        </div>
    )
}

}

export default Welcome