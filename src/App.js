import './App.css'
import React, {useState, useEffect} from "react";
import Images from "./components/imageComp";
import { trackPromise } from 'react-promise-tracker';
function App() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        trackPromise(getPosts()) // the trackPromise is used for a loading state
    },[]);
    //Function to populate the posts using API request ideally would seperate this
    const getPosts =async ()=>{
        await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key=RYTZybWCgSxaUiaFjpgXnfw7ZELgP3BfG309fG9a`)
            .then(response => response.json())
            .then(data=>setPosts(data.photos))
        //const data = await response.json();
        //setPosts(data.photos);
        //console.log(data.photos);//TODO: Take this away
    };

  return (
    <div className="App">
      <div className="navBar">
          <h1 className="title">Spacetagram</h1>
          <p className="subtext">Brought to you by Mars Rover Photos API </p>
      </div>
        <div className="images">
            {posts.map(post => {
                return(
                <Images key={post.id}
                        ID={post.id}
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
