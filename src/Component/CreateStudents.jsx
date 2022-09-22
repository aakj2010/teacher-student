import React from 'react'
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

function CreateStudents() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      Age: "",
      batch: ""

    },
    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name = "Please Enter Name";
      }

      if (values.Age === "") {
        errors.Age = "Please Enter Age";
      }

      if (values.batch === "") {
        errors.batch = "Please Enter Course";
      }

      return errors;
    },
    onSubmit: async (values) => {
      let Student = await axios.post("https://62fe35d041165d66bfbb1342.mockapi.io/student", values);
      alert("Student Created")
      navigate("/students")
    }
  });

  return (
    <div className="container">
      <h2 className="text-center">Create Students</h2>
      <form onSubmit={formik.handleSubmit}>
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
            <label>Batch</label>
            <input className={`form-control ${formik.errors.Course ? `input-error` : ``}`}
              type={"text"}
              value={formik.values.Course}
              onChange={formik.handleChange}
              name="batch" />
            <span style={{ color: 'red' }}>{formik.errors.Course}</span>
          </div>

          <div className="col-lg-6">
            <input className="btn btn-primary mt-2" type={"submit"} value="Submit" />
          </div>
      </form>
    </div>
  )
}

export default CreateStudents