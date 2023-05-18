import { Topics } from "./Topics/Topics";
import "./style/home.css";

export const Home = ({
    topics,
}) => {
    return (
        <div className="home">
            {topics && (
                <div className="home-cards">
                    <ul className="cards">
                        {topics.map(x => <Topics key={x._id} {...x} />)}
                    </ul>
                </div>
            )}
            {!Object.values(topics).length && (
                <p className="no-cards">No topics yet! Please create new topic.</p>
            )}
        </div>
    );
};