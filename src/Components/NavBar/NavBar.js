import './NavBar.css';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import ArticleSection from '../ArticleSection/ArticleSection';
import Error404 from '../Error/Error';
const NavBar = () => {
    return (
        <Router>
            <nav className='main-nav'>
                <ul>
                    <li><NavLink to="/" className="link">Home</NavLink></li>
                    <li><NavLink to="/random-article" className="link">Random Article</NavLink></li>
                    <li><NavLink className="link">Back</NavLink></li>
                    <li><NavLink className="link">Forward</NavLink></li>
                    <li><NavLink to='/about-us' className="link">About us</NavLink></li>
                    <li><NavLink to='/contact' className="link">Contact</NavLink></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/random-article" element={<ArticleSection/>} />
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </Router>
    );
}

export default NavBar;