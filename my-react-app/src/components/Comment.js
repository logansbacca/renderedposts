import React,{useState} from 'react';
import axios from 'axios'

const Comment = ({body,refresh}) => {

    const [comment, setComment] = useState({
        body: "",
        id: ""
    });


const handleCommentChange = (e) => {
    e.preventDefault()
    setComment({...comment, body:e.target.value})
};

const submitComment = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/comments/', comment).then (res => {
        console.log('The post was created!')
        console.log(res.data)
        window.location.reload()
    }, err => {
        console.log('An error has occurred!')
    });
    setComment("")
};
    return (
        <div>
        <p>{body}</p>
        <form>
        <section className="comment">
          <div className="field">
            <div className="control">
              <textarea value={comment.body} className="textarea" name="comment" onChange={handleCommentChange} placeholder="Comment" ></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary" type="submit" onClick={submitComment}>Submit</button>
            </div>
          </div>
        </section>
        </form>











        </div>
    )
}
export default Comment