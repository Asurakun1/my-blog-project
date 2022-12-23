import './NavBar.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import ArticleSection from '../ArticleSection/ArticleSection';
import Error404 from '../Error/Error';
const NavBar = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/random-article" element={<ArticleSection/>} />
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </Router>
    );
}

export default NavBar;