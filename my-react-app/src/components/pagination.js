import React, {useState} from 'react';
import Post from './ModifyPost'

function Pagination({ posts, title, refresh}) {

    const [dataLimit] = useState(1)
    const [currentPage] = useState(1);
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    let slice= posts.slice(startIndex, endIndex);
 
    return (
        <div>
          <h1 className="title">{title}</h1>
          <div className="dataContainer">
            {slice.map((p) => (
              <Post refresh={refresh} body={p.body} title={p.title} id={p.id}/>
            ))}
          </div>
        </div>
      );
}

export default Pagination