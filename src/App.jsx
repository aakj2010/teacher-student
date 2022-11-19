import "./App.css";
import AssignorChangeMentor from "./Component/AssignOrChangeMentor";
import AssignStudentsToMentor from "./Component/AssignStudentsToMentor";
import MentorForm from "./Component/MentorForm";
import MentorTable from "./Component/MentorTable";
import ShowMentorStudents from "./Component/ShowMentorStudents";
import StudentForm from "./Component/StudentForm";
import StudentTable from "./Component/StudentTable";
import { AssignMentorProvider } from "./context/AssignMentorContext";



function App() {
  return (
    <>

      <div className="container">
        <h2
          style={{ textAlign: "center", color: "black", marginBottom: "2rem" }}
        >
          Zen Mentors
        </h2>
        <AssignMentorProvider>
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <MentorForm />
              <StudentForm />
              <AssignorChangeMentor />
              <AssignStudentsToMentor />
              <ShowMentorStudents />
            </div>
            <div className="col-md-7 col-sm-12">
              <MentorTable />
              <StudentTable />
            </div>
          </div>
        </AssignMentorProvider>
      </div>

    </>

  );
}

export default App;
