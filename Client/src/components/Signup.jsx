import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Signup() {
const location = useLocation();

const navigate = useNavigate();

const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3003/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup successful");
          navigate(from, {replace: true});
        }
        localStorage.setItem("Users", JSON.stringify(res.data));
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
          toast.error("Error: " + error.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="modal" open>
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">User Signup</h3>

              <div className="mt-7 ">
                <span>Name</span>
                <br></br>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-80 px-3 py-1 border rounded-md outline-none mt-2"
                  {...register("fullname", { required: true })}
                ></input>
                <br></br>
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-7 ">
                <span>Email ID</span>
                <br></br>
                <input
                  type="email"
                  placeholder="Enter email id"
                  className="w-80 px-3 py-1 border rounded-md outline-none mt-2"
                  {...register("email", { required: true })}
                ></input>
                <br></br>
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-7">
                <span>Password</span>
                <br></br>
                <input
                  type="Password"
                  placeholder="Enter password"
                  className="w-80 px-3 py-1 border rounded-md outline-none mt-2"
                  {...register("password", { required: true })}
                ></input>
                <br></br>
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex mt-10 justify-between">
                <button className="bg-purple-600 text-white px-5 py-1 rounded-md hover:bg-orange-600 duration-300 text-xl">
                  Signup
                </button>
                <span className="text-xl">
                  Already Registered?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
