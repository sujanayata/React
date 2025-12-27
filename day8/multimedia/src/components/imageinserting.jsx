import puppy from "../image/puppy.webp";
import video from "../video/video2.mp4";
import audio from "../audio/audio2.mp3";
import Data from "../components/JSONDATA/data.json";

export default function Imageinserting() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>

      {/* IMAGE FROM PUBLIC */}
      <h1>Image from Public Folder</h1>
      <img src="charminar.webp" alt="public-img" width="250" />

      {/* IMAGE FROM ES6 */}
      <h1>Image using ES6 Import</h1>
      <img src={puppy} alt="es6-img" width="250" />

      {/* VIDEO FROM PUBLIC */}
      <h1 style={{ backgroundColor: "red", color: "white", padding: "10px" }}>
        Video from Public Folder
      </h1>
      <video controls width="300">
        <source src="video1.mp4" />
      </video>

      {/* VIDEO FROM ES6 */}
      <h1 style={{ backgroundColor: "orange", color: "blueviolet", padding: "10px" }}>
        Video using ES6 Import
      </h1>
      <video controls width="300">
        <source src={video} />
      </video>

      {/* AUDIO FROM PUBLIC */}
      <h1>Audio from Public Folder</h1>
      <audio controls>
        <source src="audio.mp3" />
      </audio>

      {/* AUDIO FROM ES6 */}
      <h1>Audio using ES6 Import</h1>
      <audio controls>
        <source src={audio} />
      </audio>

      {/* JSON DATA CARDS */}
      <h1 style={{ marginTop: "40px" }}>User Data</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        {Data.map((data) => (
          <div
            key={data.id}
            style={{
              border: "2px solid blue",
              backgroundColor: "purple",
              color: "white",
              padding: "15px",
              width: "220px",
              borderRadius: "10px",
              textAlign: "left"
            }}
          >
            <p><b>Name:</b> {data.name}</p>
            <p><b>Email:</b> {data.email}</p>
            <p><b>Password:</b> {data.password}</p>
            <p><b>Mobile:</b> {data.mobileno}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
