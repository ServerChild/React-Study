import React from "react";

const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeft",
    },
];

//학생들의 이름을 목록형태로 출력
function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                //key={`student-id-${student.id}`} -> 포맷팅 된 문자열로 변경
                //(student, index) & key={index} -> key를 index로 변경 가능
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;