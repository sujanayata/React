import React from "react";
export class Props extends React.Component{
    render(){
        return(
            <div>
              <div>
                 <h1>Employee Details</h1>
                 <p>EID : {this.props.eid}</p>
                 <p>ENAME :{this.props.ename} </p>
                 <p>ESalary : {this.props.esalary} </p>
                 <p>EDepartment :{this.props.edepartment} </p>
                 <p>Email :{this.props.eemail}</p>
                 <p>EAte : {this.props.eate?"Employee Eaten the food":"Employee eating manager brain"}</p>
                 <p>Eskills : {this.props.eskills}</p>
              </div>
            </div>
        )
    }

}