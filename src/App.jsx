// import './App.css';
import './css/sb-admin-2.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Portal from "./Component/Portal";
import Teacher from "./Component/Teacher";
import Students from './Component/Students';
import CreateTeachers from './Component/CreateTeachers';
import CreateStudents from './Component/CreateStudents';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portal />}>
              {/* Teacher */}
              <Route path='teachers' element={<Teacher />} />
              <Route path='create-Teachers' element={<CreateTeachers />} />
              
              
              {/* Student */}
              <Route path='students' element={<Students />} />
              <Route path='create-students' element={<CreateStudents />} />
            </Route>
          </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
