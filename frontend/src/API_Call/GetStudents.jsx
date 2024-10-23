import axios from "axios";


export function GetStudents() {
  return axios.get('http://127.0.0.1:8000/api/students/')
        .then(response => response.data)
}


