import React, {useState} from 'react';
import axios from 'axios';

 export const AddPost = () => {
    const [values, setValues] = useState({
        title: "",
        body: "",
        id: ""
    });

    const handleSubmit = () => {
        axios.post('http://localhost:3000/posts/', values).then (res => {
            console.log('The post was created!')
            console.log(res.data)
            window.location.reload()
        }, err => {
            console.log('An error has occurred!')
        });
       
    }
 
    const handleInputChangeTitle = (event) => {
        setValues({...values, title: event.target.value} )
        
    }

    const handleInputChangeBody = (event) => {
        setValues({...values, body: event.target.value})
    }
 
    return(
    <div className="header">
        <h1 className="text1">What's on Your Mind?</h1>
        <label>Title</label>
        <label>Body</label>
        <div className="content-input">
        <input value={values.title} onChange={handleInputChangeTitle}/>
        <textarea value={values.body} onChange={handleInputChangeBody}/>
        <button onClick={handleSubmit}>Post</button>
        </div>
        
         
    </div>
     )
}

