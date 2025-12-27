export default function Import1(){
    return(
        <>
       <h1 style={{background:"black",color:"green",textAlign:"center",margin:"10px",padding:"10px"}}>React lets you build user interfaces out of individual pieces called components.
         Create your own React components like Thumbnail, LikeButton, 
         and Video. Then combine them into entire screens, pages, and apps.</h1> 
         <p style={{backgroundColor:"purple",color:"white"}}>hello world</p>
      

         </>
    ) 
}

export function Content1(){
    return(
        <>
        <h2 style={{color:"red",backgroundColor:"yellow",textAlign:"center",margin:"10px",padding:"10px"}}>i love my friends</h2>
        </>
    )
}
export function Footer(){
    return(
        <>
        <h1 style={{backgroundColor:"pink",color:"blue",padding:"20px",margin:"10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorum aperiam praesentium inventore neque obcaecati velit
            impedit fuga ab odio incidunt. Quibusdam illo deleniti fugit
            sed debitis in. Perspiciatis, at quibusdam.</h1>
           <p>sreevani is mental</p> 
        </>
    )
}

export function Content2(){
    return(
        <>
        <h2 style={{color:"red",backgroundColor:"yellow",textAlign:"center",margin:"10px",padding:"10px"}}>i love my friends</h2>
        </>
    )
}

export const Box=()=>{
    return(
        <marquee scrollamount="30" direction="right" behavior="alternate" style={{color:"aqua",backgroundColor:"purple",margin:"10px",padding:"10px",fontSize:"40px"}}>Products are available in the box</marquee>
    )
}


