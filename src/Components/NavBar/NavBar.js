import './NavBar.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Error404 from '../Error/Error';
import Article0 from '../ArticleSection/Articles/Article-0';
import Article1 from '../ArticleSection/Articles/Article-1';
import { useState, useEffect } from "react";
const NavBar = () => {
    const [rawData, setRawData] = useState("Loading...");

    useEffect(() => {
        const dataToFetch = async () => {
            try {
                const response = await fetch('/data/articles.JSON');
                const data = await response.json();
                setRawData(data);
            } catch (err) {
                console.log(err);
            }
        }
        setTimeout(() => {
            dataToFetch();
        }, 500);
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/random-article" element={<Article0/>} />
                <Route path="/craft-Beer" element={<Article1 data={rawData}/>} />
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </Router>
    );
}

export default NavBar;