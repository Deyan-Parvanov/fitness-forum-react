import { useEffect, useState, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { topicServiceGenerator } from '../../services/topicService';
import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../AuthContext/AuthContext';
import { AddComment } from './AddComment/AddComment';

import "./style/forum-style.css";
import { topicReducer } from '../../reducers/topicReducer';



export const Forum = () => {
    const { topicId } = useParams();
    const { userId, isAuthenticated, userEmail } = useAuthContext();
    const [topic, dispatch] = useReducer(topicReducer, {});
    const topicService = useService(topicServiceGenerator);
    const navigate = useNavigate();


    useEffect(() => {
        Promise.all([
            topicService.getOne(topicId),
            commentService.getAll(topicId),
        ]).then(([topicData, comments]) => {
            const topicState = {
                ...topicData,
                comments,
            };

            dispatch({ type: 'TOPIC_FETCH', payload: topicState });
        });
    }, [topicId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(topicId, values.comment);

        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            userEmail,
        });
    };

    const isOwner = topic._ownerId === userId;

    const onDeleteSubmit = () => {
        // TODO: confirm
        topicService.delete(topic._id);

        // TODO: delete from state

        navigate('/');
    };

    return (
        <section className="discussion-forum">
            <span className="section-header">Date:</span>
            <div className="topic-info">
                <div className="topic-image">
                    <img src={topic.imageUrl} alt="topic-image" />
                </div>
                <div className="topic-section">
                    <div className="topic-details">
                        <h2 className="topic-author">Author Name</h2>
                        <h1 className="topic-heading">{topic.title}</h1>
                        <h3 className="topic-category">{topic.category}</h3>
                        <p className="topic-description">{topic.description}</p>
                    </div>
                    {isOwner && (
                        <div className="buttons">
                            <button className="button-delete" onClick={onDeleteSubmit}>Delete</button>
                            <Link to={`/forum/${topic._id}/edit`} className="button-edit">Edit</Link>
                        </div>
                    )}
                </div>
            </div>
            {topic.comments && topic.comments.map(x => (
                <div className="comments" key={x._id}>
                    <span className="section-header">Date:</span>
                    <div className="topic-comments">
                        <div className="comment-author">
                            <div className="author-image">
                                <img src={x.imageUrl} alt="profile-image" />
                            </div>
                            <div className="author-details">
                                <h2 className="author-name">{x.author.email}</h2>
                                <p className="total-comments">Comments: 14</p>
                                <p className="total-likes">Likes: 5</p>
                            </div>
                        </div>
                        <div className="comment-section">
                            <div className="comment-content">
                                <p className="comment">{x.comment}</p>
                            </div>
                            {isOwner && (
                                <div className="buttons">
                                    <button className="button-delete" onClick={onDeleteSubmit}>Delete</button>
                                    <Link to={`/forum/${topic._id}/edit`} className="button-edit">Edit</Link>
                                </div>
                            )}
                        </div>
                    </div>
                    {!Object.values(topic.comments).length && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>
            ))}
            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
        </section>
    );
};
