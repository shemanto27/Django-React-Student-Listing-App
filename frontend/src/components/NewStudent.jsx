import { useState } from 'react';
import  axios  from 'axios';

function NewStudent() {

  const id = null;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [phone, setPhone] = useState("");
  const registrationDate = null;

  function addStudent(e){
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/students/', {
      id,
      name,
      email,
      bio,
      phone,
      registrationDate
    })



  }
  return (
    <>
    <div>
      <h1>Add new Student</h1>
    </div>

    <div className="card bg-base-100 w-96 shadow-xl">
    <div className="card-body">
    <form onSubmit={addStudent}>
      <input name='name' type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" onChange={(e) => setName(e.target.value)} />
      <input name='phone' type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" onChange={(e) => setEmail(e.target.value)} />
      <input name='bio' type="text" placeholder="Bio" className="input input-bordered w-full max-w-xs" onChange={(e) => setBio(e.target.value)} />
      <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" onChange={(e) => setPhone(e.target.value)} />
      <button type='submit' className="btn btn-primary">Add New Student</button>
    </form>
    
      </div>
    </div>
    </>   
  )
}

export default NewStudent
