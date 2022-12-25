import ReactMarkdown from "react-markdown";

const Article3 = (props) => {
    return (
        <section className="article">
            <h1 className="article-title">{typeof props.data !== "string" ? props.data.title : "Loading..."}</h1>
            {
                typeof props.data !== "string" ?
                    <article>
                        <section>
                            {
                                props.data.article.section.map((element, index) => {
                                    return <ReactMarkdown key={index}>{element}</ReactMarkdown>
                                })
                            }
                        </section>
                    </article>
                    : "Loading..."
            }
        </section>
    );
}

export default Article3;