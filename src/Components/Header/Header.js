import './Header.css';
const Header = (props) => {
    const random = props.quote ? Math.floor(Math.random() * props.quote.length) : null;
    return (
        <div className='layer'>
            <h1 className='title'>The Daily Grumble</h1>

                    <section className='quotes'>
                        <section className='quote'>
                            <h3>
                                {props.quote[random].quote}
                            </h3>
                        </section>
                        <section className='quote-author'><h4> - {props.quote[random].author}</h4></section>
                    </section>
        </div>
    );
}

export default Header;