import './Error.css';

const Error404 = () => {
    return (
        <section className='error'>
            <section>
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are trying to access doesn't exist</p>
            </section>
            <div className='error-box spin'>
                <div className='error-box spin-reverse'>
                    <div className='error-box rotate'>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Error404;