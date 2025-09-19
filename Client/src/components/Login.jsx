import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3003/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login successful");

          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data));
          }, 1000);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
          toast.error("Error: " + error.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").closest()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">User Login</h3>

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
              <button className="bg-purple-600 text-white px-5 py-1 rounded-md hover:bg-orange-600 duration-300">
                Login
              </button>
              <span className="mt-1">
                Not Registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Sign up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
