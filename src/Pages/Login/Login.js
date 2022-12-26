import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   
      login(email, password)
          .then(result => {
            const user = result.user;
            
            const currentUser = {
              email: user.email
            }

            // jwt access token
            fetch("http://localhost:5000/jwt", {
              method: "POST",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(currentUser)
            }).then(res => res.json())
              .then(data => {
              localStorage.setItem('genius-token', data.token)
            })

            // navigate user from where user wanted to go
            if (user) {
              navigate(from, {replace: true})
              }
          })
      .catch(err => console.error(err))
      
  };

  return (
    <div className="hero w-full my-14">
      <div className="hero-content grid gap-14 md:grid-cols-2  flex-col lg:flex-row">
        <img className="w-3/4" src={img} alt="" />
        <div className="card  w-full max-w-md shadow-2xl py-14">
          <h1 className="text-5xl font-bold text-center pt-4">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="" className="label-text-alt link text-sm  link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center">
            New to Genius Car?{" "}
            <Link className="text-orange-600 font-semibold" to="/signup">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
