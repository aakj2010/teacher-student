import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useSearchParams } from 'react-router-dom'

function TeacherView() {
    const params = useParams()
    console.log(params);

    const [searchParams, setSearchParams] = useSearchParams()
    console.log(...searchParams);

    const [teacherData, setTeacherData] = useState({})


    useEffect(() => {
        loadTeacher()
    }, [])

    let loadTeacher = async () => {
        try {
            let teachers = await axios.get(`https://62fe35d041165d66bfbb1342.mockapi.io/Teachers/${params.id}`);
            setTeacherData(teachers.data)
            console.log(teachers.data);
        } catch (error) {

        }
    }
  return (
    <>
    <h1>{params.Id}</h1>
    <h2 style={{color:"Blue"}}> Name : {teacherData.name}</h2>
    <h2 style={{color:"Black"}}> Gender : {teacherData.gender}</h2>
    <h2 style={{color:"Black"}}> Phone Number : {teacherData.phone}</h2>
    <h2 style={{color:"Black"}}> Email : {teacherData.email}</h2>
  </>
  )
}

export default TeacherView