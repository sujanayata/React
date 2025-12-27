import React from "react";
import "./App.css";



import img1 from "../image/img5.webp";
import img3 from "../image/img4.webp";
import img2 from "../image/img2.webp";




import video1 from "../video/video1.mp4";
import video2 from "../video/video2.mp4";
import video3 from "../video/video3.mp4";



function Multimedia(){
  return (
    <div className="app">
      <h1 className="title">🎬 Movie Zone</h1>

      <div className="movie-container">

      
        <div className="movie-card">
          <img src={img1} alt="Movie 1" />
          <h3>Nanna is super hero</h3>
          <p>Action-packed superhero movie full of thrill.</p>
          <video src={video1} controls />
        </div>

        <div className="movie-card">
          <img src={img2} alt="Movie 2" />
          <h3>Romantic Escape</h3>
          <p>A heart-touching romantic drama.</p>
          <video src={video2} controls />
        </div>

    
        <div className="movie-card">
          <img src={img3} alt="Movie 3" />
          <h3>Emotional </h3>
          <p>A spine-chilling horror experience.</p>
          <video src={video3} controls />
        </div>

      </div>
    </div>
  );
}

export default Multimedia;
