import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import { Timestamp, orderBy, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db, storage } from "../lib/firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Maps } from "./maps";
import { key } from "./maps";
import "./posts.css";

import ReactDOMServer from 'react-dom/server'

type Post = {
  image: string,
  title: string,
  description: string,
  lat: string,
  lon: string,
  id: string,
  author: string,
  timestamp: Timestamp
}

export const Posts = () => {
  const user = useContext(UserContext);
  const [posts, setPosts] = useState<Post[]>([]);

  const [maxMileDistance, setMaxMileDistance] = useState(Math.max());
  const [sortedByDistance, setSortedByDistance] = useState(false);

  useEffect(() => {
    const watch = navigator.geolocation.watchPosition((location) => {
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      setLocationLoaded(true);
    }, (err) => {
      console.log(err)
    }, {
      enableHighAccuracy: true,
    })

    // TODO load users rooms
    async function loadPosts() {
      // get posts from db
      const postsRef = collection(db, "posts");
      const q = query(postsRef, orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        posts.push({...doc.data(), id : doc.id} as Post)
      });
      setPosts([...posts]);
    }
    loadPosts();

    return () => navigator.geolocation.clearWatch(watch);

  }, []);

  useEffect(() => {
    const sortedPosts = [...posts].sort((a, b) => {
      return getDistance(a.lat, a.lon) - getDistance(b.lat, b.lon);
    })
    setPosts(sortedPosts);
  }, [sortedByDistance]);


  // function makeTestPosts() {
  //   var posts = []
  //   for (let i = 0; i < 10; i++) {
  //     var post = []
  //     post[0] = "/src/assets/test.jpg"
  //     post[1] = "London Bridge" + i
  //     post[2] = "description" + i
  //     post[3] = getCurrentGPSLocation()
  //     posts[i] = post
  //   }
  //   return posts
  // }

  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [locationLoaded, setLocationLoaded] = useState(false);

  function saveToDB(image: any, title: string, description: string, location: string) {
    // save to db
    // return ID
    return 1
  }

  function googleMap(latitude : string, longitude : string) {
    return (
      <div>
        <iframe
          width="600"
          height="450"
          style={{border:0}}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={"https://www.google.com/maps/embed/v1/place?key=" + key + "&q=" + latitude + "," + longitude}>
        </iframe>
      </div>
    );
  }

  function getDistance(latitude : string, longitude : string) {
    const latDist = Math.abs(Number(latitude) - lat) * 69.0;
    const lonDist = Math.abs(Number(longitude) - lon) * 54.6;
    const dist = Math.sqrt(Math.pow(latDist, 2) + Math.pow(lonDist, 2));
    return dist;
  }

  function returnPosts() {
    //var posts = makeTestPosts();
    //const x = 10
    // for each post in db, return photograph attached, title, description, and location
    const returnMe = posts.map((post) => (
      <div key={post.id} className={"post"}>
        <hr></hr>
       
            
        <h2>{ post.title }</h2>
        <h4>{getDistance(post.lat, post.lon) < 1 ? "Less than 1 mile away" : "About " + Math.floor(getDistance(post.lat, post.lon)) + " miles away"}</h4>
        {/* isnert random image */}
        {/* https://picsum.photos/200/300 */}
        <div>
          <img src={ post.image } alt="viewpoint" id="postImage"/>
        </div>
        
        { /* take the image and run it through findGPS */}
        <p>{ post.description }</p>
        <div className="location" id="location">
          <div id="map"></div>
          {/* when the button is clicked, open a new window with Maps(lat, lon) as the resulting page */}
          <div>
            {googleMap(post.lat, post.lon)}
            <button onClick={
              () => {

                Maps(Number(post.lat), Number(post.lon)) 

                // var logMe = ReactDOMServer.renderToString(openMe)

                // document.getElementById("map")!.innerHTML = logMe

                // console.log(logMe)

              }
              }>Open Location</button>
          </div>  
          <p>Lat: { post.lat }, Lon: { post.lon }</p>
          <p id="postID">Post ID: { post.id }</p>
        </div>
      </div>
    ))

    return (
      <>
        {returnMe}
      </>
    );

  }

  async function submitPost() {

    if (imageFile == null || title == "" || description == "" || user == null) {
      return;
    }

    const fileRef = ref(storage, `/images/${imageFile.name || ''}`)
    const snapshot = await uploadBytes(fileRef, imageFile);

    // likely in different place
    const downloadUrl = await getDownloadURL(ref(storage, `images/${imageFile.name}`));

    const postData = {
      image: downloadUrl,
      title: title,
      description: description,
      lat: lat.toString(),
      lon: lon.toString(),
      author: user?.uid || '',
      timestamp: Timestamp.now()
    }
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "posts"), postData);

    setPosts([{...postData, id: docRef.id} as Post, ...posts]);
    
    console.log("Document written with ID: ", docRef.id);

  }

  const [imageFile, setImageFile] = useState<File>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
    <body className="body">
      <div className="header">
        <h1>HikePoster</h1>
        <div>
          {locationLoaded ? (`Lat: ${lat}, Lon: ${lon}`) : 'Loading...'}
        </div>  
        <div>Make a Post</div>
        {/* File browser for selection */}
        <div>
          <textarea className="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"></textarea>
        </div>
        <div>
          <textarea className="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
        </div>
        <div>
          <input className="file-input" type="file" onChange={(e) => setImageFile(e.target.files?.[0])}/>
        </div>  
        <br></br>
        <div>
          <button onClick={() => {submitPost()}}>Submit Post</button>
          <button className="logout" onClick={() => signOut(auth)}>Logout</button>
        </div>
        <div>
        <button onClick={() => {setSortedByDistance(true)}}>Sort By Distance</button>
        </div>
      
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
          {/* call function returnPosts */}
          {returnPosts()}
        </div>
      </div>
      

    </body>  
    </>
  )

}