import { request } from "../network/request"

export function getDepartment() {
    return request({
        url: "/http/department",
        method: "POST",
        data: {
            mtype: "1"
        }
    });
}

export function addDepartment({ title,
    type,
    teacher }) {
    return request({
        url: "/http/department",
        method: "POST",
        data: {
            mtype: "2",
            title: title,
            type: type,
            teacher: teacher
        }
    });
}

export function delDepartment({ id }) {
    return request({
        url: "/http/department",
        method: "POST",
        data: {
            mtype: "3",
            id: id
        }
    });
}

export function editDepartment({ title,
    type,
    teacher,
    _id }) {
    return request({
        url: "/http/department",
        method: "POST",
        data: {
            mtype: "4",
            title: title,
            type: type,
            teacher: teacher,
            _id: _id
        }
    });
}
