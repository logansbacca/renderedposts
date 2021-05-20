import React, {useState} from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';

const Post = ({body,title,id,refresh}) => {

    const [value,setValue] = useState({isEditing: false})
    const [input,setInput] = useState({body: body, title: title, id:id})



    const deletePost = () => {
        axios.delete('http://localhost:3000/posts/'+id).then (res => {
            console.log('The post was removed!')
            refresh()
        }, err => {
            console.log('An error has occurred!')
        });
    };

    const saveEditedPost=() => {
        console.log({input})
        axios.put('http://localhost:3000/posts/'+ id, input).then (res => {
            console.log('The post was edited!')
            console.log(res.data)
            setValue({isEditing:false})
            refresh()
        }, err => {
            console.log('An error has occurred!')
        });
        
    }

    const editingPost = () => {
        setValue({isEditing : true}) 
    };
    
    const handleCommentChangeTitle = (e) => {
        setInput({...input, title: e.target.value})

    }

    const handleCommentChangeBody = (e) => {
        setInput({...input, body: e.target.value})
    }


    return(
        <section>
    <div className="main">
        <div className="post-input">
        <h1>{title}</h1>
        <h2>{body}</h2>
        </div>
        </div>
        <section className="edit-options">
        <div className="editTitle">
            {value.isEditing && <input name="title" onChange={handleCommentChangeTitle} value={input.title}></input>}
        </div> 
        <div className="editBody">
            {value.isEditing && <input name="body" onChange={handleCommentChangeBody} value={input.body}></input>}
        </div> 
        {value.isEditing && <button onClick={saveEditedPost}>Save</button>} 
        </section>
        <div className="buttons">
        <button className="first" onClick={deletePost}>Delete</button>
        <button className="second" onClick={editingPost}>Edit</button>
        </div>
        <CommentForm/>
    </section>
     )
}

export default Post;

