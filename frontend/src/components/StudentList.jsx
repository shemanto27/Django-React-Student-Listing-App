import { useState, useEffect } from "react"
import { GetStudents } from './../API_Call/GetStudents';


function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(
        () => {
            let mounted = true;
            GetStudents()
            .then(data =>{
                if(mounted){
                    setStudents(data)
                }
            })
            return () => mounted = false;
        }, []
    )

  return (
    <div>
      <h1>List</h1>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Bio</th>
                <th>Phone</th>
                <th>Registration Date</th>
            </tr>
        </thead>
        <tbody>
            {students.map((student) =>{
            return(
            <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.bio}</td>
                <td>{student.phone}</td>
                <td>{student.registrationDate}</td>
            </tr>);
            })
            }
        </tbody>
    </table>
    </div>

  )
}

export default StudentList
