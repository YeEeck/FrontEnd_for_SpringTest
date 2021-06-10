import { request } from "../network/request"

export function PostTest({ username, password }) {
    return request({
        url: "/login",
        method: "POST",
        data: {
            username: username,
            password: password
        }
    });
}