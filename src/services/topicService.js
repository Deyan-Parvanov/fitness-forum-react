import { requestGenerator } from "./requester";

const baseUrl = 'http://localhost:3030/data/topics';

export const topicServiceGenerator = (token) => {
    const request = requestGenerator(token);

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const topics = Object.values(result);
    
        return topics;
    };
    
    const getOne = async (topicId) => {
        const result = await request.get(`${baseUrl}/${topicId}`);
    
        return result;
    };
    
    const create = async (topicData) => {
        const result = await request.post(baseUrl, topicData);
    
        console.log(result);
    
        return result;
    };
    
    const edit = (topicId, data) => request.put(`${baseUrl}/${topicId}`, data);

    const deleteTopic = (topicId) => request.delete(`${baseUrl}/${topicId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteTopic,
        // addComment,
    };
};