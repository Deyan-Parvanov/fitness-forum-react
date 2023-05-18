import { Link } from 'react-router-dom';

import "../style/home.css";

export const Topics = ({
    _id,
    title,
    description,
    imageUrl,
    category,
}) => {
    return (
        <li className="cards__item">
            <div className="card">
                <div className="card__image">
                    <img src={imageUrl} />
                </div>
                <div className="card__content">
                    <div className="card__title">{title}</div>
                    <div className="card__category">{category}</div>
                    <p className="card__text">{description}</p>
                    <Link to={`/forum/${_id}`} className="btn btn--block card__btn">More</Link>
                </div>
            </div>
        </li>
    );
};