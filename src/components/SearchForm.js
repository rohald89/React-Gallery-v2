import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SearchStyles = styled.form`
    max-width: 460px;
    display: flex;
    margin: 0 auto 32px;

    button {
        outline: none;
        background-color: #438bbd;
        border: none;
        padding: 0px 15px;
        border-radius: 0 0.35em 0.35em 0;
        cursor: pointer;
        &:hover {
            background-color: #275270;
        }
    }

    input {
        font-size: 1em;
        width: 100%;
        background-color: #edeff0;
        padding: 10px 15px;
        border: 3px solid #d7dbdf;
        border-right: none;
        border-radius: 0.35em 0 0 0.35em;
        outline: none;
        transition: all 0.3s ease-in-out;
    }

    input:focus {
        border-color: #438bbd;
    }
`;

const SearchForm = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
        setSearchTerm('');
    };

    return (
        <SearchStyles onSubmit={handleSubmit}>
            <input
                type="search"
                name="search"
                placeholder="Search"
                required
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
                <svg
                    fill="#fff"
                    height="24"
                    viewBox="0 0 23 23"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </button>
        </SearchStyles>
    );
};

export default SearchForm;
