import React, { Component } from 'react';

class ToDo extends Component{
    render(){
        return(
            <div>
                <p>PostID: {this.props.element.postId}</p>
                <p>id: {this.props.element.id}</p>
                <p>name: {this.props.element.name}</p>
                <p>email: {this.props.element.email}</p>
                <p>body: {this.props.element.body}</p>
                <hr/>
            </div>
        );
    }
}

export default ToDo;