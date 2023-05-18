import { useForm } from "../../../hooks/useForm";

export const AddComment = ({
    onCommentSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        comment: '',
    }, onCommentSubmit);

    return (
        <div className="add-comment">
            <h1 className="add-comment-header">Add Comment</h1>
            <form action="post" onSubmit={onSubmit}>
                <textarea name="comment" id="comment" cols="30" rows="5" placeholder="Comment......" value={values.comment} onChange={changeHandler}></textarea>
                <button type="submit" className="add-comment-btn">Submit</button>
            </form>
        </div>
    );
};
