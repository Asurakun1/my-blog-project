import Author0 from '../Author/Author0';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
const Article0 = (props) => {
    const [data, setData] = useState();


    useEffect(() => {
        const dataToFetch = async () => {
            try {
                const response = await fetch('/data/articles.JSON');
                const jsonResponse = await response.json();
                setData(jsonResponse);
            } catch (e) {
                console.log(e);
            }
        }

        setTimeout(() => {
            dataToFetch();
        }, 1000);
    }, [])


    const loading = "Loading...";

    console.log(props.data.id, data)
    return (
        <section className="article">
            <Author0 />
            <h1 className="article-title">{data ? <ReactMarkdown>{props.data.title}</ReactMarkdown> : loading}</h1>
            {
                data ?
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