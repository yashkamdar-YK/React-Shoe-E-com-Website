import React from "react";
import { User, Mail, LogOut } from "lucide-react";
import { useFirebaseContext } from "../Context/Firebase";
import { useNavigate } from "react-router-dom";

const UserProfileCard = ({ onClose }) => {
  const navigate = useNavigate();
  const { userData, logOutUser, isLoggedIn } = useFirebaseContext();

  const handleLogout = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      await logOutUser();
      if (onClose) onClose();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (!isLoggedIn) return null;

  return (
    <div className="w-full max-w-lg bg-white rounded-lg shadow-lg border border-gray-200 p-6">
      <div className="flex flex-col items-center gap-4">
        {/* Profile Image */}
        <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Info */}
        <div className="w-full space-y-3">
          {/* Username */}
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <User className="w-5 h-5 text-gray-500" />
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Username</span>
              <span className="font-medium">
                {userData?.name || "Loading..."}
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
            <Mail className="w-5 h-5 text-gray-500" />
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Email</span>
              <span className="font-medium">
                {userData?.email || "Loading..."}
              </span>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 p-3 mt-4 text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-200 cursor-pointer"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;