import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Students() {
  let [students, setStudents] = useState([]);
  let [isLoading, setLoading] = useState(false);
  let [count, setCount] = useState(0);

  let userDelete = async (id) => {
    try {
      await axios.delete(
        `https://630237d8c6dda4f287b56f17.mockapi.io/students/${id}`
      );
      let deleteIndex = students.findIndex((student) => {
        return student.id === id;
      });
      students.splice(deleteIndex, 1);
      setCount((c) => c + 1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setStudents(students);
  }, [count]);

  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    try {
      setLoading(true);
      let users = await axios.get(
        "https://630237d8c6dda4f287b56f17.mockapi.io/students"
      );
      setStudents(users.data);

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <div className="row">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          students.map((student) => {
            return (
              <Card
                student={student}
                deletes={userDelete}
                key={student.id}
              ></Card>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Students;