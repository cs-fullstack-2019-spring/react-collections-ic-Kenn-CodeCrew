import React, { Component } from 'react';
import ToDo from "./ToDo";

class ToDoCollector extends Component{
    render(){
        const toDoMap = this.props.rawData.map(
            (eachElement)=>{
                return(<ToDo key={eachElement.id} element={eachElement}/>);
            }
        );

        return(
            <div>{toDoMap}</div>
        );
    }
}

export default ToDoCollector;