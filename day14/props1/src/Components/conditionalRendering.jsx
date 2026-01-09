
export function ConditionalRendering({isloggedIn}) {
    // if (isloggedIn) {
    //     return <h2>Welcome back!</h2>;
    // } else {
    //     return <h2>Please log in.</h2>;
    
    // }
    return (
        <>
        {/* {isloggedIn ? <h2>Welcome back!</h2> : <h2>Please log in.</h2>} */}
        {isloggedIn && <h2>Welcome back!</h2>}
        </>
    )
}