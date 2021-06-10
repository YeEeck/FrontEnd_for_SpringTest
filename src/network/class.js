import { request } from "../network/request"

export function addClass({ title,
    tip,
    area,
    time,
    teacher }) {
    return request({
        url: "/http/class",
        method: "POST",
        data: {
            mtype: "2",
            title: title,
            tip: tip,
            area: area,
            time: time,
            teacher: teacher
        }
    });
}

export function delClass({ id }) {
    return request({
        url: "/http/class",
        method: "POST",
        data: {
            mtype: "3",
            id: id
        }
    });
}

export function getClass() {
    return request({
        url: "/http/class",
        method: "POST",
        data: {
            mtype: "1"
        }
    });
}

export function editClass({ title,
    tip,
    area,
    time,
    teacher,
    _id }) {
    return request({
        url: "/http/class",
        method: "POST",
        data: {
            mtype: "4",
            title: title,
            tip: tip,
            area: area,
            time: time,
            teacher: teacher,
            _id: _id
        }
    });
}