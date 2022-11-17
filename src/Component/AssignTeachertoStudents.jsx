import React from 'react'
import { useContext } from "react";
import AssignMentorContext from './AssignMentorContext'

function AssignTeachertoStudents() {
    const [students, setStudents, teachers, setTeachers] = useContext(AssignMentorContext)
  return (
    <div>AssignTeachertoStudents</div>
  )
}

export default AssignTeachertoStudents