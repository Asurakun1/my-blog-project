import { Link } from "react-router-dom";
import './Headlines.css';
const Headlines = () => {
    return (
            <section className='headlines'>
                <h3>Latest Headlines</h3>
                <ul>
                    <li><Link to="/craft-Beer" className='link'>New Study Shows Majority of People Actually Just Pretending to Like Craft Beer</Link></li>
                    <p>Are You Really a Craft Beer Fan, or Just Pretending?<br />
                        A new study has found that the majority of people who claim to enjoy craft beer are actually<br />
                        just pretending.
                    </p>
                    <li><Link to="/who-Stress-Myth" className='link'>World Health Organization Announces That Stress is Actually Just a Myth</Link></li>
                    <p>
                        "We have come to the conclusion that stress does not exist," said Dr. Maria Hernandez,<br />
                        a spokesperson for the WHO.
                    </p>
                    <li><Link to="/trump-wall-around-sun" className='link'>Trump Administration Unveils Plan to Build Wall Around the Sun</Link></li>
                    <p>
                        "The sun is a threat to our national security, and we must take action to protect our citizens,"<br />
                        said White House Press Secretary Sarah Huckabee Sanders. "This wall will be the most <br />
                        advanced solar defense system in the world, and it will make America great again."
                    </p>
                    <li><Link to="/global-economic-collapse" className='link' >Experts: Global Economic Collapse Just a Coincidence, Definitely Not the Result of Reckless, Short-Sighted Policies</Link></li>
                    <p>
                        According to leading economist Dr. John Smith, the collapse is simply a "random <br />
                        occurrence" and has nothing to do with the fact that governments have been printing <br />
                        unlimited amounts of money, leading to skyrocketing inflation and the devaluation of <br />
                        currencies.
                    </p>
                    <li><Link to="/amazon-plans-brick-and-mortor" className='link'>Amazon Announces Plan to Open Brick and Mortar Stores in Customers' Homes</Link></li>
                    <p>
                        "We believe that the future of retail is in the home," said Amazon CEO Jeff Bezos. "Our <br />
                        stores will be tailored to each customer's unique interests and needs, and we'll be able to <br />
                        offer an even more seamless and convenient shopping experience."<br />
                    </p>
                    <li><Link to="/research-article" className="link">New Study Shows That Making the Stupid Even Stupider is Actually Possible</Link></li>
                    <p>
                        In a shocking new discovery, scientists have found a way to make the stupid even stupider. <br/>
                        In a groundbreaking study, researchers at the Institute of Really Obvious Things found that <br/>
                        by exposing the already dim-witted to even more idiotic stimuli, their intelligence levels <br/>
                        could be drastically reduced.
                    </p>
                </ul>
            </section>
    );
}

export default Headlines;