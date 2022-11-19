import React, { useState, useContext } from "react";
import axios from "axios";
import { AssignMentorContext } from "../context/AssignMentorContext";


function StudentForm() {

  const [mentors, setMentors, students, setStudents] =
    useContext(AssignMentorContext);
  console.log(setMentors);

  const [name, setname] = useState("");
  const [batch, setBatch] = useState("");
  const [assignmentor, setassignMentor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("AssignesMentor", assignmentor);
    console.log(name, batch, assignmentor);
    const posted_stud = await axios.post(
      `https://assignmentorstudents.herokuapp.com/Students`,
      { name, batch, mentor: assignmentor }
    );
    console.log(posted_stud.data);
    setStudents([...students, posted_stud.data]);
    setname("");
    setBatch("");
    setassignMentor("");
  };
  console.log(mentors);
  return (
    <form onSubmit={handleSubmit}>
      <h4 className="text-info">Student Form</h4>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Student Name<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="batch" className="form-label">
          Batch<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="batch"
          value={batch}
          onChange={(e) => {
            setBatch(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="course" className="form-label">
          Mentor
        </label>
        <select
          class="form-control"
          aria-label="Default select example"
          value={assignmentor}
          onChange={(e) => {
            setassignMentor(e.target.value);
          }}
        >
          <option value=""></option>
          {mentors.map((mentor) => {
            return <option value={mentor._id}>{mentor.name}</option>;
          })}
        </select>
      </div>
      <button type="submit" className="btn btn-primary mb-3">
        Submit
      </button>
    </form>
  );
}

export default StudentForm;
















// import React from 'react'
// import { useFormik } from "formik";
// import axios from "axios";
// import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

// function CreateStudents() {
//   const navigate = useNavigate()
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       batch: "",
//       mentor:""

//     },
//     validate: (values) => {
//       let errors = {};

//       if (values.name === "") {
//         errors.name = "Please Enter Name";
//       }

//       if (values.batch === "") {
//         errors.batch = "Please Enter Course";
//       }

//       if (values.mentor === "") {
//         errors.mentor = "Please Enter Mentor Name";
//       }

//       return errors;
//     },
//     onSubmit: async (values) => {
//       let Student = await axios.post("https://62fe35d041165d66bfbb1342.mockapi.io/student", values);
//       alert("Student Created")
//       navigate("/students")
//     }
//   });

//   return (
//     <div className="container">
//       <h2 className="text-center">Create Students</h2>
//       <form onSubmit={formik.handleSubmit}>
//           <div className="col-lg-6">
//             <label>Name</label>
//             <input className={`form-control ${formik.errors.name ? `input-error` : ``}`}
//               type={"text"}
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               name="name" />
//             <span style={{ color: 'red' }}>{formik.errors.name}</span>
//           </div>


//           <div className="col-lg-6">
//             <label>Batch</label>
//             <input className={`form-control ${formik.errors.Course ? `input-error` : ``}`}
//               type={"text"}
//               value={formik.values.Course}
//               onChange={formik.handleChange}
//               name="batch" />
//             <span style={{ color: 'red' }}>{formik.errors.Course}</span>
//           </div>

//           <div className="col-lg-6">
//             <label>Mentor</label>
//             <input className={`form-control ${formik.errors.mentor ? `input-error` : ``}`}
//               type={"text"}
//               value={formik.values.mentor}
//               onChange={formik.handleChange}
//               name="mentor" />
//             <span style={{ color: 'red' }}>{formik.errors.mentor}</span>
//           </div>

//           <div className="col-lg-6">
//             <input className="btn btn-primary mt-2" type={"submit"} value="Submit" />
//           </div>
//       </form>
//     </div>
//   )
// }

// export default CreateStudents