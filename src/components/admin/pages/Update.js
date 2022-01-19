import React, {useEffect, useState } from "react";
import {Navigate, useParams} from "react-router-dom";
import "./Update.css"

import {Form, Button} from "react-bootstrap";

import {updateData, getSingleData, getData} from "../../web/pages/Blog/api";

export default function Update(history, match) {

    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        loadData();
    }, [])




    const loadData = () => {
        getSingleData(id). then((data) => {
            setTitle(data.data.title);
            setBody(data.data.body)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateData(id, title, body).then((res) => {
            setTitle("");
            setBody("");
            setRedirect(!redirect);
        })
    }

    return (
        <>
            <div className="container mt-5" id="content">
                <div className="row mt-5">
                    <div className="col-md-12 mt-5">
                        <h2>Update</h2>
                    </div>
                </div>

                <div className="row my-5">

                    <div className="col-md-12">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Title" name="title" value={title}
                                       onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows={4} placeholder="Body" name="body" value={body}
                                          onChange={(e) => setBody(e.target.value)}></textarea>
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                        {redirect && <Navigate to="/dashboard" />}
                    </div>
                </div>


            </div>
        </>
    );
}