import React from "react";

const LoadingAnimation = () => {
    return (
        <div className="loading-container">
            <div className="container-animation">
                <div className="lds-dual-ring"></div>
                Carregando...
            </div>
        </div>
    );
};

export default LoadingAnimation;
