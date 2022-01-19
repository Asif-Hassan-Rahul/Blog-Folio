import React, {useEffect, useState} from 'react';

import "./Blog.css"
import BlogItem from "./BlogItem";

import {getData, createData} from "./api";
import {Alert, form} from "react-bootstrap";

export default function Blog(){



    const [blogs, setBlogs] = useState(null)


    //GET ALL THE DATA FROM THE db.json file and set it into blogs.
    useEffect(()=> {
        // fetch("http://localhost:8000/blogs")
        //     .then(res => {
        //         return res.json();
        //     })
        //     .then(data => {
        //         setBlogs(data);
        //     })
        getData().then((data) => setBlogs(data.data));
    }, []);





    return(
        <>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-5">
                        <h1>BLOGS</h1>
                    </div>
                </div>

                <div className="row my-5">

                    {blogs && blogs.map(blog => (
                        <BlogItem id={blog.id} title={blog.title} description={blog.body.substring(0,150)} />
                    ))}

                </div>
            </div>


        </>
    );
}