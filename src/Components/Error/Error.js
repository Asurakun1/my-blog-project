import './Error.css';
import SpinLoader from './SpinLoader';

const Error404 = () => {
    return (
        <div className='error-page'>
        <section className='error'>
            <section>
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are trying to access doesn't exist</p>
            </section>
            <SpinLoader/>
        </section>
        </div>
    );
}

export default Error404;