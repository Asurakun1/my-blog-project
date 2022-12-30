import './NavBar.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Error404 from '../Error/Error';
import Article0 from '../ArticleSection/Articles/Article-0';
import { useState, useEffect } from "react";
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
    }, [rawData]);

    return (
        <Router>
            {
                rawData ?
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/random-article" element={<Article0 data={rawData[0]} />} />
                        <Route path="/craft-Beer" element={<Article0 data={rawData[1]} />} />
                        <Route path="/who-Stress-Myth" element={<Article0 data={rawData[2]} />} />
                        <Route path="/trump-wall-around-sun" element={<Article0 data={rawData[3]} />} />
                        <Route path="/global-economic-collapse" element={<Article0 data={rawData[4]} />} />
                        <Route path="/government-replace-all-forms-of-communication" element={<Article0 data={rawData[5]} />} />
                        <Route path="/study-shows-that-stupid-can-get-even-stupider" element={<Article0 data={rawData[6]} />} />
                        <Route path="/local/man-robs-bank" element={<Article0 data={rawData[7]} />} />
                        <Route path="/local/swat-team-suprise-party" element={<Article0 data={rawData[8]} />} />
                        <Route path='/local/outraged-man-demans-to-see-manager-after-pharmacy-robbery' element={<Article0 data={rawData[9]} />} />
                        <Route path='/local/they-took-our-jobs' element={<Article0 data={rawData[10]} />} />
                        <Route path='/local/isekai' element={<Article0 data={rawData[11]} />} />
                        <Route path='/local/gambler-loses-everything-demands-to-see-manager' element={<Article0 data={rawData[12]} />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                    : <section className='article'>
                        <h1 className='article-title'>Loading...</h1>

                    </section>
            }
        </Router>
    );
}

export default NavBar;