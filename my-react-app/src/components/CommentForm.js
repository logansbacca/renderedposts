import React, {useState, useEffect}from 'react';
import Comment from './Comment'
import axios from 'axios'

const CommentForm = () => {

const [comments, setComments] = useState([])
const [commentLimit] = useState(1)
const [currentComment] = useState(1);

const startIndex = currentComment * commentLimit - commentLimit;
const endIndex = startIndex + commentLimit;
let cut= comments.slice(startIndex, endIndex);


useEffect(() => {
  axios.get('http://localhost:3000/comments/').then (res => {
    setComments(res.data.reverse());
    console.log("comments rendered");
  }, err => {
      console.log('An error has occurred!')
  })
},[]);


    return (
      <div className="main-comments">
        <h3>Comments</h3>
        <section className="bundle">
          {cut.map(c => (
          <Comment body={c.body} />))}
        </section>

      </div>
    );
}
export default CommentForm;




