import { useEffect } from "react";
import { useParams } from "react-router-dom";

import "../style/edit-topic.css";
import { useForm } from "../../../hooks/useForm";

export const EditComment = ({
    onCommentEditSubmit,
}) => {
    const { commentId } = useParams();
    const topicService = useService(topicServiceGenerator);
    const { commentValues, commentChangeHandler, onSubmit, commentChangeValues } = useForm({
        _id: '',
        comment: '',
    });

    useEffect(() => {
        topicService.getOne(commentId)
            .then(result => {
                commentChangeValues(result);
            });
    }, [commentId]);

    return (
        <div className="comment-edit">
            <form id="edit" method="post" action="" onSubmit={onSubmit} >
                <h1>Edit Comment</h1>
                <div className="comment-edit-content">
                    <textarea id="description" name="description" value={commentValues.description} onChange={commentChangeHandler} ></textarea>
                </div>
                <button className="edit-comment" type="submit">Submit</button>
            </form>
        </div>
    );
}