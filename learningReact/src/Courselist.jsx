// List Rendering

function CourseList(){
    const courses = [
        {id: 1 , name:"React"},
        {id: 2 , name:"JavaScript"},
        {id: 3 , name:"Next"},
        {id: 4 , name:"Node"}
    ];
    return(
        <>
        <h3>course List</h3>
        <ul>
            {courses.map((course) => {
                return (
                    <li key={courses.id}>{course.name}</li>
                );
            })}
                </ul>
        </>
    );
}
export default CourseList
