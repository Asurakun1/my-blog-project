import ReactMarkdown from "react-markdown";

const Article2 = (props) => {
    const loading = "Loading...";
    return (
        <section className="article">
            <h1 className="article-title">{typeof props.data !== "string" ? props.data.title : loading}</h1>
            {
                typeof props.data !== "string" ?
                    <article>
                        <img src="/images/stress.jpg" alt="man being stressed"/>
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

export default Article2;