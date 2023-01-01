import Header from '../Header/Header';
import Headlines from './Headlines/Headlines';
import './Home.css';
import '../ArticleSection/ArticleSection.css';
import Local from './Local/Local';
import MainNav from './MainNav';

const Home = (props) => {

    return (
        <div className='My-Color-Theme-5-hex'>
            <Header />
            <MainNav data={props}/>
            <section className="home">
                <Headlines />
                <Local />
            </section>
        </div>
    );
}

export default Home;