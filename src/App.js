import './App.css'
import React, {useState, useEffect} from "react";
import Images from "./components/imageComp";
function App() {
    useEffect(()=>{
        getPosts()
    },[]);
    const [posts,setPosts]=useState([]);
    const getPosts =async ()=>{
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&page=1&api_key=RYTZybWCgSxaUiaFjpgXnfw7ZELgP3BfG309fG9a`);
        const data = await response.json();
        setPosts(data.photos);
        console.log(data.photos);//TODO: Take this away
    };

  return (
    <div className="App">
      <div className="navBar">
          <h1 className="title">Spacetagram</h1>
          <p className="subtext">Brought to you by Mars Photos API </p>
      </div>
        <div className="images">
            {posts.map(post => {
             return(
                <Images key={post.id}
                        image={post.img_src}
                        rovername={post.rover.name}
                        earthdate={post.earth_date}
                        cameraname={post.camera.full_name}/>
            )})}
        </div>
    </div>
  );
}

export default App;
