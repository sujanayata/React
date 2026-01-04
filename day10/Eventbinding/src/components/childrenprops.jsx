import React from "react";
export class ChildProps extends React.Component {
    render(){
        return(
            <>
            {/* <div style={{textAlign:"center",margin:"20px",width:"200px",height:"510px",border:"2px solid blue",backgroundColor:"blue",color:"white"}}>
            <h2>{this.props.name}</h2>
            <h2>{this.props.age}</h2>
            <h2>{this.props.place}</h2>
            <h2>{this.props.salary}</h2>
            {/* <h2 style={{color:"black"}}>{this.props.skills}</h2> */}
          
           
            {/* <h3>Skills:</h3>
            <ul>
                {this.props.skills && this.props.skills.map((skill,index)=>(
                    <li key={index}>{skill}</li>
                ))}
            </ul>
           
            
          
            <h1 style={{color:"black"}}>{this.props.children}</h1>
            </div> */} 

            <ol>
                {
                    this.props.student?.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ol>

            </>
        )
    }


}
  