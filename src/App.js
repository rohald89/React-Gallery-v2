import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

import './App.css';
import apiKey from './config';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';

function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const query = 'cars';

    useEffect(() => {
        const fetchImages = async () => {
            setIsLoading(true);
            const result = await axios(
                `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&sort=relevance&format=json&nojsoncallback=1`
            );
            setImages(result.data.photos.photo);
            setIsLoading(false);
        };
        fetchImages(); // eslint-disable-next-line
    }, [query]);

    return (
        <BrowserRouter>
            <div className="container">
                <SearchForm />
                <Nav />
                <Gallery />
                {isLoading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Navigate replace to="/cars" />}
                        />
                        <Route
                            path="/cars"
                            element={<Gallery images={images} />}
                        />
                        <Route
                            path="/summer"
                            element={<Gallery images={images} />}
                        />
                        <Route
                            path="/winter"
                            element={<Gallery images={images} />}
                        />
                    </Routes>
                )}
            </div>
        </BrowserRouter>
    );
}

export default App;
