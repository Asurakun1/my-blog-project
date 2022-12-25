import Author0 from '../Author/Author0';
import ReactMarkdown from 'react-markdown';
const Article0 = (props) =>{

    const loading = "Loading...";
    return (
        <section className="article">
            <Author0/>
            <h1 className="article-title">{typeof props.data !== "string" ? props.data.title : loading}</h1>
            <article>
                <ol>
                    {
                        typeof props.data !== "string" ? (props.data.article.list.map((element, index) => {
                            return <li key={index}><ReactMarkdown>{element}</ReactMarkdown></li>
                        })) : loading
                    }
                </ol>
            </article>
        </section>
    );
}

export default Article0;