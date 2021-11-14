import { Navigate, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import { useState } from 'react';

import './App.css';
import apiKey from './config';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import Loader from './components/Loader';

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    color: #3f4850;
    background-color: cadetblue;
}

h2 {
    font-size: 2em;
    margin: 52px 0 40px;
    text-transform: capitalize;
}

ul {
    list-style-type: none;
    padding-left: 0;
}

a {
    text-decoration: none;
}

@media only screen and (max-width: 767px) {
    body {
        padding-top: 2em;
    }
}

`;

const MainWrapper = styled.div`
    @media only screen and (min-width: 768px) {
        max-width: 960px;
        margin: auto;
    }
`;
function App() {
    const [images, setImages] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const fetchImages = async (query) => {
        if (images[query]?.length > 0) {
            return;
        } else {
            setIsLoading(true);
            const result = await axios(
                `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&sort=relevance&format=json&nojsoncallback=1`
            );
            setImages((prevState) => ({
                ...prevState,
                [query]: result.data.photos.photo,
            }));
            setIsLoading(false);
        }
    };

    return (
        <MainWrapper>
            <GlobalStyle />
            <SearchForm />
            <Nav />
            {isLoading ? (
                <Loader />
            ) : (
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate replace to="/search/cars" />}
                    />
                    <Route
                        path="/search/:query"
                        element={
                            <Gallery data={images} fetchImages={fetchImages} />
                        }
                    />
                </Routes>
            )}
        </MainWrapper>
    );
}

export default App;
