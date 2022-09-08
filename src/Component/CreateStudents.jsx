import React from 'react'
import { useFormik } from "formik";
import axios from "axios";

function CreateStudents() {

  const formik = useFormik({
    initialValues: {
      name: "",
      Age: "",
      gender: "",
      Course: ""
    
    },
    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name = "Please Enter Name";
      }

      if (values.Age === "") {
        errors.Age = "Please Enter Age";
      }

      if (values.gender === "") {
        errors.gender = "Please Enter Gender";
      }
      if (values.Course === "") {
        errors.Course = "Please Enter Course";
      }

      return errors;
    },
    onSubmit: async (values) => {
      let Teacher = await axios.post("https://62fe35d041165d66bfbb1342.mockapi.io/students", values);
      alert("Teacher Created")
    }
  });

  return (
    <div className="container">
      <h2 className="text-center">Create Students</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input className={`form-control ${formik.errors.name ? `input-error` : ``}`}
              type={"text"}
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name" />
            <span style={{ color: 'red' }}>{formik.errors.name}</span>
          </div>

          <div className="col-lg-6">
            <label>Age</label>
            <input className={`form-control ${formik.errors.Age ? `input-error` : ``}`}
              type={"text"}
              value={formik.values.Age}
              onChange={formik.handleChange}
              name="Age" />
            <span style={{ color: 'red' }}>{formik.errors.Age}</span>
          </div>

          <div className="col-lg-6">
            <label>Gender</label>
            <input className={`form-control ${formik.errors.gender ? `input-error` : ``}`}
              type={"text"}
              value={formik.values.gender}
              onChange={formik.handleChange}
              name="gender" />
            <span style={{ color: 'red' }}>{formik.errors.gender}</span>
          </div>

          <div className="col-lg-6">
            <label>Course</label>
            <input className={`form-control ${formik.errors.Course ? `input-error` : ``}`}
              type={"text"}
              value={formik.values.Course}
              onChange={formik.handleChange}
              name="course" />
            <span style={{ color: 'red' }}>{formik.errors.course}</span>
          </div>

          <div className="col-lg-6">
            <input className="btn btn-primary mt-2" type={"submit"} value="Submit" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateStudents