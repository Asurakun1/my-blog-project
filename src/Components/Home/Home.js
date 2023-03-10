import Header from '../Header/Header';
import Headlines from './Headlines/Headlines';
import './Home.css';
import '../ArticleSection/ArticleSection.css';
import Local from './Local/Local';
import MainNav from './MainNav';

const Home = (props) => {

    return (
        <div>
            <Header quote={props.quote}/>
            <MainNav data={props.data}/>
            <section className="home">
                <Headlines data={props.data}/>
                <Local data={props.data}/>
            </section>
        </div>
    );
}

export default Home;