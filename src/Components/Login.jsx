import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useVerifyUserMutation } from "../RTK/userAPI";
// import { useGetUsersQuery } from "../RTK/userAPI";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [verifyUser] = useVerifyUserMutation();
  // const {data:users}= useGetUsersQuery()
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [token, setToken] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    console.log(formValues);
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await verifyUser(formValues).unwrap();
        setLoginMessage(response.message);
        setToken(response.token);
        console.log(loginMessage ? loginMessage : "");
        console.log(token ? token : "no token found ");
        if(token){
           navigate("/verifyToken")
        }
      } catch (e) {
        // console.log(e.message)
        // setLoginMessage(e.message);
        // console.log(loginMessage);
      }
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not valid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password must be less than 10 characters";
    }
    return errors;
  };

  return (
    <>
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
        <div className="row w-70 shadow-lg bg-white rounded">
          <div className="col-md-12 p-5 d-flex flex-column justify-content-center align-items-center">
            <h4 className="mb-4 text-primary fs-3">Login To Continue</h4>
            <form onSubmit={handleSubmit} className="w-100">
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              {formErrors.email && (
                <p className="text-danger">{formErrors.email}</p>
              )}
              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              {formErrors.password && (
                <p className="text-danger">{formErrors.password}</p>
              )}
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
            <p className="pt-4">
              Dont have an Account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
