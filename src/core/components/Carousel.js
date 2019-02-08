import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
    return (
        <carousel>
            <slide>
                <Link to='/details'><img src="" alt="" /></Link>
                <div className="carousel-caption d-none d-md-block">
                    <p>mps-favorite-media</p>
                    <h3><Link to='/details'>((item.title) ? item.title : item.name)</Link></h3>
                    <p><Link to='/details'>item.overview | slice:0:140</Link></p>
                </div>
            </slide>
        </carousel>
    );
};

export default Carousel;
