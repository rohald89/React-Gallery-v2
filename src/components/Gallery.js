import styled from 'styled-components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import GalleryItem from './GalleryItem';
import NotFound from './NotFound';

const GalleryStyles = styled.div`
    ul {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        -ms-align-items: flex-start;
        align-items: flex-start;
    }

    ul li {
        width: 220px;
        height: 165px;
        overflow: hidden;
        margin-bottom: 15px;
    }

    ul img {
        width: 100%;
        transform: scale(1.25);
        transition: transform 1.25s;
    }

    li:hover img {
        transform: scale(1.65);
    }

    .not-found {
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        li {
            margin: auto;
        }
    }
`;

const Gallery = ({ data, fetchImages }) => {
    const { query } = useParams();

    useEffect(() => {
        if (query && !data[query]) {
            fetchImages(query);
        }
    }, [query]);

    let results;
    if (data[query]?.length > 0) {
        results = data[query].map((image) => (
            <GalleryItem key={image.id} image={image} />
        ));
    } else {
        results = <NotFound />;
    }

    return (
        <GalleryStyles>
            <h1>Search results for: {query}</h1>
            <ul className="gallery">{results}</ul>
        </GalleryStyles>
    );
};

export default Gallery;
