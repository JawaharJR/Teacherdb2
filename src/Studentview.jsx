import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Studentview() {
  const params = useParams();

  let [studentData, setstudentData] = useState({});

  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let user = await axios.get(
        `https://630237d8c6dda4f287b56f17.mockapi.io/students/${params.userid}`
      );
      setstudentData(user.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <b>StudentName: </b>
        {studentData.name}
      </div>
      <div>
        <b>Student ID: </b>
        {studentData.studentid}
      </div>
      <div>
        <b>Mail: </b>
        {studentData.mailid}
      </div>
      <div>
        <b>Age: </b>
        {studentData.age}
      </div>
      <div>
        <b>Address: </b>
        {studentData.address}
      </div>
      <div>
        <b>Phone: </b>
        {studentData.phone}
      </div>
    </div>
  );
}

export default Studentview;