/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState } from "react";
import SearchBar from './components/SearchBar/SearchBarContainer'
import PostsPage from './components/PostsContainer/PostsPage'
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import dummyData from './components/PostsContainer/dummy-data'


const App = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] =useState(dummyData)

  return (
    <div className="App">
      {/* Add imported components here to render them */}
      <SearchBar updater={setSearchText}/>
      <PostsPage listOfPosts={posts.filter(post=>{
        if(!searchText || post.username.includes(searchText)){
          return post}
          return false})}/>
    </div>
  );
};

export default App;
