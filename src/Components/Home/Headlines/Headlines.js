import { Link } from "react-router-dom";
import './Headlines.css';
const Headlines = () => {
    return (
            <section className='headlines'>
                <h3>Latest Headlines</h3>
                <ul>
                    <li><Link to="/article-2" className='link'>New Study Shows Majority of People Actually Just Pretending to Like Craft Beer</Link></li>
                    <p>Are You Really a Craft Beer Fan, or Just Pretending?<br />
                        A new study has found that the majority of people who claim to enjoy craft beer are actually<br />
                        just pretending.
                    </p>
                    <li><Link to="/article-3" className='link'>World Health Organization Announces That Stress is Actually Just a Myth</Link></li>
                    <p>
                        "We have come to the conclusion that stress does not exist," said Dr. Maria Hernandez,<br />
                        a spokesperson for the WHO.
                    </p>
                    <li><Link to="/article-4" className='link'>Trump Administration Unveils Plan to Build Wall Around the Sun</Link></li>
                    <p>
                        "The sun is a threat to our national security, and we must take action to protect our citizens,"<br />
                        said White House Press Secretary Sarah Huckabee Sanders. "This wall will be the most <br />
                        advanced solar defense system in the world, and it will make America great again."
                    </p>
                    <li><Link to="/article-5" className='link' >Experts: Global Economic Collapse Just a Coincidence, Definitely Not the Result of Reckless, Short-Sighted Policies</Link></li>
                    <p>
                        According to leading economist Dr. John Smith, the collapse is simply a "random <br />
                        occurrence" and has nothing to do with the fact that governments have been printing <br />
                        unlimited amounts of money, leading to skyrocketing inflation and the devaluation of <br />
                        currencies.
                    </p>
                    <li><Link to="/article-6" className='link'>Government Announces Plan to Replace All Forms of Communication with Emoji-Only Text Messages</Link></li>
                    <p>
                        "In a shocking move, the government has announced plans to phase out all forms of traditional <br/>
                        communication, including verbal, written, and even sign language.The new plan, dubbed "Emoji-Only,"
                         will require all citizens to communicate exclusively through a series of carefully selected emojis.
                    </p>
                    <li><Link to="/article-7" className="link">New Study Shows That Making the Stupid Even Stupider is Actually Possible</Link></li>
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