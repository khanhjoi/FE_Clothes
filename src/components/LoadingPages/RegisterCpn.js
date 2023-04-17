import React, { useState } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add code here to handle form submission
    try {
        const response = await axios.post('/user/register',{name: user.name, email: user.email, password: user.password} );
        
        window.location.href = "http://localhost:3000/login";
    } catch (error) {
        if(error.response.status === 400) {
            alert(error.response.data.msg);
        }
    }
    console.log(user)
  };

  return (
    <>
      <Header />
      <div className="register">
        <form onSubmit={handleSubmit}>
          <h2 className="register_title">Đăng ký</h2>
          <div className="row mb-3">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">
              Tên
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="inputName"
                name="name"
                value={user.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                name="email"
                value={user.email}
                onChange={handleInputChange}
              />
            </div>
            <span className="messages"></span>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="inputPassword3"
              className="col-sm-2 col-form-label"
            >
              Mật khẩu
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                name="password"
                value={user.password}
                onChange={handleInputChange}
              />
            </div>
            <span className="messages"></span>
          </div>

          <button type="submit" className="login_btn btn btn-dark">
            Đăng ký
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;