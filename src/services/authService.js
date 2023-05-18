import { requestGenerator } from './requester';

const baseUrl = `http://localhost:3030/users`;

export const authServiceGenerator = (token) => {
    const request = requestGenerator(token);

    return {
        login: (loginData) => request.post(`${baseUrl}/login`, loginData),
        register: (data) => request.post(`${baseUrl}/register`, data),
        logout: () => request.get(`${baseUrl}/logout`),
    };
};