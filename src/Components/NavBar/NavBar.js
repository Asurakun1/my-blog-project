import './NavBar.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Error404 from '../Error/Error';
import Article0 from '../ArticleSection/Articles/Article-0';
import { useState, useEffect } from "react";
import SpinLoader from '../Error/SpinLoader';
const NavBar = () => {
    const [rawData, setRawData] = useState();
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
        }, 1000);
    }, []);

    return (
        <Router>
            {
                rawData ?
                    <Routes>

                        <Route path="/" element={<Home data={rawData} />} />
                        {
                            rawData.map((element, index) => {
                                return <Route key={index} path={`/article-${element.id}`} element={<Article0 data={element}/>} />
                            })
                        }

                        <Route path="*" element={<Error404 />} />
                    </Routes>
                    : <section className='article'>
                        <h1 className='article-title'>Loading...</h1>
                        <br />
                        <SpinLoader />
                    </section>
            }
        </Router>
    );
}

export default NavBar;