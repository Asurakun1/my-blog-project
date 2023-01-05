import { Link } from "react-router-dom";
import './Headlines.css';
import ReactMarkdown from "react-markdown";
const Headlines = (props) => {

    const headlineArticles = props.data.filter((element) => {
        return element.articleType === 'headline';
    });
    const handleClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <section className='headlines'>
            <h3>Latest Headlines</h3>
            <ul>
                {
                    headlineArticles.map((element, index) => {
                        return <li key={index}>
                                <Link to={`/article-${element.id}`} onClick={handleClick} className='link'>{element.title}</Link>
                                <ReactMarkdown>{element.article.section[0].substring(0,150) + "..."}</ReactMarkdown>
                                <br></br>
                            </li>
                    })
                }
            </ul>
        </section>
    );
}

export default Headlines;