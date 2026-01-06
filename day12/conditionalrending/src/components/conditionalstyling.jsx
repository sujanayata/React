import React from 'react';
export class Conditionalstyling extends React.Component {
    constructor(){
        super();
        this.state={
            isloggedin:false
        }

    }
    render(){
        if(this.state.isloggedin){
            return <h1 style={{color:"blue"}}>logged in successfully</h1>
        }
        else{
            return <h1 style={{color:"red"}}>please login first</h1>
        }
    }   
}    