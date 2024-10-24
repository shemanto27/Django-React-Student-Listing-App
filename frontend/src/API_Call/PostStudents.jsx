import axios from "axios";

export function PostStudents(student) {
  return axios.post('http://127.0.0.1:8000/api/students/',
    {
    "id": null,
    "name": student.name.value,
    "email": student.email.value,
    "bio": student.bio.value,
    "phone": student.phone.value,
    "registrationDate" : null
    }
  )
  .then(response => response.data)
}


