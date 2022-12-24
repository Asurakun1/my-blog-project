import './Local.css';
import { Link } from 'react-router-dom';
const Local = () =>{
    return(
        <section className="local">
            <h4>Local</h4>
            <ul>
                <li><Link className='link'>Town's Water Supply Switched to Mountain Dew</Link></li>
                <br/>
                <li><Link className='link'>Local Man Declares Himself Mayor, Holds Inauguration in Living Room</Link></li>
                <br/>
                <li><Link className='link'>Local Man Claims to Have Invented Time Travel, Offers Tours for $100/Hour</Link></li>
                <br/>
                <li><Link className='link'>New Study Shows Majority of People Who Claim to Like Volunteering Just Doing it for the Instagram Selfies</Link></li>
                <br/>
                <li><Link className='link'>Local School Board Unveils Plan to Turn Entire District into a Giant Escape Room</Link></li>
                <br/>
                <li><Link className='link'>New Study Shows Majority of People Who Claim to Like Attending Town Hall Meetings Just Doing it to Get Out of Doing Actual Work</Link></li>
                <br/>
            </ul>
        </section>
    );
}

export default Local;