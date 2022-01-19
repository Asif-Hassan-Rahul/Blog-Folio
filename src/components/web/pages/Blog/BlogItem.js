import React from "react";
import BlogImage from "../../../../assets/img/blog-image.jpg";
import {Link} from "react-router-dom";

export default function BlogItem(props) {
    return (
        <>
            <div className="col-md-4 my-4">
                <div className="card">
                    <img src={BlogImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}...</p>
                        <Link to={`/blogs/${props.id}`} className="btn btn-dark">Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
}