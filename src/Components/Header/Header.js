import './Header.css';
import { useState, useEffect } from 'react';
const Header = () => {
    const [quote, setQuote] = useState();

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch('/data/quotes.JSON');
                const jsonResponse = response.ok ? await response.json() : console.log(response);
                setQuote(jsonResponse);
            } catch (e) {
                console.log(e)
            }
        }
        setTimeout(() => {
            fetchQuote();
        }, 1000);

    }, [])
    const random = quote ? Math.floor(Math.random() * quote.length) : null;
    return (
        <div className='layer'>
            <h1 className='title'>The Daily Grumble</h1>
            {
                quote ?
                    <section className='quotes'>
                        <section className='quote'>
                            <h3>
                                {quote[random].quote}
                            </h3>
                        </section>
                        <section className='quote-author'><h4> - {quote[random].author}</h4></section>
                    </section>
                    :
                    <h2>Loading...</h2>
            }
        </div>
    );
}

export default Header;