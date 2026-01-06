import './styling.css'
export function Condstyling(){
    const isloggedin=true;
    return(
        <div>
            {
               isloggedin? <p>successfully logedin</p>: <p>please login first</p>
            }
        </div>
    )

}