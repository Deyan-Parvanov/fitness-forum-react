import { useForm } from "../../hooks/useForm";

import "./style/create-topic.css";

export const Create = ({
    onCreateTopicHandler,
}) => {
    const {values, changeHandler, onSubmit} = useForm({
        title: '',
        category: '',
        description: '',
        imageUrl: '', 
    }, onCreateTopicHandler);
 
    return (
        <section className="createPage">
            <form id="create" method="post" action="" onSubmit={onSubmit}>
                <h1>Create Topic</h1>
                <div className="container">
                    <label htmlFor="title">Title</label>
                    <input value={values.title} onChange={changeHandler} id="title" type="text" name="title" placeholder="Title" required />
                    <label htmlFor="category">Category</label>
                    <select value={values.category} onChange={changeHandler} id="category" name="category">
                        <option value="-------">-------</option>
                        <option value="Nutrition">Nutrition</option>
                        <option value="Exercises">Exercises</option>
                        <option value="Supplements">Supplements</option>
                        <option value="Other">Other</option>
                    </select>
                    <label htmlFor="description">Description</label>
                    <textarea value={values.description} onChange={changeHandler} id="description" name="description" placeholder="Description"></textarea>
                    <label htmlFor="imgUrl">Image URL</label>
                    <input value={values.imageUrl} onChange={changeHandler} id="imgUrl" type="url" name="imageUrl" placeholder="Image URL" required />
                </div>
                <button className="submit-topic" type="submit">Submit</button>
            </form>
        </section>
    );
};