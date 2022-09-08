import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useSearchParams } from 'react-router-dom'


function StudentView() {
    const params = useParams()
    console.log(params);

    const [searchParams, setSearchParams] = useSearchParams()
    console.log(...searchParams);

    const [studentData, setStudentData] = useState({})


    useEffect(() => {
        loadStudent()
    }, [])

    let loadStudent = async () => {
        try {
            let student = await axios.get(`https://62fe35d041165d66bfbb1342.mockapi.io/students/${params.id}`);
            setStudentData(student.data)
            console.log(student.data);
        } catch (error) {

        }
    }
    return (
        
    <>
    <h1>{params.Id}</h1>
    <h2 style={{color:"Blue"}}>Name : {studentData.name}</h2>
    <h2 style={{color:"Black"}}>Age : {studentData.Age}</h2>
    <h2 style={{color:"Black"}}>Gender : {studentData.gender}</h2>
    <h2 style={{color:"Black"}}>Course : {studentData.Course}</h2>
  </>
    )
}

export default StudentView