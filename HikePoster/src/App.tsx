import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
          <img src={reactLogo} alt="react logo" />
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
  )
  

}

function App() {
  const [count, setCount] = useState(0)
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
  )
  

}

export default App
