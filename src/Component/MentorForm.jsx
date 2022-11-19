import React, { useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { AssignMentorContext } from "../context/AssignMentorContext";


function MentorForm() {

  const [mentors, setMentors] = useContext(AssignMentorContext);
  console.log(mentors);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [course, setcourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const posted_mentor = await axios.post(
      `https://assignmentorstudents.herokuapp.com/Mentors`,
      { name, email, course }
    );
    setMentors([...mentors, posted_mentor.data]);
    setname("");
    setemail("");
    setcourse("");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h4 className="text-info">Mentor Form</h4>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Mentor Name<span style={{ color: "red" }}>*</span>
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
        <label htmlFor="email" className="form-label">
          Email<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="course" className="form-label">
          Course<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="course"
          value={course}
          onChange={(e) => {
            setcourse(e.target.value);
          }}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-3">
        Submit
      </button>
    </form>
  );
}

export default MentorForm;














// import React from 'react'
// import { useFormik } from "formik";
// import axios from "axios";
// import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

// function CreateTeachers() {
//     const navigate = useNavigate()
//     const formik = useFormik({
//         initialValues: {
//             name: "",
//             email: "",
//             course: ""
//         },
//         validate: (values) => {
//             let errors = {};

//             if (values.name === "") {
//                 errors.name = "Please Enter Name";
//             }
//             if (values.email === "") {
//                 errors.email = "Please Enter Email";
//             }
//             if (values.course === "") {
//                 errors.course = "Please Enter Course";
//             }

//             return errors;
//         },
//         onSubmit: async (values) => {
//             let Teacher = await axios.post("https://62fe35d041165d66bfbb1342.mockapi.io/Teachers", values);
//             alert("Teacher Created")
//             navigate("/Teachers")
//         }
//     });
//     return (

//         <div className="container d-flex justify-content-center flex-column">
//             <h2 className="text-center">Create Teacher</h2>
//             <br /><br />
//             <form onSubmit={formik.handleSubmit}>
//                     <div className=" col-lg-5">
//                         <label>Name</label>
//                         <input className={`form-control ${formik.errors.name ? `input-error` : ``}`}
//                             type={"text"}
//                             value={formik.values.name}
//                             onChange={formik.handleChange}
//                             name="name" />
//                         <span style={{ color: 'red' }}>{formik.errors.name}</span>
//                     </div>

//                     <div className="col-lg-5">
//                         <label>Email</label>
//                         <input className={`form-control ${formik.errors.email ? `input-error` : ``}`}
//                             type={"text"}
//                             value={formik.values.email}
//                             onChange={formik.handleChange}
//                             name="email" />
//                         <span style={{ color: 'red' }}>{formik.errors.email}</span>
//                     </div>

//                     <div className="col-lg-5">
//                         <label>Course</label>
//                         <input className={`form-control ${formik.errors.course ? `input-error` : ``}`}
//                             type={"text"}
//                             value={formik.values.course}
//                             onChange={formik.handleChange}
//                             name="course" />
//                         <span style={{ color: 'red' }}>{formik.errors.course}</span>
//                     </div>

//                     <div className="col-lg-5">
//                         <input className="btn btn-primary mt-2" type={"submit"} value="Submit" />
//                     </div>
               


//             </form>
//         </div>
//     )
// }

// export default CreateTeachers