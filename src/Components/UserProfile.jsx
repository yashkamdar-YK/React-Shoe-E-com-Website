// import React, { useState, useRef, useEffect } from "react";
// import { User, Mail, X, LogOut } from "lucide-react";
// import { useFirebaseContext } from "../Context/Firebase";
// import { useNavigate } from "react-router-dom";

// const UserProfile = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();
//   const { userData, logOutUser, isLoggedIn, loading } = useFirebaseContext();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleLogout = async () => {
//     try {
//       const result = await logOutUser();
//       if (result.success) {
//         setIsOpen(false);
//         navigate("/"); // Redirect to home page after logout
//       } else {
//         console.error("Logout failed:", result.error);
//       }
//     } catch (error) {
//       console.error("Error during logout:", error);
//     }
//   };

//   if (loading || !isLoggedIn) return null;

//   return (
//     <div className="relative" ref={dropdownRef}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="p-2 rounded-full hover:bg-gray-100 transition-colors"
//         aria-label="Toggle profile menu"
//       >
//         <User className="w-6 h-6" />
//       </button>
      
//       {isOpen && (
//         <div className="absolute right-0 top-14 w-[90vw] max-w-[320px] bg-white rounded-lg shadow-lg transform transition-all duration-200 ease-in-out opacity-100 scale-100 border border-gray-200 sm:w-80 md:right-0 lg:right-0">
//           <div className="p-4 sm:p-6 relative">
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-2 right-2 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
//               aria-label="Close profile menu"
//             >
//               <X className="w-5 h-5 text-gray-500" />
//             </button>

//             <div className="flex flex-col items-center gap-3 sm:gap-4 pt-4">
//               <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gray-200">
//                 <img
//                   src="/profile.jpeg"
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="w-full space-y-2 sm:space-y-3">
//                 <div className="flex items-center gap-2 p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
//                   <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
//                   <div className="flex flex-col min-w-0">
//                     <span className="text-xs sm:text-sm text-gray-500">Username</span>
//                     <span className="font-medium text-sm sm:text-base truncate">
//                       {userData?.name || "Loading..."}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2 p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
//                   <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
//                   <div className="flex flex-col min-w-0">
//                     <span className="text-xs sm:text-sm text-gray-500">Email</span>
//                     <span className="font-medium text-sm sm:text-base truncate">
//                       {userData?.email || "Loading..."}
//                     </span>
//                   </div>
//                 </div>

//                 <button
//                   onClick={handleLogout}
//                   className="w-full cursor-pointer mt-4 flex items-center gap-2 p-2 text-red-500 bg-red-50 rounded hover:bg-red-100 transition-colors"
//                 >
//                   <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
//                   <span className="font-medium">Logout</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;

import React, { useState, useRef, useEffect } from "react";
import { User } from "lucide-react";
import { useFirebaseContext } from "../Context/Firebase";
import UserProfileCard from "./UserProfileCard";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { isLoggedIn } = useFirebaseContext();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isLoggedIn) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full transition-colors duration-200 cursor-pointer"
        aria-label="Toggle profile menu"
      >
        <i className="fa-regular fa-user w-11 h-12 flex justify-center items-center text-lg font-semibold " />
      </button>
      
      {isOpen && (
        <div className="absolute right-0  top-14 z-50">
          <UserProfileCard onClose={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default UserProfile;