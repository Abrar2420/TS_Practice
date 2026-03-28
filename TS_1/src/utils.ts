import type {Student} from "./types.js"


export default function createStudent(student: Student) {
    return `${student.name}, you got ${student.grade}%`
}

