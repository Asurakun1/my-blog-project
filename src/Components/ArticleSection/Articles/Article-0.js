import Author0 from '../Author/Author0';
import ReactMarkdown from 'react-markdown';
const Article0 = (props) => {

    const loading = "Loading...";
    return (
        <section className="article">
            <Author0 />
            <h1 className="article-title">{props.data ? <ReactMarkdown>{props.data.title}</ReactMarkdown> : loading}</h1>
            {
                props.data ?
                    <article>
                        <div>
                            {
                                props.data.imgsrc ?
                                    <img src={props.data.imgsrc} alt={props.data.title} />
                                    : ""
                            }
                        </div>
                        <section>
                            {props.data.article.section.map((element, index) => {
                                return <ReactMarkdown key={index}>{element}</ReactMarkdown>
                            })}
                        </section>
                    </article>
                    : loading
            }
        </section>
    );
}

export default Article0;