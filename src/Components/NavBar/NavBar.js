import './NavBar.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Error404 from '../Error/Error';
import Article0 from '../ArticleSection/Articles/Article-0';
import { useState, useEffect } from "react";
import SpinLoader from '../Error/SpinLoader';
import AboutMe from '../AboutMe/AboutMe';
const NavBar = () => {
    const [rawData, setRawData] = useState();
    const [quote, setQuote] = useState();
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

        const fetchQuote = async () => {
            try {
                const response = await fetch('/data/quotes.JSON');
                const jsonResponse = response.ok ? await response.json() : console.log(response);
                setQuote(jsonResponse);
            } catch (e) {
                console.log(e)
            }
        }
        setTimeout(() => {
            dataToFetch();
            fetchQuote();
        }, 1000);
    }, []);

    return (
        <Router>
            {
                rawData && quote ?
                    <Routes>

                        <Route path="/" element={<Home data={rawData} quote={quote} />} />
                        {
                            rawData.map((element, index) => {
                                return <Route key={index} path={`/article-${element.id}`} element={<Article0 data={element} />} />
                            })
                        }
                        <Route path='/about-us' element={<AboutMe />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                    :
                    <section className='loading-circle'>
                        <section className='article'>
                            <h1 className='article-title'>Loading...</h1>
                            <SpinLoader />
                        </section>
                    </section>
            }
        </Router>
    );
}

export default NavBar;