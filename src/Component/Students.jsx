import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AssignMentorContext from "./AssignTeacherContext";



function Students() {


    // const [students, setStudents] = useState([]);
    const [students, setStudents] = useContext(AssignMentorContext)
    // let context = useContext(AssignMentorContext)
    // let students = context.students
    console.log(students)
    const [isLoading, setLoading] = useState(false)

    // useEffect(() => {
    //     loadData()
    // }, [])

    // let loadData = async () => {
    //     setLoading(true)
    //     let students = await axios.get("https://62fe35d041165d66bfbb1342.mockapi.io/student");
    //     console.log(students);
    //     setStudents(students.data)
    //     setLoading(false)
    // };

    let studentDelete = async (id) => {
        try {
            let ask = window.confirm("Are you Sure? Do you want to delete this Data?");
            if (ask) {
                await axios.delete(`https://62fe35d041165d66bfbb1342.mockapi.io/students/${id}`)
                // loadData()
            }

        } catch (error) {

        }
    }

    return (
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Students</h1>
                <Link to="/create-students" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i>Create Students</Link>
            </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary"> Students</h6>
                </div>
                {
                    isLoading ? (<div class="text-center">
                        <div class="spinner-border" role="status">
                            {/* <span class="visually-hidden">Loading...</span> */}
                        </div>
                    </div>) : <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Batch</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Batch</th>
                                        <th>Actions</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        students.map((students, index) => {
                                            return <tr>
                                                <td>{index + 1}</td>
                                                <td>{students.id}</td>
                                                <td>{students.name}</td>
                                                <td>{students.Age}</td>
                                                <td>{students.batch}</td>
                                                <td>
                                                    <Link to={`/students/${students.id}`} className="btn btn-sm btn-primary mr-2">View</Link>
                                                    <Link to={`/students/edit/${students.id}`} className="btn btn-sm btn-warning mr-2">Edit</Link>
                                                    <button onClick={() => studentDelete(students.id)} className="btn btn-sm btn-danger mr-2">Delete</button>
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
    );
}
export default Students;