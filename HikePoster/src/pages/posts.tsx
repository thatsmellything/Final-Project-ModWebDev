import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db, storage } from "../lib/firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

type Post = {
  image: any,
  title: string,
  description: string,
  location: string,
  id: string,
}

export const Chat = () => {
  const user = useContext(UserContext);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // TODO load users rooms
    async function loadPosts() {
      const querySnapshot = await getDocs(
        query(
          collection(db, "posts"),
        )
      );
      querySnapshot.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id } as Post);
      });
      setPosts(posts);
    }
    loadPosts();
  }, []);


  function makeTestPosts() {
    var posts = []
    for (let i = 0; i < 10; i++) {
      var post = []
      post[0] = "/src/assets/test.jpg"
      post[1] = "London Bridge" + i
      post[2] = "description" + i
      post[3] = getCurrentGPSLocation()
      posts[i] = post
    }
    return posts
  }

  function getCurrentGPSLocation() {
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const [locationLoaded, setLocationLoaded] = useState(false);
    useEffect(() => {
      // navigator.geolocation.getCurrentPosition((location) => {
      //   setLocationLoaded(true);
      //   setLat(location.coords.latitude);
      //   setLon(location.coords.longitude);
      // }, (err) => {
      //   console.log(err)
      // }, {
      //   enableHighAccuracy: true,
      // })
      const watch = navigator.geolocation.watchPosition((location) => {
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
        setLocationLoaded(true);
      }, (err) => {
        console.log(err)
      }, {
        enableHighAccuracy: true,
      })

      return () => navigator.geolocation.clearWatch(watch)
    }, []);

    return (
      <div className="location">
        {locationLoaded ? (`Lat: ${lat}, Lon: ${lon}`) : 'Loading...'}
      </div>
    )
  }



  function saveToDB(image: any, title: string, description: string, location: string) {
    // save to db
    // return ID
    return 1
  }
  
    


  function returnPosts() {
    // get posts from db
    var posts = makeTestPosts();
    const returnMe = []
    //const x = 10
    // for each post in db, return photograph attached, title, description, and location
    for (let i = posts.length - 1; i >= 0; i--) {
      returnMe[i] = (
        <>
          <div className={"post"+i}>
            
            <h2>{ posts[i][1] }</h2>
            {/* isnert random image */}
            {/* https://picsum.photos/200/300 */}
            <img src={ posts[i][0].toString() } alt="react logo" />
            { /* take the image and run it through findGPS */}
            <p>GPS: { }</p>
            <p>description {posts[i][2]}</p>
            <div className="location">
              location {posts[i][3]}
              <p>ID: {i}</p>
            </div>
          </div>
          <br></br>
          <br></br>
        </>
      )
    }

  return (
    <>
      {returnMe.reverse()}
    </>
  );

  }

  const postSection = returnPosts()

  const [url, setUrl] = useState('');
  async function uploadFile(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    const fileRef = ref(storage, `/images/${file!.name || ''}`)
    const snapshot = await uploadBytes(fileRef, file!);

    // likely in different place
    const downloadUrl = await getDownloadURL(ref(storage, `/images/${file!.name || ''}`));
    setUrl(downloadUrl);
  }

  return (
    <>
      <div className="header">
        <h1>HikePoster</h1>
        <div>Make a Post</div>
        {/* File browser for selection */}
        <textarea placeholder="Title"></textarea>
        <textarea placeholder="Description"></textarea>
        <input type="file" onChange={uploadFile}/>
        <br></br>
        <button>Submit Post</button>
        <button onClick={() => signOut(auth)}>Logout</button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="postssection">
          {/* call function returnPosts */}
          {postSection}
        </div>
      </div>
    </>
  )

}