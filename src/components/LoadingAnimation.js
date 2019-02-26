import React from "react";
import styled from 'styled-components';
const LoadingAnimation = () => {
    return (
        <LoadingContainer>
            <div className="container-animation">
                <div className="lds-dual-ring"></div>
                Carregando...
            </div>
        </LoadingContainer>
    );
};

const LoadingContainer = styled.div`
    display: flex;
    min-height: 60vh;
    flex-direction: column;
    justify-content: center;
    color: #294E80;
    text-transform: uppercase;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica, sans-serif;
    font-size: 1.5em;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    .container-animation {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .lds-dual-ring {
        display: inline-block;
        width: 64px;
        height: 64px;
        padding-bottom: 1em;
    }

    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 46px;
        height: 46px;
        margin: 1px;
        border-radius: 50%;
        border: 8px solid #294E80;
        border-color: #294E80 transparent #294E80 transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default LoadingAnimation;
