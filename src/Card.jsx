import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Card({ student, deletes }) {
  return (
    <div className="col-lg-4 my-2">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkfF6nBhidhIzL330CYtg70I8tpDBGJ2YjBPnE9D9gY0iLmGu563WBIab4KBexSDv7kG8&usqp=CAU"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{student.name}</h5>
          <p className="card-text">ID: {student.studentid}</p>
          <Link
            to={`/portal/studentview/${student.id}`}
            className="btn btn-primary mx-2"
          >
            VIEW
          </Link>
          <Link
            to={`/portal/editstudent/${student.id}`}
            className="btn btn-warning mx-2"
          >
            EDIT
          </Link>
          <button
            onClick={() => deletes(student.id)}
            className="btn btn-danger mx-2"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;