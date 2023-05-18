import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

export const useService = (serviceGenerator) => {
    const { token } = useContext(AuthContext);

    const service = serviceGenerator(token);

    return service;
};