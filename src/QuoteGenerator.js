import React, { useState, useEffect } from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';

function QuoteGenerator() {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => {
            setQuote(data.content);
            setAuthor(data.author);
            setLoading(false)
        })
        .catch((error) => console.error('There was an error while fetching: ', error))
    }, [])

    const getNewQuote = () => {
        fetch('https://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => {
            setQuote(data.content)
            setAuthor(data.author)
            setLoading(false)
        })
        .catch((error) => console.error('There was an error while fetching: ', error))
    }

    if (loading) {
        return <h1 className='position-absolute top-50 start-50 translate-middle'>Loading ...</h1>
    }

    return (
        <div className='position-absolute top-50 start-50 translate-middle card text-white bg-dark p-4 rounded opacity-75'>
            <div className='text-center'>
            <h2>Quote:</h2>
            <p>"{quote}"</p>
            <h4>Author:</h4>
            <p>{author}</p>
            </div>
            <div className='d-flex justify-content-center'>
            <button onClick={getNewQuote} className='btn btn-primary'>Generate Quote</button>
            </div>
        </div>
    )
}

export default QuoteGenerator