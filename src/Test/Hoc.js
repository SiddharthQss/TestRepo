import React, { Component } from 'react';

const HOC = (InnerComponent) => class extends React.Component{
    render(){
        return(
            <InnerComponent
                {...this.props}
            />
        );
    }
}


class TestHoc extends Component{
    render(){
        return(
            <div>
                <Lable/>
                <button>button</button>
                <LableHOC>label</LableHOC>
            </div>
        );
    }
}
class Lable extends Component{
    render(){
        return(
         <h1>{this.props.children}</h1>
        );
    }
}
const Button = HOC((props) => <button>{props.children}</button>)
const LableHOC = HOC(Lable);
export default TestHoc;