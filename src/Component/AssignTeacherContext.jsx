import { useState, useEffect, createContext } from "react";
import axios from "axios";

let AssignMentorContext = createContext()





export const AssignMentorProvider = ({ children }) => {

    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);
    
    const BaseURL = `https://62fe35d041165d66bfbb1342.mockapi.io`;

    const fetchData = async () => {
        let Teachers = await axios.get(`${BaseURL}/Teachers`);
        setTeachers(Teachers.data)

        let Students = await axios.get(`${BaseURL}/student`);
        setStudents(Students.data)
        console.log(Students.data)

    };
    useEffect(() => {
        fetchData();
        // return () => {
        //     <></>;
        // };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {/* {console.log(teachers, students)} */}
            <AssignMentorContext.Provider
                value={[teachers, setTeachers, students, setStudents]}
            >
                {children}
            </AssignMentorContext.Provider>
        </>
    );

}


export default AssignMentorContext