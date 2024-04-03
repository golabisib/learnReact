// List Rendering
import { useState } from "react";
import CourseCard from "./courseCard.jsx";
import styles from "./Courselist.module.css"
function CourseList(){

    const [selected,] = useState(true);

    const courses = [
        {id: 1 , name:"React", description:"This is React course"},
        {id: 2 , name:"JavaScript", description:"This is Js course"},
        {id: 3 , name:"Next", description:"This is Next course"},
        {id: 4 , name:"Node", description:"This is Node course"}
    ];
    return(
        <div className={selected ? styles.container : styles.selected}>
        <h3>course List</h3>
        <ul>
            {courses.map((course) => (
                <CourseCard key={course.id} data={course}/>
            ))}
                </ul>
        </div>
    );
}

export default CourseList
