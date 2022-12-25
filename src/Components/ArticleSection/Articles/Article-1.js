import ReactMarkdown from "react-markdown";

const Article1 = (props) => {
    const loading = "Loading...";
    return (
        <section className="article">

            <h1 className="article-title">{typeof props.data !== "string" ? props.data.title : loading}</h1>

            {
                typeof props.data !== "string" ?
                    <article>
                        <img src="/images/craft-beer.jpg" alt="craft-beer-img" />
                        <section>
                            <ReactMarkdown>{props.data.article.section[0]}</ReactMarkdown>
                            <ReactMarkdown>{props.data.article.section[1]}</ReactMarkdown>
                            <ReactMarkdown>{props.data.article.section[2]}</ReactMarkdown>
                            <ReactMarkdown>{props.data.article.section[3]}</ReactMarkdown>
                            <ReactMarkdown>{props.data.article.section[4]}</ReactMarkdown>
                        </section>
                    </article>
                    : loading
            }
        </section>
    );
}

export default Article1;