import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../filrebase.init";

let errorMessage;
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);

  if (user || gUser || gitUser) {
    console.log(gUser || gitUser || user);
  }
  if (loading || gLoading || gitLoading || updating) {
    return <p>loading</p>;
  }
  if (error || gError || gitError) {
    errorMessage = (
      <p className="text-red-500">
        {error?.massage || gError?.massage || gitError?.message}
      </p>
    );
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({
      displayName: name,
      photoURL: "https://i.ibb.co/Vqwd4Xg/tape-158276-1280.jpg",
    });
  };
  return (
    <section className="py-20">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <h1 className="text-center text-2xl text-blue-500 font-bold py-4 uppercase ">
              Please Login
            </h1>
            <form onSubmit={handleSignup}>
              <div className="mb-6">
                <label htmlFor="Name">Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="Name"
                  placeholder="Name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="signup-email">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="signup-email"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="signup-password">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="signup-password"
                  placeholder="Password"
                />
              </div>

              <div>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Accept terms & conditions"
                />
              </div>

              <div className="text-center lg:text-left">
                <input
                  type="submit"
                  value="Signup"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                ></input>
                {errorMessage}
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Already have an account?
                  <Link
                    to="/login"
                    href="#!"
                    className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >
                    Please Login
                  </Link>
                </p>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <span
                  onClick={() => signInWithGoogle()}
                  className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                  style={{ backgroundColor: "#3b5998" }}
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Continue with Google
                </span>
                <span
                  onClick={() => signInWithGithub()}
                  className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                  style={{ backgroundColor: "#55acee" }}
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Continue with GitHub
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
