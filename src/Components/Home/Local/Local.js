import './Local.css';
import { Link } from 'react-router-dom';
const Local = (props) => {
    const localArticles = props.data.filter((element) => {
        return element.articleType === 'local';
    });
    const handleClick = () => {
        window.scrollTo(0, 0);
    }
    return (
        <section className="local">
            <h4>Local</h4>
            <ul>
                {
                    localArticles.map((element, index) => {
                        return <li key={index}>
                            <Link to={`article-${element.id}`} onClick={handleClick} className='link'>{element.title}</Link>
                            <p></p>
                            <br/>
                        </li>
                    })
                }
            </ul>
        </section>
    );
}

export default Local;