import React from "react";
import { NavLink } from "react-router-dom";

import './Post.css';

const Post = (props) => {

    return (
        <>
            <div className="post-content">
                <NavLink to={`/post/${props.props.id}`}>
                    <img className="homepage-picture" src={props.props.listPicture}  alt="posts" />
                    <div>{props.props.postTitle}</div>
                    <div>{props.props.price}</div>
                </NavLink>
            </div>
        </>
    )
}

export default Post;
