import React from 'react'
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

function CreateTeachers() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            number: "",
            email: "",
            course: ""
        },
        validate: (values) => {
            let errors = {};

            if (values.name === "") {
                errors.name = "Please Enter Name";
            }
            if (values.number === "") {
                errors.number = "Please Enter Phone Number";
            }
            if (values.email === "") {
                errors.email = "Please Enter Email";
            }
            if (values.course === "") {
                errors.course = "Please Enter Course";
            }

            return errors;
        },
        onSubmit: async (values) => {
            let Teacher = await axios.post("https://62fe35d041165d66bfbb1342.mockapi.io/Teachers", values);
            alert("Teacher Created")
            navigate("/Teachers")
        }
    });
    return (

        <div className="container">
            <h2 className="text-center">Create Teacher</h2>
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
                    <label>Phone Number</label>
                    <input className={`form-control ${formik.errors.number ? `input-error` : ``}`}
                        type={"text"}
                        value={formik.values.number}
                        onChange={formik.handleChange}
                        name="number" />
                    <span style={{ color: 'red' }}>{formik.errors.number}</span>
                </div>

                <div className="col-lg-6">
                    <label>Email</label>
                    <input className={`form-control ${formik.errors.email ? `input-error` : ``}`}
                        type={"text"}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        name="email" />
                    <span style={{ color: 'red' }}>{formik.errors.email}</span>
                </div>

                <div className="col-lg-6">
                    <label>Course</label>
                    <input className={`form-control ${formik.errors.course ? `input-error` : ``}`}
                        type={"text"}
                        value={formik.values.course}
                        onChange={formik.handleChange}
                        name="course" />
                    <span style={{ color: 'red' }}>{formik.errors.course}</span>
                </div>

                <div className="col-lg-6">
                    <input className="btn btn-primary mt-2" type={"submit"} value="Submit" />
                </div>

            </form>
        </div>
    )
}

export default CreateTeachers