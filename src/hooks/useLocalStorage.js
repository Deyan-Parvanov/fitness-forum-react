import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const persistetStateSerialized = localStorage.getItem(key);
        if (persistetStateSerialized) {
            const persistedState = JSON.parse(persistetStateSerialized);

            return persistedState;
        };

        return initialValue;
    });

    const setLocalStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    };

    return [
        state,
        setLocalStorageState,
    ];
};