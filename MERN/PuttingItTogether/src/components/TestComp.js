import React, {Component} from "react";

class TestComp extends Component{
    constructor(props){
        super(props);
        this.state={
            age:0
        }
    }
    render(){
        const increaseAge=()=>{
            console.log("birthday has past");
            this.setState({age: this.state.age + 1})
        }
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h1>hair: {this.props.hair}</h1>
                <h1>age: {this.state.age}</h1>
                <button onClick={increaseAge}>birthday</button>
            </div>
        )
    }
}
export default TestComp;