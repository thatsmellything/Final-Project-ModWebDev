import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db, rtdb } from "../lib/firebase";
import {ref, onChildAdded, push, set} from "firebase/database";

type Post = {
  id: string,
  authorId: string,
  authorEmail: string,
  content: string,
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

  function returnPosts() {
    const post = []
    const x = 10
    // for each post in db, return photograph attached, title, description, and location
    for (let i = 0; i < x; i++) {
      post[i] = (
        <>
          <div className="post">
            
            <h2>title</h2>
            {/* isnert random image */}
            <p>description</p>
            <div className="location">
              <p>location</p>
            </div>
          </div>
          <br></br>
          <br></br>
        </>
      )
    }

    return (
      <>
        {post}
      </>
    );
  }

  const postSection = returnPosts()

  return (
    <>
      <div className="header">
        <h1>HikePoster</h1>
        <div>Make a Post</div>
        {/* File browser for selection */}
        <textarea placeholder="Title"></textarea>
        <textarea placeholder="Description"></textarea>
        <br></br>
        <button>Submit Post</button>
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
  );
  
}