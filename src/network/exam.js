import { request } from "../network/request"

export function getExam() {
    return request({
        url: "/http/getExam",
        method: "GET"
    });
}

export function addExam({ newTitle,
    newTip,
    newArea,
    newTime,
    newTeacher }) {
    return request({
        url: "/http/addExam",
        method: "POST",
        data: {
            title: newTitle,
            tip: newTip,
            area: newArea,
            time: newTime,
            teacher: newTeacher
        }
    });
}

export function delExam({ id }) {
    return request({
        url: "/http/delExam",
        method: "POST",
        data: {
            id: id
        }
    });
}

export function editExam({ title,
    tip,
    area,
    time,
    teacher,
    _id }) {
    return request({
        url: "/http/editExam",
        method: "POST",
        data: {
            title: title,
            tip: tip,
            area: area,
            time: time,
            teacher: teacher,
            _id: _id
        }
    });
}


export function getScore() {
    return request({
        url: "/http/score",
        method: "POST",
        data: {
            mtype: "1"
        }
    });
}

export function addScore({ name,
    type,
    Sclass,
    idNo,
    exam,
    score,
    time }) {
    return request({
        url: "/http/score",
        method: "POST",
        data: {
            mtype: "2",
            name: name,
            type: type,
            Sclass: Sclass,
            idNo: idNo,
            exam: exam,
            score: score,
            time: time
        }
    });
}

export function delScore({ id }) {
    return request({
        url: "/http/score",
        method: "POST",
        data: {
            mtype: "3",
            id: id
        }
    });
}

export function getpaScore() {
    return request({
        url: "/http/pascore",
        method: "POST",
        data: {
            mtype: "1"
        }
    });
}

export function addpaScore({ name,
    type,
    Sclass,
    idNo,
    exam,
    score,
    time }) {
    return request({
        url: "/http/pascore",
        method: "POST",
        data: {
            mtype: "2",
            name: name,
            type: type,
            Sclass: Sclass,
            idNo: idNo,
            exam: exam,
            score: score,
            time: time
        }
    });
}

export function delpaScore({ id }) {
    return request({
        url: "/http/pascore",
        method: "POST",
        data: {
            mtype: "3",
            id: id
        }
    });
}