import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import NewsList from './NewsList';
import { Link } from 'react-router-dom';

const NewsItem = () => {
    const [newsView, setNews] = useState([]);
    const [newsInput, setNewsInput] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        setNewsInput(e.target.value);
    };
    const submitNews = async (e) => {
        e.preventDefault();
        const res = await Axios.get(
            `https://newsapi.org/v2/everything?q=${newsInput}&from=2021-11-13&sortBy=popularity&apiKey=7b592451176149189e71cba2a676ba80`
        );
        setNews(res.data.articles);
        setNewsInput('');
    };
    return (
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Search a News
            </button>
            <Link type="button" className="btn btn-danger" to="/">
                Back to Home
            </Link>
            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Search a News
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form type="POST" onSubmit={submitNews}>
                                <div className="mb-3">
                                    <label className="form-label">Search News</label>
                                    <input
                                        type="text"
                                        className="form-control col-lg-9"
                                        id="searchNews"
                                        name="searchNews"
                                        placeholder="search news..."
                                        onChange={handleChange}
                                        value={newsInput}
                                    />
                                    <button type="submit" className="btn btn-warning float-end mt-3">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <NewsList NewsListing={newsView}></NewsList>
        </div>
    );
};

export default NewsItem;
