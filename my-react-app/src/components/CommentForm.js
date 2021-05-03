import React, {useState, useEffect}from 'react';
import Comment from './Comment'
import axios from 'axios'

const CommentForm = ({refresh}) => {

const [input,setInput] = useState("")
const [comments, setComments] = useState([])


useEffect(() => {
  axios.get('http://localhost:3000/comments/').then (res => {
    setComments(res.data);
    console.log("comments rendered");
  }, err => {
      console.log('An error has occurred!')
  })
},[]);


const handleCommentChange = (e) => {
    setInput(e.target.value)
   
};

const submitComment = (e) => {
    e.preventDefault();
    setComments([
      ...comments, {text: input, id: Math.random()*1000},
    ]);
    setInput("")
};



    return (
      <div className="main-comments">
        <h3>Comments</h3>
        <section className="bundle">
        {comments.map(c => (
          <Comment title = {c.text}/>
      ))}
  </section>
        <section className="comment">
          <div className="field">
            <div className="control">
              <textarea value={input} className="textarea" name="comment" onChange={handleCommentChange} placeholder="Comment" ></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary" type="submit" onClick={submitComment}>Submit</button>
            </div>
          </div>
        <form/>
        </section>
      </div>
    );
}
export default CommentForm;




