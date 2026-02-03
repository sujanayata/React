import { useState,useEffect } from "react";

export function Demo(){
    const [videoName,setVideoName]=useState("SUJANA BABUDAS")
    const [videoLikes, setVideoLikes]=useState(95);

    useEffect(()=>{
        console.log("component reloaded!")

    },[])
    
    useEffect(()=>{
        console.log("Video likes updated")
    },[])

    return(
        <>
        <h1>Heloo!</h1>
        <h5>Video Name : {videoName}</h5>
        <h5>Likes : {videoLikes}</h5>
        <button onClick={()=>{setVideoLikes(videoLikes+1)}}>Like Video</button>
        <button onClick={()=>{setVideoLikes(videoLikes-1)}}>DisLike Video</button>
        {
            videoLikes>=100 &&
            <p>hey! people are liking the video</p>
        }
       
        </>
    )



}