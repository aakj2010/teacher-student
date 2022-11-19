import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AssignMentorContext = createContext()


export const AssignMentorProvider = ({ children }) => {

    const [mentors, setMentors] = useState([]);
    const [students, setStudents] = useState([]);

    const BaseURL = `https://assignmentorstudents.herokuapp.com/`;

    const fetchData = async () => {
        let Mentors = await axios.get(`${BaseURL}/Mentors`);
        setMentors(Mentors.data)

        let Students = await axios.get(`${BaseURL}/Student`);
        setStudents(Students.data)
        console.log(Students.data)

    };
    useEffect(() => {
        fetchData();

        return () => {
            <></>;
        };
    }, []);

    return (
        <>
            <AssignMentorContext.Provider
                value={{
                    mentors: mentors,
                    setMentors: setMentors,
                    students: students,
                    setStudents: setStudents
                }}
            >
                {children}
            </AssignMentorContext.Provider>
        </>
    );

}


export default AssignMentorContext