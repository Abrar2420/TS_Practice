import type {Student, Course} from "./types.js" 
import createStudent from "./utils.js"

console.log(createStudent({name: "harry", grade: 90}));

let course: Course = {
    name: "MERN",
    credits: 4
}

