import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/images/login/login.svg";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

      const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((err) => console.log(err));
    };



    return (
      <div className="hero w-full my-14">
        <div className="hero-content grid gap-14 md:grid-cols-2  flex-col lg:flex-row">
          <img className="w-3/4" src={img} alt="" />
          <div className="card  w-full max-w-md shadow-2xl py-14">
            <h1 className="text-5xl font-bold text-center pt-4">Sign Up</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg ">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center">
              Already have an account?{" "}
              <Link className="text-orange-600 font-semibold" to="/login">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;