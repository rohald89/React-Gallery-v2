import React from 'react';

const GalleryItem = ({ image }) => {
    return (
        <li>
            <img
                src={`https://live.staticflickr.com/${image.server}/${image.farm}/${image.id}_${image.secret}.jpg`}
                alt=""
            />
        </li>
    );
};

export default GalleryItem;
