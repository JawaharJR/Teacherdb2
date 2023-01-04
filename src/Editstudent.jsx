import { useFormik } from "formik";
import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Editstudent() {
  let params = useParams();
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      studentid: "",
      mailid: "",
      age: "",
      address: "",
      phone: "",
    },
    validate: (values) => {
      let errors = {};
      for (let keys in values) {
        if (values[keys] === "") {
          errors[keys] = `Please Enter ${keys}`;
        }
      }
      return errors;
    },
    onSubmit: async (values) => {
      await axios.put(
        `https://630237d8c6dda4f287b56f17.mockapi.io/students/${params.userid}`,
        values
      );
      alert("User updated");
      navigate("/");
    },
  });

  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let user = await axios.get(
        `https://630237d8c6dda4f287b56f17.mockapi.io/students/${params.userid}`
      );
      formik.setValues({
        name: user.data.name,
        studentid: user.data.studentid,
        mailid: user.data.mailid,
        age: user.data.age,
        address: user.data.address,
        phone: user.data.phone,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6 mt-2">
            <label>Name</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name"
            />
            <span style={{ color: "red" }}>{formik.errors.name}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>Student ID</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.studentid}
              onChange={formik.handleChange}
              name="studentid"
            />
            <span style={{ color: "red" }}>{formik.errors.studentid}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>Mail</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.mailid}
              onChange={formik.handleChange}
              name="mailid"
            />
            <span style={{ color: "red" }}>{formik.errors.mailid}</span>
          </div>
          <div className="col-lg-6  mt-2">
            <label>Age</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.age}
              onChange={formik.handleChange}
              name="age"
            />
            <span style={{ color: "red" }}>{formik.errors.age}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <label>Address</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.address}
              onChange={formik.handleChange}
              name="address"
            />
            <span style={{ color: "red" }}>{formik.errors.address}</span>
          </div>
          <div className="col-lg-6 mt-2 ">
            <label>Phone</label>
            <input
              className="form-control"
              type={"text"}
              value={formik.values.phone}
              onChange={formik.handleChange}
              name="phone"
            />
            <span style={{ color: "red" }}>{formik.errors.phone}</span>
          </div>
          <div className="col-lg-6 mt-2">
            <input
              className=" btn btn-primary"
              type={"submit"}
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Editstudent;