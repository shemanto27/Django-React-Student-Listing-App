import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout";
import StudentList from './components/StudentList';
import UpdateStudent from './components/UpdateStudent';
import NewStudent from "./components/NewStudent";



function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout/>,
        children:[
          {path: '', element: <StudentList/>},
          {path: 'update', element: <UpdateStudent/>},
          {path: 'new', element: <NewStudent/>}
        ]
      }
    ]
  );


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
