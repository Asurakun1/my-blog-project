import './Local.css';
import { Link } from 'react-router-dom';
const Local = () =>{
    return(
        <section className="local">
            <h4>Local</h4>
            <ul>
                <li><Link className='link'>Local Man Robs Bank, Shocked to Find Out It's Illegal</Link></li>
                <br/>
                <li><Link className='link'>Man Thinks SWAT Team Raiding His Home is Actually a Surprise Birthday Party, Gets Tased and Handcuffed</Link></li>
                <br/>
                <li><Link className='link'>Outraged Man Demands to See Manager After Learning It's Actually Illegal to Steal From Local Pharmacy</Link></li>
                <br/>
                <li><Link className='link'>Local Shops Embrace the Future by Replacing Employees with Robots: "They Never Complain and They Don't Need Breaks"</Link></li>
                <br/>
                <li><Link className='link'>Local Man Brags About Being 'Isekai'd' into Fantasy World, Returns with Terrible Manuscript and No Marketable Skills</Link></li>
                <br/>
                <li><Link className='link'>New Study Shows Majority of People Who Claim to Like Attending Town Hall Meetings Just Doing it to Get Out of Doing Actual Work</Link></li>
                <br/>
            </ul>
        </section>
    );
}

export default Local;