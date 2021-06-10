import { request } from "../network/request"

export function getStudents() {
    return request({
        url: "/getStudents",
        method: "GET",
    });
}

export function addStudent({ name, type, age, sex, idNo, Sclass }) {
    return request({
        url: "/addStudent",
        method: "POST",
        data: {
            name: name,
            type: type,
            age: age,
            sex: sex,
            idNo: idNo,
            Sclass: Sclass
        }
    });
}

export function delStudent({ id }) {
    return request({
        url: "/delStudent",
        method: "POST",
        data: {
            _id: id
        }
    });
}

export function editStudent({ name, type, age, sex, idNo, Sclass, _id }) {
    return request({
        url: "/editStudent",
        method: "POST",
        data: {
            name: name,
            type: type,
            age: age,
            sex: sex,
            idNo: idNo,
            Sclass: Sclass,
            _id: _id
        }
    });
}

export function fliterStudent({ name, type, age, sex, idNo, Sclass }) {
    return request({
        url: "/filterStudent",
        method: "POST",
        data: {
            name: name,
            type: type,
            age: age,
            sex: sex,
            idNo: idNo,
            Sclass: Sclass
        }
    });
}