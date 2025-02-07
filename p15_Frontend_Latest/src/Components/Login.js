// src/components/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./Redux/slice.js";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle input changes and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8082/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const user = await response.json();
      console.log("Login response:", user);

      if (!user) {
        setError("Invalid user data received.");
        return;
      }

      // Determine role correctly
      const role = user.role_id
        ? user.role_id.role_id
        : user.user_id?.role_id?.role_id;

      if (!role) {
        setError("User role is missing.");
        return;
      }

      dispatch(login(user));

      if (role === 1) {
        navigate("/AdminDashboard");
      } else if (role === 2) {
        navigate("/CompanyDashboard");
      } else if (role === 3) {
        navigate("/CustomerDashboard");
      } else {
        navigate("/"); // Redirect to home or login if role is invalid
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Server is down. Please try again later.");
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2 className="text-center mb-4">Login</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-light p-4 rounded shadow-sm"
          >
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={data.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={data.password}
                onChange={handleInputChange}
                required
              />
            </div>

            {error && <p className="text-danger">{error}</p>}

            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// // src/components/LoginPage.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../Components/slice.js";

// const Login = () => {
//   const [data, setData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Handle input changes and update state
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:8082/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         const user = await response.json(); // If you need user data from the response
//         dispatch(login(user)); // Pass the user data to the Redux store
//         navigate("/dashboard"); // Redirect to the dashboard
//       } else {
//         setError("Invalid credentials. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setError("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={data.email}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={data.password}
//           onChange={handleInputChange}
//           required
//         />
//         {error && <p style={{ color: "red" }}>{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// /////////////////////////////////////////////////////////////
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useDispatch } from "react-redux";
// // import { login } from "./slice";

// // export default function Login() {
// //   // Request Body

// //   // submit to server
// //   const LoginClick = (e) => {
// //     e.preventDefault();
// //     fetch("http://localhost:8082/login", infologin)
// //       .then((res) => {
// //         if (res == "" || res == null) {
// //           console.log("EmptyData");
// //         }
// //         if (!res.ok) {
// //           throw new Error(`Http Error,${res.status}`);
// //         }
// //         return res.json();
// //       })
// //       .then((UserObj) => setDbUser(UserObj))
// //       .catch((error) => {
// //         console.log(`Error facing status `, error);
// //       });
// //   };
// //   //Storing User Obj from database
// //   const [dbUser, setDbUser] = useState({});
// //   console.log("backend response ", dbUser);
// //   //get client details
// //   const handleChangeEvent = (e) => {
// //     const { name, value } = e.target;
// //     setUserData({ ...userData, [name]: value });
// //   };
// //   // Declare client Details
// //   const [userData, setUserData] = useState({
// //     email: "",
// //     password: "",
// //   });
// //   const infologin = {
// //     method: "post",
// //     headers: { "Content-type": "application/json" },
// //     body: JSON.stringify(userData),
// //   };
// //   console.log(userData);
// //   // const checkEmail = () => {};
// //   return (
// //     <>
// //       <form
// //         action=""
// //         style={{
// //           display: "flex",
// //           flexDirection: "column",
// //           width: "50%",
// //           gap: "20",
// //         }}
// //       >
// //         <label htmlFor="email">Email</label>
// //         <input
// //           type="text"
// //           name="email"
// //           id="email"
// //           onChange={handleChangeEvent}
// //         />

// //         <label htmlFor="pwd">Password:</label>
// //         <input
// //           type="text"
// //           name="password"
// //           id="pwd"
// //           onChange={handleChangeEvent}
// //           // onBlur={checkEmail}
// //         />

// //         <button onClick={LoginClick}>Login</button>
// //       </form>
// //     </>
// //   );
// // }

// ///////////////////////////////////////////////////////////////
