import React, {Fragment, useState } from 'react'
import axios from 'axios'

const AddPost = () => {
    const [sv, sf] = useState({
        photo: "",
        caption: "",
        hashtag: ""
    })
    const setdata = (e) => {
        const { name, value } = e.target;
        sf((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    const imageUpload = (e) =>{
        console.log(e.target.files[0])
    }
    const submitdata = async (e) => {
        e.preventDefault();
        if (sv.photo === "" || sv.caption === "" || sv.hashtag === "") {
            alert("Please Enter data");
        }
        else {
            const { photo, hashtag, caption } = sv;
            const postData = {
                photo,
                hashtag,
                caption,
              }
              axios.post('http://localhost:8000/create', postData, {
                headers: {
                  'Content-Type': 'application/json',
                },
              })
                .then((res) => {
                  console.log(res.data);
                })
                .catch((error) => {
                  console.error(error);
                });
            window.location = "/"
        }
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Select Photo</label>
                            <input className="form-control" type="text" name='photo' onChange={setdata} required/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">#Hashtag</span>
                            <input type="text" className="form-control" placeholder="Enter Hashtag" aria-describedby="basic-addon1" name='hashtag' onChange={setdata} required/>
                        </div>
                        <div className="input-group">
                            <span className="input-group-text">Caption</span>
                            <textarea className="form-control" aria-label="With textarea" name='caption' onChange={setdata} required></textarea>
                        </div>
                    </div>
                    <div className='col-md-12 mt-2 text-center'>
                            <button type="button" className='btn btn-primary' onClick={submitdata}>Add Post</button>
                        </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AddPost