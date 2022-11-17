import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext} from "react";
import {AssignMentorContext} from './AssignMentorContext'

function Teacher() {

    const navigate = useNavigate
    let context = useContext(AssignMentorContext)
    let teachers = context.teachers;
    console.log(teachers)


    const [isLoading, setLoading] = useState(false)


    let teachersDelete = async (id) => {
        try {
            let ask = window.confirm("Are you Sure? Do you want to delete this Data?");
            if (ask) {
                await axios.delete(`https://62fe35d041165d66bfbb1342.mockapi.io/Teachers/${id}`)
                navigate("/Teachers")
            }

        } catch (error) {

        }
    }
    return (
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Teachers</h1>
                <Link to="/create-Teachers" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i>Create Teachers</Link>
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary"> Teachers</h6>
                </div>
                {
                    isLoading ? (<div class="text-center">
                        <div class="spinner-border" role="status">
                            {/* <span class="visually-hidden">Loading...</span> */}
                        </div>
                    </div>)
                    // teachers.length === 0 ?(<div class="text-center">
                    //     <tr>
                    //         <td>No Data Found</td>
                    //     </tr>
                    // </div>)
                     : 
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>Email</th>
                                        <th>Course</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Phone Number</th>
                                        <th>Email</th>
                                        <th>Course</th>
                                        <th>Actions</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        teachers.map((Teacher, index) => {
                                            return <tr>
                                                <td>{index + 1}</td>
                                                <td>{Teacher.id}</td>
                                                <td>{Teacher.name}</td>
                                                <td>{Teacher.number}</td>
                                                <td>{Teacher.email}</td>
                                                <td>{Teacher.course}</td>
                                                <td>
                                                    <Link to={`/Teachers/${Teacher.id}`} className="btn btn-sm btn-primary mr-2">View</Link>
                                                    <Link to={`/Teachers/edit/${Teacher.id}`} className="btn btn-sm btn-warning mr-2">Edit</Link>
                                                    <button onClick={() => teachersDelete(Teacher.id)} className="btn btn-sm btn-danger mr-2">Delete</button>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Teacher