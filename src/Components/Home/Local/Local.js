import './Local.css';
import { Link } from 'react-router-dom';
const Local = () =>{

    const handleClick = () => {
        window.scrollTo(0,0);
    }
    return(
        <section className="local">
            <h4>Local</h4>
            <ul>
                <li><Link to='article-8' onClick={handleClick} className='link'>Local Man Robs Bank, Shocked to Find Out It's Illegal</Link></li>
                <br/>
                <li><Link to='article-9' onClick={handleClick} className='link'>Man Thinks SWAT Team Raiding His Home is Actually a Surprise Birthday Party, Gets Tased and Handcuffed</Link></li>
                <br/>
                <li><Link to='article-10' onClick={handleClick} className='link'>Outraged Man Demands to See Manager After Learning It's Actually Illegal to Steal From Local Pharmacy</Link></li>
                <br/>
                <li><Link to='article-11' onClick={handleClick} className='link'>Local Shops Embrace the Future by Replacing Employees with Robots: "They Never Complain and They Don't Need Breaks"</Link></li>
                <br/>
                <li><Link to='article-12' onClick={handleClick} className='link'>Local Man Brags About Being 'Isekai'd' into Fantasy World, Returns with Terrible Manuscript and No Marketable Skills</Link></li>
                <br/>
                <li><Link to='article-13' onClick={handleClick} className='link'>Man Loses Life Savings at Casino, Calls it 'Smart Financial Move' and Demands to See Manager</Link></li>
                <br/>
            </ul>
        </section>
    );
}

export default Local;