
import "./Jscode.css"

function Jscode(){
    var person={
        name:"shanmukh",
        age:23,
        city:"hyd"

    }
    
    return(
        <div>
        <h2 className="header1">hello world</h2>
        <p className="para1">the {person.name} is {person.age} the loc {person.city}</p>
        <div>
            <h2 style={{color:"blue",backgroundColor:'orange',textAlign:"center"}}>today is monday</h2>
            <h2 style={{color:"red",backgroundColor:'black',textAlign:"center"}}>hello world</h2>
        </div>
        
        </div>
    )
}
export default Jscode;