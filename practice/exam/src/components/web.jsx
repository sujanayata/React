export default function Header(){
    return(
    <>
    <h1>Hello everyone</h1>
    <p>this is the header section</p>
    </>

    )
}
export function Footer(){
    return(
        <>
        <h1 style={{backgroundColor:"black",color:"orangered"}}>this is the footer section</h1>
        </>

    )
}

export function Listrendering(){
    const students=["Arya","Rahul","suppu","shannu"]
    return(
        <>
        
            <h1 style={{backgroundColor:"purple",color:"white",textAlign:"center"}}>Students list</h1>
         <ul type="none" style={{backgroundColor:"aqua",color:"red",textAlign:"center"}}>   
            {
               students.map((name)=>(
                    <li>{name}</li>

                ))
               
            }
        </ul>
        </>
    )
}

import "./style.css"
export function Card(){
    const products=[{
        name:"smartphone",price:"20k",description:"iphone"
    }
]
    return(
        <>
        <h1 className="head" style={{backgroundColor:"purple",color:"white",textAlign:"center"}}>Prodcut-List</h1>
        <ul className="card">
        {
            
            products.map((product)=>(
                
                <h1 style={{textAlign:"center",color:"aqua"}}>name:{product.name} price:{product.price} description:{product.description}</h1>

            ))
        }
        </ul>
        </>
    )
}




