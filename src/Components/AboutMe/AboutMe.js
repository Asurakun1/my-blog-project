import ReactMarkdown from "react-markdown";
import './AboutMe.css';
const AboutMe = () => {
    return (
        <div className="My-Color-Theme-5-hex about">
            <section className="about-us">
                <h1>About us</h1>
            </section>
            <ReactMarkdown className="about-us about-us-box">
                Welcome to the ***Daily Grumble***, your go-to source for all the latest news and happenings
                across the United States and around the world. We're here to bring you the most
                ***outrageous, absurd, and ridiculous*** stories from every corner of the globe, with a healthy
                dose of sarcasm and satire thrown in for good measure. Whether you're looking for the
                latest scoop on local politics, international affairs, or just want to laugh at the absurdity of it
                all, the Daily Grumble has you covered. So sit back, relax, and get ready to grumble with us
                as we bring you the most outrageous and hilarious news stories you'll read all day."
            </ReactMarkdown>
        </div>
    )
}


export default AboutMe;