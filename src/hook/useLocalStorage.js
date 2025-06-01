import { useEffect, useState } from "react";

// export const useLocalStorage = (key, defaultValue) => {
//     const [value, setValue] = useState(() => {
//         try {
//             JSON.parse(localStorage.getItem(key)) || defaultValue;

//         }
//         catch { return defaultValue }
//     });
//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(defaultValue));
//     }, [key, defaultValue]);
//     return [value, setValue];

// }


export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : defaultValue;
        } catch {
            return defaultValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};
