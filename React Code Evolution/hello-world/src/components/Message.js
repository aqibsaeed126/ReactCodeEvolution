import React, {Component} from 'react'

class Message extends Component {

    constructor() {
        super();
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for Subscription'
        })
    }
    render() {
        return (
            <div>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
               <h1>{this.state.message}</h1> 
            </div>
            
        )
    }
}

export default Message;