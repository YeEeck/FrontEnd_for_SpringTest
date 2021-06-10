import axios from "axios";

export function request(config) {
    const instant = axios.create({
        baseURL: "/api",
        headers: {
            'Content-Type': 'application/json'
        },
        timeout: 8000,
    });

    return instant(config);
}