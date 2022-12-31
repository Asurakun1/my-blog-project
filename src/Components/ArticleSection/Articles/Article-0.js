import Author0 from '../Author/Author0';
import ReactMarkdown from 'react-markdown';
const Article0 = (props) => {

    return (
        <section className="article">
            <Author0 />
            <h1 className="article-title">{<ReactMarkdown>{props.data.title}</ReactMarkdown>}</h1>
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
        </section>
    );
}

export default Article0;