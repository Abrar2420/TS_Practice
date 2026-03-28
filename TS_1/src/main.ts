import {Student, Course} from "./types" 
import createStudent from "./utils"

console.log(createStudent({name: "harry", grade: 90}));

let course: Course = {
    name: "MERN",
    credits: 4
}

