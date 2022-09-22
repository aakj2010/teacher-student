// import './App.css';
import './css/sb-admin-2.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { AssignMentorProvider } from './Component/AssignTeacherContext';
import Portal from "./Component/Portal";
import Teacher from "./Component/Teacher";
import Students from './Component/Students';
import CreateTeachers from './Component/CreateTeachers';
import CreateStudents from './Component/CreateStudents';
import StudentView from './Component/StudentView';
import TeacherView from './Component/TeacherView';
import EditTeacher from './Component/EditTeacher';
import EditStudent from './Component/EditStudent';
import AssignTeachertoStudents from './Component/AssignTeachertoStudents';
import AssignOrChangeMentor from './Component/AssignOrChangeTeacher';


function App() {
  return (
    <>
      <BrowserRouter>
      <AssignMentorProvider>
          <Routes>
            <Route path="/" element={<Portal />}>
              {/* Teacher */}
              <Route path='Teachers' element={<Teacher />} />
              <Route path='create-Teachers' element={<CreateTeachers />} />
              <Route path='Teachers/:id' element={<TeacherView />} />
              <Route path='Teachers/edit/:id' element={<EditTeacher />} />


              <Route path='ats' element={<AssignTeachertoStudents />} />
              <Route path='act' element={<AssignOrChangeMentor />} />
              
              
              {/* Student */}
              <Route path='students' element={<Students />} />
              <Route path='create-students' element={<CreateStudents />} />
              <Route path='students/:id' element={<StudentView />} />
              <Route path='students/edit/:id' element={<EditStudent />} />
            </Route>
          </Routes>
          </AssignMentorProvider>

      </BrowserRouter>
    </>
  );
}

export default App;
