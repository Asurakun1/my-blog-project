import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MainNav = (props) => {

    const navigate = useNavigate();
    const handleClick = () => {
        const random = Math.floor(Math.random() * props.data.length) + 1;
        console.log(random);
        navigate(`/article-${random}`);
        window.scrollTo(0,0);
    }

    const scrollUp = () =>{
        window.scrollTo(0,0);
    }
    return(
        <nav className='main-nav'>
        {
            <ul>
                <li><NavLink to="/" className="link">Home</NavLink></li>
                <li className="link" onClick={handleClick}>Random Article</li>
                <li><NavLink to='/about-us' onClick={scrollUp} className="link">About us</NavLink></li>
                <li><NavLink to='/contact' onClick={scrollUp} className="link">Contact</NavLink></li>
            </ul>
        }
    </nav>
    );
}

export default MainNav;