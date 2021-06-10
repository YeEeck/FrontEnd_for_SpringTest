import { request } from "../network/request"

export function PostTest({ username, password }) {
    return request({
        url: "/reg",
        method: "POST",
        data: {
            username: username,
            password: password
        }
    });
}