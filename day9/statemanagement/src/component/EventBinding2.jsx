import React  from "react";
export class EventBinding2 extends React.Component{
    constructor(){
        super()
        this.state={
            name:"soumya",
            gf:"Aneela"
        }
    }
    newname=()=>{
        this.setState({name:"sricharan"})
    }
    oldname=()=>{
        this.setState({name:"soumya"})
    }
    naveengf(){
        this.setState({
            gf:"lucky"
        })
    }

    render(){
        return(
            <>
            <h1>{this.state.name}</h1>
            <button onClick={this.newname}>newname</button>
            <button onClick={this.oldname}>oldname</button>
            <p>Naveen girlfriend : {this.state.gf}</p>
            {/* <button onClick={()=>{this.setState({gf:"nirosha"})}}>secgf</button> */}
            <button onClick={this.naveengf.bind(this)}>sec girlfriend</button>

            </>
        )
    }
}
