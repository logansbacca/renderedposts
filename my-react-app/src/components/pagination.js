import React, {useState} from 'react';
import Post from './ModifyPost'

function Pagination({ posts, title, refresh}) {


    const [dataLimit] = useState(1)
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = currentPage * dataLimit ;
    const endIndex = startIndex - dataLimit;

    //set the amount of posts per page
    let slice= posts.slice(endIndex,startIndex);
   

    //pagination
    const pageNumber= [];
    for(let i = 1; i<=Math.ceil(posts.length / dataLimit);i++){
      pageNumber.push(i)
    }

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div>
          <h1 className="title">{title}</h1>
          <div className="dataContainer">

            {slice.map((p) => (
            <Post refresh={refresh} body={p.body} title={p.title} id={p.id}/>
            ))}
              <div className="footer">
            {pageNumber.map(number=>(
              
            <li className="pagination" key={number}>
              <a onClick={() => paginate(number)} href='!#'>{number}
              </a>
            </li>
            
          ))}
          </div>
          </div>
          </div>
      );
}

export default Pagination