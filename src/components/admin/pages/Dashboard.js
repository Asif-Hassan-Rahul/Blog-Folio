import React, {useEffect, useState} from "react";
import "./Dashboard.css"
import {createData, getData, deleteData} from "../../web/pages/Blog/api";
import BlogItem from "../../web/pages/Blog/BlogItem";
import {form} from "react-bootstrap";

export default function Dashboard() {

    const [blogs, setBlogs] = useState(null);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");



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

    const handleFormSubmit = (e) => {
        e.preventDefault();
        createData(title,body).then((res) => {
            setTitle("");
            setBody("");
            getData().then((data) => setBlogs(data.data));
        });

    }

    const handleRemove = (id) => {
        if(window.confirm("Are you sure you want to delete this?")){
            deleteData(id).then((res) => {
                getData().then((data) => setBlogs(data.data));
            })
        }
    }


    return (
        <>
            <div className="container mt-5" id="dashboard">
                <div className="row mt-5">
                    <div className="col-md-12 d-flex justify-content-center align-items-center mt-5">
                        <h1>Dashboard</h1>
                    </div>
                </div>

                <div className="row my-3">


                    <div className="col-md-12">
                        <h2>Blogs list</h2>
                    </div>
                    <div className="col-md-12">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {blogs && blogs.map(blog => (
                                // <BlogItem id={blog.id} title={blog.title.title} description={blog.title.body.substring(0,150)} />
                                <tr>
                                <th scope="row">{blog.id}</th>
                                <td>{blog.title}</td>
                                <td>{blog.body.substring(0,100)}</td>
                                <td>
                                    <a  href={`/update/${blog.id}`} className="btn btn-warning mx-3">Update</a>
                                    <a onClick={() => handleRemove(blog.id)} href="#" className="btn btn-danger mx-3">Delete</a>
                                </td>
                                </tr>
                            ))}

                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-md-12">
                        <h2>Create</h2>
                    </div>
                    <div className="col-md-12">
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Title" value={title} name="title" onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <textarea type="text" value={body} className="form-control" rows={4} placeholder="Body" name="body" onChange={(e) => setBody(e.target.value)}></textarea>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}