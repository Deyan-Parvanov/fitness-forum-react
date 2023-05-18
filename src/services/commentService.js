// import * as request from './requester';
import { requestGenerator } from './requester';

const baseUrl = 'http://localhost:3030/data/comments';
const request = requestGenerator();

export const getAll = async (topicId) => {
    const searchQuery = encodeURIComponent(`topicId="${topicId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`)


    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;
};

export const create = async (topicId, comment) => {
    const result = await request.post(baseUrl, { topicId, comment });

    return result;
};