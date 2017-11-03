import React, { Component } from 'react';

class Hello extends Component{
    constructor(){
        super()
        this.state ={currentEvent : '---'}
        this.update = this.update.bind(this)
    }
    update(e){
        this.setState({currentEvent: e.type})
    }
    render(){
    debugger;
        return(
            <div>
            <textarea
            onKeyPress ={this.update}
            onFocus={this.update}
            onBlur={this.update}
            onCopy={this.update}
            onPaste={this.update}
            onClick={this.update}
            onMouseOver={this.update}
            />
            <h1>{this.state.currentEvent}</h1>
            </div>
        );
    }
}
export default Hello;