import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
    <h1>React + Django Student Listing App</h1>
    <div className="flex gap-5">
    <NavLink to='/' className={({isActive}) => isActive ? 'text-red-500' : 'text-black'}>Home</NavLink>
    <NavLink to='update' className={({isActive}) => isActive ? 'text-red-500' : 'text-black'}>Update</NavLink>
    <NavLink to='new' className={({isActive}) => isActive ? 'text-red-500' : 'text-black'}>New</NavLink>
    </div>
    </>
  )
}

export default Header
