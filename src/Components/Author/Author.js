import './Author.css';

const Author = () => {
    return (
        <section className="author">
            <img src='/images/sirFancyPants.jpg' alt='Sir Fancy Pants was here'></img>
            <section>
                <h3>Written by <span>sir fancy pants</span> a special snow flake</h3>
                <h4>Posted: 12/20/2045</h4>
                <h5>Last updated: Never</h5>
            </section>
        </section>
    );
}

export default Author;