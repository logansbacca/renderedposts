import React, { useState,useEffect } from 'react';
import './App.css';
import Nav from './components/Nav'
import Pagination from './components/pagination';
import {AddPost} from './components/AddPost';
import axios from 'axios';

const App = () =>{
  const [posts, setPosts] = useState([]);
  const refresh = () =>{
    console.log("i'm refreshing");
    axios.get('http://localhost:3000/posts/').then (res => {
      setPosts(res.data.reverse());
      console.log("Posts rendered");
    });
  };

  useEffect(() => {
    axios.get('http://localhost:3000/posts/').then (res => {
      setPosts(res.data.reverse());
      console.log("Posts rendered");
    }, err => {
        console.log('An error has occurred!')
    })
  },[]);


  return (
    <div className="App">
      <Nav/>
      <AddPost/>
      <Pagination posts={posts} refresh={refresh} title="Posts"/>
    </div>

  );
}

export default App;
