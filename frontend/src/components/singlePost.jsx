import React, {Fragment, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';

const SinglePost = () => {
    const [data, newData] = useState([]);
    const {id} = useParams();
    console.log(id);

    const singleUser = () => {
        axios.get(`http://localhost:8000/view/${id}`).then((res) => {
            newData(res.data);
        })
    }
    useEffect(() => {
        singleUser();
    }, [])
  return (
    <Fragment>
        <div className="card cardbody">
            <div className="card-body">
              <div className="row">
                <h5 className="col-md-6" style={{color:"white"}}>{data.hashtag}</h5>
                <Link to="/join" className="linkbtn col-md-6" >Join</Link>
                <p className="card-text col-md-6" style={{color:"white", fontSize:"30px"}}>{data.caption}</p>
              </div>
              <div className="imgcontainer">
                <img src={`${data.photo}`} className="card-img" alt="It's a Photo"/>
              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default SinglePost