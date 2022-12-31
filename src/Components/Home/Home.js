import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import Headlines from './Headlines/Headlines';
import './Home.css';
import '../ArticleSection/ArticleSection.css';
import Local from './Local/Local';
import { useNavigate } from 'react-router-dom';
const Home = (props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        const random = Math.floor(Math.random() * props.data.length) + 1;
        navigate(`/article-${random}`);
    }

    return (
        <div className='My-Color-Theme-5-hex'>
            <Header />
            <nav className='main-nav'>
                {
                    <ul>
                        <li><NavLink to="/" className="link">Home</NavLink></li>
                        <li className="link" onClick={handleClick}>Random Article</li>
                        <li><NavLink to='/about-us' className="link">About us</NavLink></li>
                        <li><NavLink to='/contact' className="link">Contact</NavLink></li>
                    </ul>
                }
            </nav>
            <section className="home">
                <Headlines />
                <Local />
            </section>
        </div>
    );
}

export default Home;