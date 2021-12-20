import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
const Main = () => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            });
    }, [])
    return (
        <div>
            <Link to={'/authors/new'}>Add a New Author</Link>
            <hr />
            {loaded && <AuthorList author={author} />}
        </div>
    )
}
export default Main;


