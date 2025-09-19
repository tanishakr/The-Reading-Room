import React from "react";
import { useAuthentication } from "../context/AuthenticationProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuthentication();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successful");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 1000)
    }
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-orange-600 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
