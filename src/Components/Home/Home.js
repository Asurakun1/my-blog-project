import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return (
        <section className='home My-Color-Theme-5-hex'>
            <section className='headlines'>
                <h3>Latest Headlines</h3>
                <ul>
                    <li><Link to="/Craft-Beer" className='link'>New Study Shows Majority of People Actually Just Pretending to Like Craft Beer</Link></li>
                    <p>Are You Really a Craft Beer Fan, or Just Pretending?<br />
                        A new study has found that the majority of people who claim to enjoy craft beer are actually<br />
                        just pretending.
                    </p>
                    <li>World Health Organization Announces That Stress is Actually Just a Myth</li>
                    <p>
                        "We have come to the conclusion that stress does not exist," said Dr. Maria Hernandez,<br />
                        a spokesperson for the WHO.
                    </p>
                    <li>Trump Administration Unveils Plan to Build Wall Around the Sun</li>
                    <p>
                        "The sun is a threat to our national security, and we must take action to protect our citizens,"<br />
                        said White House Press Secretary Sarah Huckabee Sanders. "This wall will be the most <br />
                        advanced solar defense system in the world, and it will make America great again."
                    </p>
                    <li>New Study Shows Majority of Vegetarians Only Doing it for Instagram Followers</li>
                    <p>
                        According to a new study, the majority of vegetarians are only doing it for Instagram <br />
                        followers. The research, which surveyed thousands of self-proclaimed vegetarians, found <br />
                        that only a small percentage of respondents were motivated by ethical or health concerns. <br />
                    </p>
                    <li>Amazon Announces Plan to Open Brick and Mortar Stores in Customers' Homes</li>
                    <p>
                        "We believe that the future of retail is in the home," said Amazon CEO Jeff Bezos. "Our <br />
                        stores will be tailored to each customer's unique interests and needs, and we'll be able to <br />
                        offer an even more seamless and convenient shopping experience."<br />
                    </p>
                </ul>
            </section>
        </section>
    );
}

export default Home;