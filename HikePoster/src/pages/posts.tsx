import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db, storage } from "../lib/firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

type Post = {
  image: string,
  title: string,
  description: string,
  lat: string,
  lon: string,
  id: string,
  author: string,
}

export const Posts = () => {
  const user = useContext(UserContext);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // TODO load users rooms
    async function loadPosts() {
      // get posts from db
      const querySnapshot = await getDocs(collection(db, "posts"));
      querySnapshot.forEach((doc) => {
        posts.push({...doc.data(), id : doc.id} as Post)
      });
      setPosts([...posts]);
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

  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [locationLoaded, setLocationLoaded] = useState(false);
  function getCurrentGPSLocation() {
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
    //var posts = makeTestPosts();
    //const x = 10
    // for each post in db, return photograph attached, title, description, and location
    const returnMe = posts.map((post) => (
      <>
        <div key={post.id} className={"post"}>
              
          <h2>{ post.title }</h2>
          {/* isnert random image */}
          {/* https://picsum.photos/200/300 */}
          <img src={ post.image } alt="viewpoint" />
          { /* take the image and run it through findGPS */}
          <p>description { post.description }</p>
          <div className="location">
            location
            <p>Lat: { post.lat }, Lon: { post.lon }</p>
            <p>ID: { post.id }</p>
          </div>
        </div>
        <br></br>
        <br></br>
      </>
    ))
    console.log(returnMe);

    return (
      <>
        {returnMe.reverse()}
      </>
    );

  }

  async function uploadFile(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    const fileRef = ref(storage, `/images/${file!.name || ''}`)
    const snapshot = await uploadBytes(fileRef, file!);

    // likely in different place
    const downloadUrl = await getDownloadURL(ref(storage, `/images/${file!.name || ''}`));

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "posts"), {
      image: downloadUrl,
      title: title,
      description: description,
      lat: lat,
      lon: lon,
      author: user?.uid
    });
    console.log("Document written with ID: ", docRef.id);

  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <div className="header">
        <h1>HikePoster</h1>
        <div>Make a Post</div>
        {/* File browser for selection */}
        <textarea value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"></textarea>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
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
          {returnPosts()}
        </div>
      </div>
    </>
  )

}