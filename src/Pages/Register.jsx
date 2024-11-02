import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFirebaseContext } from "../Context/Firebase";

export default function Register() {
  const navigate = useNavigate();
  const firebase = useFirebaseContext();
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(firebase.isLoggedIn);

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/");
    }
  }, [firebase, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signUpUser = await firebase.crateUserAccount(name, email, password);
    console.log("User Register SucessFully", signUpUser);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Create Your Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            action="#"
            method="POST"
            className="space-y-4"
          >
            
            <div>
              <label
                htmlFor="name"
                className=" flex  text-sm font-medium leading-6"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setName(e.target.value)} //Get email in email variable with setEmail Fun
                  value={name}
                  id="email"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter Your Name"
                  autoComplete="name"
                  className=" px-4 font-medium  tracking-wide block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className=" flex  text-sm font-medium leading-6"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setEmail(e.target.value)} //Get email in email variable with setEmail Fun
                  value={email}
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  autoComplete="email"
                  className=" px-4 font-medium tracking-wide block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Password
                </label>
                <div className="text-sm"></div>
              </div>
              <div className="mt-1">
                <input
                  onChange={(e) => setPassword(e.target.value)} //Get Passsword in password variable with setPassword Fun
                  value={password}
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Enter password"
                  className=" px-4 font-medium tracking-wide block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div >
              <button
                type="submit"
                className=" flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Have account:{" "}
            <NavLink
              to={"/login"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}
