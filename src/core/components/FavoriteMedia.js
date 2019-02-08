import React from "react";

const FavoriteMedia = () => {
    return (
        <>
            <button title="Adicionar: {{ utilsProvider.title(item) }}">
                <span className="fa fa-heart-o"></span>
            </button>

            <button title="Remover: {{ utilsProvider.title(item) }}">
                <span className="fa fa-heart"></span>
            </button>
        </>
    );
};

export default FavoriteMedia;
