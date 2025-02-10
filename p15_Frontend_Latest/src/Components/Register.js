import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const Roles = {
    2: "Company",
    3: "Customer",
  };
  const getStateData = () => {
    fetch("http://localhost:8150/api/crud/getAllStates")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Http Error,${res.status}`);
        }
        return res.json();
      })
      .then((data) => setStateData(data))
      .catch((error) => {
        console.log(`Error facing status `, error);
      });
  };
  const getCityData = () => {
    fetch("http://localhost:8150/api/crud/getAllCity")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // console.log("data is ", data);
        setCity(data);
      })
      .catch((error) => {
        console.log("Error facing status ", error);
      });
  };

  const checkEmail = (e) => {
    fetch("http://localhost:8152/checkEmail?email=" + e.target.value)
      .then((res) => {
        if (!res.ok) {
          console.log("res not ok : response.status : " + res.status);
        }
        console.log("res.json() : ", res.json());
        setEmailExit(false);
      })
      .catch((err) => console.log("Error : ", err));
  };
  const checkPancard = (e) => {
    fetch("http://localhost:8152/checkPancard?pancard=" + e.target.value)
      .then((res) => {
        if (!res.ok) {
          console.log("res not ok : response.status : " + res.status);
        }
        setEmailExit(res.json());
      })
      .catch((err) => console.log("Error : ", err));
  };
  const checkGST = (e) => {
    fetch("http://localhost:8152/checkEmail?gst_no=" + e.target.value)
      .then((res) => {
        if (!res.ok) {
          console.log("res not ok : response.status : " + res.status);
        }
        setEmailExit(res.json());
      })
      .catch((err) => console.log("Error : ", err));
  };
  const checkMSME = (e) => {
    fetch("http://localhost:8152/checkEmail?msme_cert_no=" + e.target.value)
      .then((res) => {
        if (!res.ok) {
          console.log("res not ok : response.status : " + res.status);
        }
        setEmailExit(res.json());
      })
      .catch((err) => console.log("Error : ", err));
  };
  const [emailExit, setEmailExit] = useState();
  const [panExit, setpanExit] = useState(false);
  const [gstExit, setgstExit] = useState(false);
  const [msmeExit, setmsmeExit] = useState(false);
  console.log("emialExit : ", emailExit);
  const [stateData, setStateData] = useState([]);
  // console.log("States are ", stateData);
  const [cityData, setCity] = useState([]);
  // console.log("cities are ", cityData);
  const stateref = useRef(null);

  const compnayField = () => {
    return (
      <>
        <div className="mb-3">
          <label htmlFor="msme_cert_no" className="form-label">
            MSME Certificate No:
          </label>
          <input
            type="text"
            className="form-control"
            name="msme_cert_no"
            id="msme"
            onBlur={checkMSME}
            onChange={
              // userData && userData.role_id && userData.role_id.role_id == 2
              handleChangeEvent
              // : undefined
            }
          />
          {errors.msme_cert_no && (
            <p className="text-danger">{errors.msme_cert_no}</p>
          )}
          {msmeExit && (
            <p className="text-danger">
              User already applied this MSME Certificate
            </p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="gst" className="form-label">
            GST No:
          </label>
          <input
            type="text"
            className="form-control"
            name="gst_no"
            id="gst"
            onBlur={checkGST}
            onChange={
              // userData && userData.role_id && userData.role_id.role_id == 2
              handleChangeEvent
              // : undefined
            }
          />
          {gstExit && (
            <p className="text-danger">
              User already applied this GST Certification
            </p>
          )}
          {errors.gst_no && <p className="text-danger">{errors.gst_no}</p>}
        </div>
      </>
    );
  };

  // const compnayField = () => {
  //   return (
  //     <>
  //       <label htmlFor="msme_cert_no">MSME Certificate No:</label>
  //       <input
  //         type="text"
  //         name="msme_cert_no"
  //         id="msme"
  //         onBlur={checkMSME}
  //         onChange={
  //           // userData && userData.role_id && userData.role_id.role_id == 2
  //           handleChangeEvent
  //           // : undefined
  //         }
  //       />
  //       {errors.msme_cert_no && <p>{errors.msme_cert_no}</p>}
  //       {/* {msmeExit && <p>User already applied this MSME Certificate</p>} */}

  //       <label htmlFor="gst">GST No:</label>
  //       <input
  //         type="text"
  //         name="gst_no"
  //         id="gst"
  //         onBlur={checkGST}
  //         onChange={
  //           // userData && userData.role_id && userData.role_id.role_id == 2
  //           handleChangeEvent
  //           // : undefined
  //         }
  //       />
  //       {/* {gstExit && <p>User already applied this GST Certification</p>} */}
  //       {errors.gst_no && <p>{errors.gst_no}</p>}
  //     </>
  //   );
  // };
  const [role_type, setRole_type] = useState("");

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
    city_id: {
      city_id: "",
      city_name: "",
      state_id: { state_id: "", state_name: "" },
    },
    address: "",
    pancard: "",
    role_id: { role_id: "", role_type: "" },
  });
  const [errors, setErrors] = useState({});
  const userInfo = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };
  // validate function
  const validate = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value) {
          error = "Name is required";
        } else if (value.length < 2) {
          error = "Name must be at least 2 characters long.";
        }
        break;

      case "password":
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
        if (!value) {
          error = "Password is required.";
        } else if (!passwordRegex.test(value)) {
          error =
            "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.";
        }
        break;

      case "email":
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value) {
          error = "Email is required.";
        } else if (!emailRegex.test(value)) {
          error = "Invalid email format.";
        }
        break;

      case "pancard":
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (!value) {
          error = "Pancard is required.";
        } else if (!panRegex.test(value)) {
          error = "Invalid Pancard format. Example: ABCDE1234F.";
        }
        break;

      case "gst_no":
        const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{3}$/;
        if (!value) {
          error = "GST Number is required.";
        } else if (!gstRegex.test(value)) {
          error = "Invalid GST Number format.";
        }
        break;

      case "msme_cert_no": //msme_cert_no
        if (!value) {
          error = "MSME Certificate Number is required.";
        } else if (value.length != 12) {
          error =
            "MSME Certificate Number must be equal to 12 characters long.";
        }
        break;

      case "address":
        if (!value) {
          error = "Address is required.";
        } else if (value.length < 20) {
          error = "Address must be at least 20 characters long.";
        }
        break;

      default:
        break;
    }
    return error;
  };

  const handleChangeEvent = (e) => {
    const { name, value } = e.target;
    console.log("name, value", name, value);
    if (name == "city_id") {
      let city = cityData.filter((data) => {
        return (
          data.state_id.state_id == stateref.current.value &&
          data.city_id == value
        );
      });
      setUserData({ ...userData, [name]: city[0] });
      console.log("NewCity", city);
    } else if (name == "role_id") {
      let role_id = {
        role_id: value,
        roleType: Roles[value],
      };
      setUserData({ ...userData, [name]: role_id });
    } else {
      setUserData({ ...userData, [name]: value });

      const error = validate(name, value);
      console.log("Error is ", error);
      setErrors({ ...errors, [name]: error });
    }
  };
  console.log(userData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // final validation

    const formErrors = {
      name: validate("name", userData.name),
      email: validate("email", userData.email),
      password: validate("password", userData.password),
      pancard: validate("pancard", userData.pancard),
    };
    setErrors(formErrors);
    if (Object.values(formErrors).every((error) => !error)) {
      console.log("Form Submitted successfully", userData);

      if (userData.role_id.role_id == 2) {
        console.log("inside compnay", userData.role_id.role_id);

        fetch("http://localhost:8150/api/auth/saveCompany", userInfo)
          .then((res) => {
            if (res.ok) {
              console.log("Register successfully");
              navigate("/login");
            }
            // return res.json();
          })
          .catch((err) => {
            console.log("error is ", err);
          });
      } else if (userData.role_id.role_id == 3) {
        console.log("inside customer", userData.role_id.role_id);

        fetch("http://localhost:8150/api/auth/saveUser", userInfo)
          .then((res) => {
            if (res.ok) {
              navigate("/login");
              console.log("Register successfully");
            }
            // return res.json();
          })
          .catch((err) => {
            console.log("error is ", err);
          });
      }
    } else {
      console.log("Incomplete Details");
    }
  };

  return (
    <form className="container mt-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="role_type" className="form-label">
          Role Type
        </label>
        <select
          className="form-select"
          name="role_id"
          id="role_type"
          value={role_type}
          onChange={(e) => {
            setRole_type(e.target.value);
            handleChangeEvent(e);
          }}
        >
          <option value="">Select Role type</option>
          <option value="2">Company</option>
          <option value="3">Customer</option>
        </select>
      </div>

      {(role_type === "2" || role_type === "3") && (
        <>
          <div className="mb-3">
            <label htmlFor="em" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="em"
              onChange={handleChangeEvent}
              onBlur={checkEmail}
            />
            {errors.email && <p className="text-danger">{errors.email}</p>}
            {emailExit && <p className="text-danger">Email already exists</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="nm" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="nm"
              onChange={handleChangeEvent}
            />
            {errors.name && <p className="text-danger">{errors.name}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="pwd"
              onChange={handleChangeEvent}
            />
            {errors.password && (
              <p className="text-danger">{errors.password}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="state" className="form-label">
              State:
            </label>
            <select
              className="form-select"
              name="state_id"
              id="state"
              ref={stateref}
              onClick={getStateData}
            >
              {stateData.map((state, index) => (
                <option value={state.state_id} key={index}>
                  {state.state_name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City:
            </label>
            <select
              className="form-select"
              name="city_id"
              id="city"
              onClick={getCityData}
              onChange={handleChangeEvent}
            >
              {cityData.map(
                (city, index) =>
                  stateref.current.value == city.state_id.state_id && (
                    <option value={city.city_id} key={index}>
                      {city.city_name}
                    </option>
                  )
              )}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="add" className="form-label">
              Address:
            </label>
            <textarea
              className="form-control"
              name="address"
              id="add"
              rows="3"
              onChange={handleChangeEvent}
            ></textarea>
            {errors.address && <p className="text-danger">{errors.address}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="pan" className="form-label">
              Pancard No:
            </label>
            <input
              type="text"
              className="form-control"
              name="pancard"
              id="pan"
              onChange={handleChangeEvent}
              onBlur={checkPancard}
            />
            {errors.pancard && <p className="text-danger">{errors.pancard}</p>}
            {panExit && <p className="text-danger">Pancard already exists</p>}
          </div>
          {role_type === "2" && compnayField()}
        </>
      )}

      <button className="btn btn-primary">Register</button>
    </form>
  );
}
