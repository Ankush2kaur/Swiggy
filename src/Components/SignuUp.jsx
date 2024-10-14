

// import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSetUserMutation } from "../RTK/userAPI";
// import {useDispatch} from "react-redux";

const SignUp = () => {
    const navigate =useNavigate();
    const [addUser] = useSetUserMutation();
  const initialValues= { name: "", email: "", password: "" , confirm_password:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
//  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // dispatch(signUp(formValues))
      addUser(formValues)
      console.log(formValues);
      setIsSubmit(false);
      setFormValues(initialValues);
      alert("Form Submitted Successfully");
      navigate("/login")
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[a-zA-Z]+(?:[ '-][a-zA-Z]+)*\s*$/;

    if (!values.name) {
      errors.name = "Name is required";
    } else if (!nameRegex.test(values.name)) {
      errors.name = "Name is not valid";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email is not valid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password must be less than 10 characters";
    }
    if(!values.confirm_password){
        errors.confirm_password="Enter the password";
    }
    else if(values.password!=values.confirm_password){
        errors.confirm_password="Password do not match";
    }
    return errors;
  };

  return (
    <>
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
        <div className="row w-70 shadow-lg bg-white rounded" style={{ minHeight: '500px' }} >
          <div className="col-md-12 p-5 d-flex flex-column justify-content-center align-items-center">
            <h4 className="mb-4 text-primary">Sign Up To Continue</h4>

            <form onSubmit={handleSubmit} className="w-100">
              <div className="form-group mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  id="name"
                  type="text" 
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={formValues.name} 
                  onChange={handleChange}
                />
              {formErrors.name && <p className="text-danger">{formErrors.name}</p>} 
              </div>
              
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
              </div>
              
              <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              {formErrors.password && <p className="text-danger">{formErrors.password}</p>}
              </div>
              <div className="form-group mb-3">
                <label htmlFor="repassword" className="form-label">Confirm Password</label>
                <input
                  id="confirm_password"
                  type="password"
                  name="confirm_password"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={formValues.confirm_password}
                  onChange={handleChange}
                />
              {formErrors.confirm_password && <p className="text-danger">{formErrors.confirm_password}</p>}
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
            <p className="pt-4"><Link to="/">Login Now</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
