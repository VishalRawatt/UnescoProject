import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../css/style.css';

const Post = () => {
  
  const [post, newPost] = useState([]);
  useEffect(() => { 
    axios.get('http://localhost:8000/getData').then((e) => {
      console.log(e.data);
      newPost(e.data);
    })
  }, []);
  
  return (
    <Fragment>
      {post.map((d) => {
        return (
          <div className="card cardbody" key={`${d._id}`}>
            <div className="card-body">
              <div className="row">
                <h5 className="col-md-6" style={{color:"white"}}>{d.hashtag}</h5>
                <Link to="/join" className="linkbtn col-md-6" >Join</Link>
                <p className="card-text col-md-6" style={{color:"white", fontSize:"30px"}}>{d.caption}</p>
                <Link to={`view/${d._id}`} className="linkpost col-md-6" >View Post</Link>
              </div>
              <div className="imgcontainer">
                <img src={`${d.photo}`} className="card-img" alt="It's a Photo"/>
              </div>
            </div>
          </div>
        )
      })}
    </Fragment>
  )

}

export default Post