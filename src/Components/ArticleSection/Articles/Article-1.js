
const Article1 = (props) => {
    return (
        <section className="article">

            <h1>{typeof props.data !== "string" ? props.data[0].title : props.data}</h1>
            <article>
                <ol>
                    {
                        typeof props.data !== "string" ? (props.data[0].article.list.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })) : props.data
                    }
                </ol>
            </article>
        </section>
    );
}

export default Article1;