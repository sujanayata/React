
function Listrendering(){
    const movies=["hii nanna","og","varsham","pournami"]
    return(
        <>
        <ul type="none">
            {
                movies.map((name,index)=>(
                    <li key={index}>{name}</li>

                ))
                
            }
        </ul>
        </>
    )
}
export default Listrendering;