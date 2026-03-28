import {Student} from "./types"


export default function createStudent(student: Student) {
    return `${student.name}, you got ${student.grade}%`
}

