import { useEffect } from "react";
import { useParams } from "react-router-dom";

import "./style/edit-topic.css";
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { topicServiceGenerator } from "../../services/topicService";

export const Edit = ({
    onTopicEditSubmit,
}) => {
    const { topicId } = useParams();
    const topicService = useService(topicServiceGenerator);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        title: '',
        category: '',
        imageUrl: '',
        description: '',
    }, onTopicEditSubmit);

    useEffect(() => {
        topicService.getOne(topicId)
            .then(result => {
                changeValues(result);
            });
    }, [topicId]);

    return (
        <section className="editPage">
            <form id="edit" method="post" action="" onSubmit={onSubmit}>
                <h1>Edit Topic</h1>
                <div className="container">
                    <label htmlFor="title">Title</label>
                    <input id="title" type="text" name="title" placeholder="Title" value={values.title} onChange={changeHandler} required />
                    <label htmlFor="category">Category</label>
                    <select id="category" name="category" value={values.category} onChange={changeHandler} >
                        <option value="1">-------</option>
                        <option value="2">Nutrition</option>
                        <option value="3">Exercises</option>
                        <option value="4">Supplements</option>
                        <option value="5">Other</option>
                    </select>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" placeholder="Description" value={values.description} onChange={changeHandler} ></textarea>
                    <label htmlFor="imgUrl">Image URL</label>
                    <input id="imgUrl" type="url" placeholder="Image URL" value={values.imageUrl} onChange={changeHandler}  required />
                </div>
                <button className="edit-topic" type="submit">Submit</button>
            </form>
        </section>
    );
};