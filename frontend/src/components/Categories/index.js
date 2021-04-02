import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Categories.css"

function Categories() {

    return (
        <div className="categories">
            <ul>
                <li><NavLink exact to="/">Electronics & Hardware</NavLink> |</li>
                <li><NavLink exact to="/">Programs & Applications</NavLink> |</li>
                <li><NavLink exact to="/">3D Prints & Downloads</NavLink></li>
            </ul>
        </div>
    );
}

export default Categories;
